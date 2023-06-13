module.exports = (type, user) => {
  const { BASIC_URL } = process.env;
  const startLink = `${BASIC_URL}/user/${user.id}/start/`;

  const template = {
    key: "type",
    reminders: {
      key: "language",
      he: `הי, הכנו עבורך מערך הדרכה מותאם אישית ובו כל מה שצריך לדעת על אופן ההזרקה, לקראת השימוש בעט האינסולין שנבחר עבורך. לצפייה: ${startLink}`,
      ru: `Здравствуйте! Мы подготовили для Вас индивидуально адаптированную инструкцию, включающую в себя все, что Вы должны знать о способе введения инсулина перед использованием подобранной для Вас шприц-ручки. Для просмотра нажмите на ссылку: ${startLink}`,
      ar: `مرحبًا، حضّرنا من أجلك منظومة إرشاد مُلاءَمة شخصيًّا وفيها كلّ ما يجب معرفته حول كيفيّة الحقن، استعدادًا لاستخدام قلم الأنسولين الذي تمّ اختياره من أجلك. للمشاهدة: ${startLink}`,
      en: `Hi! We've prepared a personalized video for you with everything you need to know about how to use your insulin. Watch it here: ${startLink}`,
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
