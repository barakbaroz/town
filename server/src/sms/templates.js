module.exports = (type, user) => {
  const { BASIC_URL } = process.env;
  const startLink = `${BASIC_URL}/user/${user.id}/start`;

  const template = {
    key: "type",
    CaseCreation: `היי, מצורף לינק לשאלון רפואי וסרטון הדרכה מותאם אישית לקראת הניתוח שנקבע לכם. אחרי שליווינו אלפי משפחות וילדים אנחנו יודעים שצפייה בסרטון עוזרת מאוד להיערך לניתוח וחוסכת זמן המתנה יקר ביום ההכנה. חשוב שתצפו בו טרם הגעתכם, בלינק הבא: ${startLink}`,
    OpenReminder: `היי, להזכירכם, מצורף לינק לשאלון רפואי וסרטון הדרכה מותאם אישית לקראת הניתוח שנקבע לכם. משפחות רבות כבר דיווחו שהצפייה בסרטון עזרה להם מאוד להיערך לניתוח וחסכה להם זמן המתנה יקר ביום ההכנה. לצפייה: ${startLink}`,
    AnsweredNodidntComplete: `היי, עדיין לא השלמתם את התהליך לקבלת פטור מפגישה עם רופא/ה מרדים/ה ביום ההכנה לניתוח. על מנת לא להפסיד את ההזדמנות לחסוך זמן המתנה יקר ביום ההכנה, כל שנותר לכם לעשות הוא לצפות בסרטון ההדרכה עד סופו ולאשר את ההנחיות. לצפייה ואישור: ${startLink}`,
    TwoDaysAnsweredNoDidntWatch: `היי, נותרו לכם יומיים בלבד להשלמת תהליך קבלת הפטור מפגישה עם רופא/ה מרדים/ה ביום ההכנה לניתוח. על מנת לא להפסיד את ההזדמנות לחסוך זמן המתנה יקר ביום ההכנה, כל שנותר לכם לעשות הוא לצפות בסרטון ההדרכה עד סופו ולאשר את ההנחיות: ${startLink}`,
    TwoDaysAnsweredNoDidntSign: `היי, נותרו לכם יומיים בלבד להשלמת תהליך קבלת הפטור מפגישה עם רופא/ה מרדים/ה ביום ההכנה לניתוח. על מנת לא להפסיד את ההזדמנות לחסוך זמן המתנה יקר ביום ההכנה, כל שנותר לכם לעשות הוא לאשר את ההנחיות: ${startLink}`,
    AnsweredyesdidntComplete: `היי, על מנת להשלים את תהליך טרום ההרדמה, נותר לכם לצפות בסרטון ההדרכה עד סופו ולאשר את ההנחיות. הצפייה בסרטון תסייע לכם להתכונן טוב יותר לניתוח. לצפייה ואישור: ${startLink}`,
    Ptor: `השלמתם את תהליך טרום ההרדמה בהצלחה. בהתאם לשאלון הרפואי שמילאתם, ובזכות הצפייה בסרטון, לא תצטרכו להיפגש עם הרופא/ה המרדים/ה ביום ההכנה לניתוח, עם הצגת האישור הנמצא בלינק הבא: ${startLink}`,
    NotPtor: `השלמתם את החלק הראשון של תהליך טרום ההרדמה ואנו מקווים שעזרנו לכם להבין טוב יותר איך להתכונן ולמה לצפות. ביום טרום הניתוח נמשיך לעזור לכם להתכונן בצורה הטובה ביותר`,
    PtorReminder: `היי, לקראת יום ההכנה לניתוח, רצינו להזכיר לכם שבהתאם לשאלון הרפואי שמילאתם, לא תצטרכו להיפגש עם הרופא/ה המרדים/ה ביום ההכנה לניתוח, עם הצגת האישור הנמצא בלינק הבא: ${startLink}`,
    NotPtorReminder: `הי, לקראת יום ההכנה לניתוח, רצינו להזכיר לכם שיש באפשרותכם לחזור ולצפות שוב בסרטון ההדרכה וטפסי ההכנה שיעזרו לכם להבין טוב יותר איך להתכונן ולמה לצפות בלינק הבא ${startLink}`,
    PtorCancellation: {
      key: "gender",
      male: "הודעה זו מבטלת את הפטור מפגישה עם רופא מרדים ביום ההכנה לניתוח. השאלון הקליני שמילאת בנוגע למצבו הבריאותי של ילדכם נשלח להורה נוסף, ומתשובותיכם עולה אי התאמה אשר אינה מאפשרת את מתן הפטור.",
      female:
        "הודעה זו מבטלת את הפטור מפגישה עם רופא מרדים ביום ההכנה לניתוח. השאלון הקליני שמילאת בנוגע למצבה הבריאותי של ילדתכם נשלח להורה נוסף, ומתשובותיכם עולה אי התאמה אשר אינה מאפשרת את מתן הפטור.",
    },
  };

  return findMessageByParams(template, {
    type,
    ...user.Case.dataValues,
    ...user.dataValues,
  });
};

const defaultValues = {
  gender: "male",
};

const formatOptions = {
  date: { year: "numeric", month: "numeric", day: "numeric" },
  time: { hour: "2-digit", minute: "2-digit" },
};

const formatDate = (dateObj, type, locales = "he-IL") => {
  const options = formatOptions[type];
  return dateObj.toLocaleString(locales, options);
};

const findMessageByParams = (template, userData) => {
  if (template instanceof Object && "key" in template)
    return findMessageByParams(
      template[userData[template.key]] || template[defaultValues[template.key]],
      userData
    );
  return template;
};
