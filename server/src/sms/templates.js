module.exports = (type, user) => {
  const { BASIC_URL } = process.env;
  const startLink = `${BASIC_URL}/api/user/entry/${user.id}`;
  const { procedureDate, procedureTime } = user.Case;
  const date = new Date(procedureDate);
  const threeDaysBefore = new Date();
  threeDaysBefore.setDate(date.getDate() - 3);
  const template = {
    key: "type",
    CaseCreation: `שלום, לקראת הבדיקה שנקבעה לך לתאריך ${procedureDate} בשעה ${procedureTime} , חשוב לדעת שההכנה לבדיקה חיונית להצלחתה. הכנה בלתי מספקת עלולה להוביל לצורך בבדיקה חוזרת. בקישור הבא מצורף סרטון הדרכה מותאם אישית שיעזור לך להתכונן לבדיקה.\n${startLink}`,
    FirstVideoReminder: `שלום, אנו מזכירים לך לצפות בסרטון ההדרכה לקראת הבדיקה שלך ולקבל מידע חשוב שיעזור לך להתכונן לבדיקה בצורה מיטבית.\n${startLink}`,
    SecondVideoReminder: `שלום, זוהי תזכורת אחרונה לצפות בסרטון ההדרכה ולהגדיל משמעותית את הסיכוי שלך להגיע מוכן לבדיקה ולהימנע מצורך בבדיקה חוזרת.\n${startLink}`,
    FirstNutritionReminder: `שלום, לקראת הבדיקה שלך בבילינסון בתאריך ${date.getDate()}/${
      date.getMonth() + 1
    } ב ${procedureTime} רצינו להזכיר לך שהחל מתאריך ${threeDaysBefore.getDate()}/${
      threeDaysBefore.getMonth() + 1
    } עליך לשנות את התזונה שלך ולאכול מזון דל סיבים בלבד לפי הפירוט בסרטון המצורף. הכנה טובה חיונית להצלחת הבדיקה!\n${startLink}`,
    SecondNutritionReminder: `שלום, לקראת הבדיקה שלך בעוד יומיים בבילינסון, זאת תזכורת ש 24 שעות לפני הבדיקה שלך,  עליך לעבור לתזונה נוזלית בלבד ולהתחיל לקחת מרוקנים לניקוי המעי לפי הנחיית הרופא/ה. הכנה טובה חיונית להצלחת הבדיקה. יש ללחוץ על הקישור לקריאת ההנחיות.\n${startLink}`,
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
