/** function who gets reminderId and give all the info on that reminder.
 * @param {String} sendAt: string who calculate timeStamp depends on the structure of the sentence
 * (amount : number, units : [days], sign : [after | before], fieldName : field from DB, at, hour : `HH:MM`).
 * @param {Array<String>} onSend: which reminder should to add after the current reminder has send.
 * @param {Object} onAction: which reminder should to add after userAction.
 */

//in order to insert new reminder we just need to make sure that were sending the right parameters.
//the name of the reminder, the table the column and the timer that we want the reminder to be depend on,
//and which reminder should we trigger next after userAction or after cronJob handle (if we need to trigger at all).

const sendTime = [
  "13:00",
  "13:00",
  "13:00",
  "13:00",
  "13:00",
  "13:00",
  "20:50",
];

const remindersInfo = {
  caseCreation: {
    id: "caseCreation",
    textKey: "CaseCreation",
    sendAt: "immediate",
    onSend: [],
    onAction: {},
    dependencies: [],
  },
  firstVideoReminder: {
    id: "firstVideoReminder",
    textKey: "FirstVideoReminder",
    sendAt: "1 days after creation",
    sendTime: sendTime,
    onSend: [],
    onAction: { "watched-video": [] },
    dependencies: ["creation"],
  },
  secondVideoReminder: {
    id: "secondVideoReminder",
    textKey: "SecondVideoReminder",
    sendAt: "2 days after creation",
    sendTime: sendTime,
    onSend: [],
    onAction: { "watched-video": [] },
    dependencies: ["creation"],
  },
  firstNutritionReminder: {
    id: "firstNutritionReminder",
    textKey: "FirstNutritionReminder",
    sendAt: "4 days before procedure",
    sendTime: sendTime,
    onSend: [],
    onAction: {},
    dependencies: ["procedure"],
  },
  secondNutritionReminder: {
    id: "secondNutritionReminder",
    textKey: "SecondNutritionReminder",
    sendAt: "2 days before procedure",
    sendTime: sendTime,
    onSend: [],
    onAction: {},
    dependencies: ["procedure"],
  },
};

const independentAction = {
  "three-to-four-days-pre-procedure": ["secondNutritionReminder"],
  "five-days-pre-procedure": [
    "firstNutritionReminder",
    "secondNutritionReminder",
  ],
  "six-days-pre-procedure": [
    "firstVideoReminder",
    "firstNutritionReminder",
    "secondNutritionReminder",
  ],
  "seven-plus-days-pre-procedure": [
    "firstVideoReminder",
    "secondVideoReminder",
    "firstNutritionReminder",
    "secondNutritionReminder",
  ],
};

module.exports = { remindersInfo, independentAction };
