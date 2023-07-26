module.exports = (type, user) => {
  const { BASIC_URL } = process.env;
  const startLink = `${BASIC_URL}/api/user/entry/${user.id}`;

  const template = {
    key: "type",
    CaseCreation: `היי, מצורף סרטון הדרכה מותאם אישית שיעזור לך להבין טוב יותר מה זה אי ספיקת לב וכיצד להתמודד עמה בשגרת חייך. הצפייה בסרטון תעזור לך להגביר את המעורבות שלך בטיפול. לצפייה:\n${startLink}`,
    FirstVideoReminder: `היי, כבר צפית בסרטון ההדרכה שהותאם במיוחד עבורך? כדי לא להפסיד מידע חשוב וכלים שימושיים להתמודדות עם אי ספיקת לב, כל שעליך לעשות הוא לצפות בסרטון בלינק הבא:\n${startLink}`,
    SecondVideoReminder: `היי, זוהי תזכורת אחרונה לצפות בסרטון ההדרכה שהותאם במיוחד עבורך. מטופלים רבים כבר צפו בסרטון כדי להיות מעורבים יותר בטיפול שלהם. לצפייה:\n${startLink}`,
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
