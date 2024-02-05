module.exports.getMessage = (type, user) => {
  const { BASIC_URL } = process.env;
  const link = `${BASIC_URL}/api/user/entry/${user.id}`;
  const { procedureDate } = user.Case;
  const procedureDateString = formatDate(new Date(procedureDate), "date");
  const template = {
    key: "type",
    CaseCreation: `Hi! You have an examination scheduled for ${procedureDateString} at our clinic. It’s important that you understand how crucial correct preparation is for the procedure’s success. Incorrect bowel preparation may force you to redo the examination. Click on the link below to watch a personalized video that will help you prepare for the procedure.\n${link}`,
    FirstVideoReminder: `Hi! Ahead of your examination, we remind you to watch the personalized video that will help you prepare better.\n${link}`,
    SecondVideoReminder: `Hi! This is a final reminder to watch the personalized video and significantly increase your chances of being prepared for the examination and avoiding the need for a retake.\n${link}`,
    FirstNutritionReminder: `Hi! Ahead of your examination at our clinic on ${procedureDateString}, we’d like to remind you that starting tomorrow, you need to change your diet and begin taking medication as instructed by your personal physician. Remember, correct bowel preparation is crucial for the examination’s success. Click on the link below to watch your personalized preparation instructions.\n${link}`,
    SecondNutritionReminder: `Hi! Ahead of your examination, we remind you that In 24 hours, you need to stop eating solid food and begin taking laxatives as instructed by your personal physician. Correct bowel preparation is crucial for the examination’s success. Click on the link below \n${link}`,
  };

  return findMessageByParams(template, {
    type,
    ...user.Case.dataValues,
    ...user.dataValues,
  });
};

module.exports.getSubject = (type) => {
  const Subjects = {
    CaseCreation: "Personalized videos for proper bowel preparation",
    FirstVideoReminder: "We remind you to watch the video to prepare better!",
    SecondVideoReminder:
      "Final reminder to watch the bowel preparation instructions video",
    FirstNutritionReminder: "Diet and medication adjustments",
    SecondNutritionReminder:
      "Taking your laxative solution and change to liquid diet",
  };
  return Subjects[type];
};

const formatOptions = {
  date: { year: "numeric", month: "numeric", day: "numeric" },
  time: { hour: "2-digit", minute: "2-digit" },
};

const formatDate = (dateObj, type, locales = "en-US") => {
  const options = formatOptions[type];
  return dateObj.toLocaleString(locales, options);
};

const findMessageByParams = (template, userData) => {
  if (template instanceof Object && "key" in template)
    return findMessageByParams(template[userData[template.key]], userData);
  return template;
};
