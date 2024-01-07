const axios = require("axios");
const { Namer } = require("../models");
const service = require("../cases/service");
const { Token } = require("../old_models");

const dayTime = 1000 * 60 * 60 * 24;
const namerUserId = process.env.NAMER_USER_ID;
const baseNamerUrl = process.env.NAMER_URL;

const ServicesCodesToConcentrate = {
  T99999003: "meroken",
  T99999004: "meroken",
  T99999005: "picolax",
  T99999006: "picolax",
  T99999017: "moviprep",
  T99999018: "moviprep",
};

const ValidServicesCodes = [
  "445378000",
  "445380000",
  "T45378001",
  "445383000",
  "T45383001",
];

const getConcentrate = ({ Services }) => {
  if (!Services) return null;
  const codeList = Services.split(",");
  const valid = codeList.find((code) => ValidServicesCodes.includes(code));
  if (!valid) return null;
  const ConcentrateCode = codeList.find(
    (code) => code in ServicesCodesToConcentrate
  );
  if (!ConcentrateCode) return null;
  return ServicesCodesToConcentrate[ConcentrateCode];
};

const allNamerPatient = baseNamerUrl + "/namer/allNamerPatient";
module.exports.scan = async () => {
  console.log(`Scanning Namer`);
  const now = new Date();
  for (let addDays = 4; addDays <= 6; addDays++) {
    const date = new Date(Number(now) + dayTime * addDays);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const pDate = date.toLocaleDateString("se-SE", options);
    const body = {
      userName: process.env.NAMER_USERNAME,
      password: process.env.NAMER_PASSWORD,
      pDate,
      unit: "מ-גסטרו",
    };
    await axios.post(allNamerPatient, body).then(handleResponse);
  }
};

const namerPatient = baseNamerUrl + "/namer/namerPatient";
const handleResponse = async (res) => {
  const { Appointments } = res.data;
  if (!Appointments) return console.warn(`No Appointments`);
  for (const appointment of Appointments) {
    if (appointment.Deleted) return;
    const body = {
      userName: process.env.NAMER_USERNAME,
      password: process.env.NAMER_PASSWORD,
      IchilovID: appointment.PatKey,
    };
    const result = await axios.post(namerPatient, body);
    await validatedData({ ...appointment, ...result.data });
  }
};

const validatedData = async (data) => {
  const oldData = await Namer.findByPk(data.PatKey);
  if (oldData) return;
  const phoneNumber = data.Phone?.replace(/[^\d]/g, "");
  if (!phoneNumber) return;
  const oldDbData = await Token.findOne({
    where: { phoneNumber, isEnabled: true },
  });
  if (oldDbData) return;
  const zehutNumber = data.ID?.replace(/[^\d]/g, "")?.slice(-4);
  if (!zehutNumber) return;
  const concentrate = getConcentrate(data);
  if (!concentrate) return;
  console.info(`New PatKey ${data.PatKey}`);
  create(
    {
      creatorId: namerUserId,
      phoneNumber,
      zehutNumber,
      concentrate: concentrate,
      date: new Date(data.AppDate),
      time: data.AppTime,
    },
    data
  );
};

const create = async (caseData, namerData) => {
  const CaseId = await service.create(caseData);
  const NamerDataObj = {
    patKey: namerData.PatKey,
    appDate: namerData.AppDate,
    appTime: namerData.AppTime,
    unit: namerData.Unit,
    calendar: namerData.Calendar,
    phone: namerData.Phone,
    gender: namerData.Gender,
    dateOfBirth: namerData.Dob,
    services: namerData.Services,
    CaseId,
  };
  await Namer.create(NamerDataObj);
};
