import { postAnalytics } from "../../analytics";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LegalText() {
  const supportClick = () => {
    postAnalytics({ type: `TOS-support-request` });
  };
  const handlePrivacyClick = () => {
    postAnalytics({ type: "TOS-privacy-link-clicked" });
  };

  return (
    <Wrapper id="LegalTextWrapper">
      <Title>תנאי שימוש</Title>
      <Paragraph>
        המרכז הרפואי ת&quot;א (להלן, ביחד: &quot;המוסד הרפואי&quot; או
        &quot;אנחנו&quot;) מברך אותך, המטופל, או מי מטעמך (לדוג&apos;: הורה או
        אפוטרופוס) (להלן: &quot;המשתמש(ים)&quot; או &quot;אתה&quot;), לפלטפורמה
        האינטרנטית שלנו המיועדת לסיוע בהכנה לפרוצדורות רפואיות ולטיפול משלים להן
        (להלן: &quot;הפלטפורמה&quot;). מטרת הפלטפורמה היא, בין היתר, לספק תכני
        הדרכה מותאמים אישית (כפי שיפורט בהמשך) לקראת הפרוצדורה הרפואית שעל
        המשתמש לעבור במוסד הרפואי (להלן: &quot;ההליך הרפואי&quot;). הפלטפורמה
        מסופקת ונתמכת על ידי חברת ג&apos;יסט מד בע&quot;מ
        (&quot;ג&apos;יסטמד&quot; או &quot;החברה&quot;, כמפורט בסעיף &rlm;13
        שלהלן).
      </Paragraph>
      <SubTitle>הסכמה לתנאים</SubTitle>
      <Paragraph>
        בכניסתך, התחברותך או שימושך בפלטפורמה, הנך מאשר כי קראת והבנת את תנאי
        השימוש הבאים, לרבות התנאים של מדיניות הפרטיות שלנו המופיעים:
        <Link to="../Privacy" onClick={handlePrivacyClick}>
          כאן
        </Link>{" "}
        (ביחד, &quot;התנאים&quot;), כי התנאים יחייבו אותך וכי תעמוד בכל החוקים
        והתקנות החלים על השימוש שלך בפלטפורמה ואתה מכיר בכך שתנאים אלה מהווים
        חוזה משפטי וניתן לאכיפה בינינו לבינך.&nbsp;אם אינך מסכים לאי אילו מתנאי
        השימוש המפורטים להלן, הנך מחויב, באופן מיידי, להימנע מכניסה, מהתחברות או
        משימוש בפלטפורמה, בכל אופן.&nbsp;התנאים כתובים בלשון זכר מטעמי נוחות
        בלבד ומיועדים לכל המינים.
      </Paragraph>
      <SubTitle>הפלטפורמה</SubTitle>
      <Paragraph>
        במידה והמטופל הרלוונטי עבורו נעשה שימוש בפלטפורמה אינו מסוגל ו/או כשיר
        לקרוא ולקבל תנאים אלו, לרבות מטופלים בני פחות משמונה-עשרה (18): בכניסתך,
        התחברותך, שימושך בפלטפורמה ו/או בשירותים (כהגדרתם להלן), הנך מאשר כי אתה
        משמש כאפוטרופוס המוסמך על פי דין לקבל עליו את תנאים אלו בשם משתמש
        הפלטפורמה, לרבות וללא מגבלה לעניין מסירת וקבלת מידע רפואי על אודות
        המשתמש.&nbsp; הפלטפורמה זמינה ליחידים שהם (א) מעל גיל שמונה-עשרה (18);
        ו-(ב) בעלי כשירות משפטית לקבל עליהם את התנאים ולכרות הסכם מחייב לפי כל
        דין או שהאפוטרופוס המוסמך אישר וקיבל עבורם את התנאים. לפיכך, הנך מאשר כי
        אתה בעל הסמכות הנדרשת לקבל עליך את התנאים, ולכרות הסכם מחייב תחת כל דין,
        להשתמש בפלטפורמה לאור התנאים ולהוציא לפועל את חובותיך להלן.&nbsp;
        הפלטפורמה מאפשרת מעורבות במסעו הטיפולי של המשתמש, במסגרת ההליך הרפואי
        אותו עבר (או שהוא מתעתד לעבור) במוסד הרפואי, ולקבל תכני הדרכה מותאמים
        אישית, כגון הנחיות לביצוע ההליך הרפואי (לדוג&apos;: זמני צום, שימוש
        בתרופות לפני או אחרי ההליך הרפואי ועוד) סרטונים, מסמכים, הנחיות, עיון
        מקדים בטופס הסכמה מדעת וכיו&quot;ב (להלן, ביחד: &quot;תכני
        ההדרכה&quot;), ולשתף תכנים אלה עם אחרים, במטרה לסייע למשתמש ו/או אדם
        מטעמו להיערך להליך הרפואי. למען הסר ספק, תכני ההדרכה (לרבות הסרטונים)
        אינם מכילים מידע אישי של המטופל, אולם הם מותאמים אישית לטיפול הרפואי
        הספציפי ומצבו הרפואי האישי של המשתמש, כפי שיפורט להלן.&nbsp; המשתמש יקבל
        גישה לפלטפורמה באמצעות הודעת טקסט או דואר-אלקטרוני שתישלח מהמוסד הרפואי
        או מי מטעמו, לפי פרטי הקשר שסופקו על ידי המשתמש או בני משפחתו, ושמכילה
        קישורית (לינק) לפלטפורמה. שים לב שההודעה והקישורית כאמור הינן אישיות
        ואינן ניתנות להעברה לאחר. בכניסתו לפלטפורמה, המשתמש עשוי להידרש לספק
        מידע מסוים על אודותיו, לרבות על אודות מצבו הבריאותי, באמצעות שאלון רפואי
        ייעודי (להלן: &quot;השאלון&quot;). באמצעות מידע שקיים בתיקים הרפואיים של
        המוסד הרפואי ובהתאם למידע שהוזן בשאלון, הפלטפורמה תספק תכני הדרכה
        מותאמים אישית למטופל. כמו-כן, ייתכן והפלטפורמה תאפשר העלאת מסמכים
        רלוונטיים, כגון אישורים רפואיים, זימונים וכיו&quot;ב.&nbsp; הפלטפורמה
        עשויה לכלול פונקציונאליות נוספת, לרבות תזכורות שישלחו למשתמש באמצעים
        שונים (למשל הודעות פוש, SMS וכיו&quot;ב) ויצירת קשר עם הצוות הרפואי
        הרלוונטי.
      </Paragraph>
      <BoldParagraph>לתשומת לבך:</BoldParagraph>
      <ol>
        <li>
          <BoldParagraph>
            אתה עשוי להעלות מסמכים ו/או מידע אחר לפלטפורמה. יובהר כי הפלטפורמה
            אינה מיועדת לשמירת מידע, רפואי או אחר, ואיננו מתחייבים כי מסמכים
            שתעלה לפלטפורמה ו/או מידע שתזין לפלטפורמה במסגרת השאלון או בכלל,
            יהיו זמינים לך, בין אם בזמן שימושך בפלטפורמה ובכלל. באחריותך לוודא
            שאתה שומר עותק גיבוי של כל מידע ומסמך שיועלה על ידך למערכת. המוסד
            הרפואי ו/או ג&apos;יסטמד לא תישאנה בכל אחריות בנוגע לאבדן או היעדר
            גישה למידע ו/או מסמכים כאמור.&nbsp;
          </BoldParagraph>
        </li>
        <li>
          <BoldParagraph>
            כל מידע אשר נאסף או נמסר על ידך במסגרת הפלטפורמה ישמש לצורך התאמה
            אישית של תכני ההדרכה עבורך, וזאת בתוך הפלטפורמה בלבד. למען הסר ספק,
            מידע זה אינו נשמר ברשומות כללית, אינו מועבר למוסד הרפואי ואינו נרשם
            בתיקך הרפואי. בכל שינוי במצבך הרפואי, הנך נדרש לעדכן, ישירות, את
            הרופא המטפל שלך ו/או את הצוות הרפואי הרלוונטי, וזאת בהקדם האפשרי.
          </BoldParagraph>
        </li>
        <li>
          <BoldParagraph>
            זוהי אחריותך הבלעדית לוודא שכל המידע שהזנת בשאלון ו/או כל מידע אחר
            אותו אתה נדרש לשם שימוש בפלטפורמה הוא מדויק ומלא, וכי הכללית ו/או
            ג'יסטמד אינם אחראיים לכל נזק או טענה אשר עשויה לנבוע כתוצאה מהזנת
            מידע חלקי, שגוי או שאינו מדויק בתכני ההדרכה, בשאלון ו/או בפלטפורמה
            בכלל.{" "}
          </BoldParagraph>
        </li>
      </ol>
      <Paragraph>
        אנו עשויים לדרוש, בכניסתך ושימושך בפלטפורמה, פרטי הזדהות מסוימים. עליך
        לספק לנו מידע מלא, מדויק ונכון, והנך מסכים בזאת כי לא תציג שלא כהלכה את
        זהותך או כל פרט אחר במסגרת זו. היה וסברנו כי נכנסת לפלטפורמה באמצעות
        פרטי זיהוי של אדם אחר, או אם מסרת פרטים שגויים במסגרת כניסתך לפלטפורמה,
        הרי שבכך אתה חושף את עצמך לאחריות פלילית ו/או אזרחית. הפלטפורמה כוללת,
        בין היתר, מידע ליצירת קשר, וידאו, מלל, קבצים, לוגואים, אייקונים, תמונות,
        מאגרי נתונים, קישורים, תוכן מיוחד אחר, נתונים טכניים, מסמכים, ידע,
        מפרטים, עיצובים, נתונים, "המראה והתחושה" של הפלטפורמה, אלגוריתמים, קוד
        מקור וקוד יעד, ממשקים, GUI, גרפיקה הקשורה לתכונות אינטראקטיביות, איורים,
        רישומים, אנימציות ותכונות אחרות המתקבלות על ידי או דרך הפלטפורמה, לרבות
        תכני ההדרכה והשאלון (ביחד, "התכנים"). כל השירותים המוצעים באמצעות
        הפלטפורמה יכונו בתנאים אלה ביחד "השירותים".
      </Paragraph>
      <Border>
        <BoldParagraph>
          המשתמש מאשר כי ידוע לו שכל השירותים במסגרת הפלטפורמה עשויים להיגזר
          מנסיבות ספציפיות הטעונות בדיקה פיסית ו/או מהמידע שהמשתמש סיפק במסגרת
          השאלון ו/או לרופא המטפל ו/או מבירורים רפואיים הקשורים להליך הרפואי.
          לפיכך, כללית ו/או ג'יסטמד אינם אחראיים לתכנים, לרבות תכני הדרכה,
          שהושפעו או נוצרו על בסיס מידע שגוי ו/או כוזב ו/או שאינו מדויק ו/או
          שאינו מלא, שהמשתמש סיפק למוסד הרפואי, לרבות אך לא רק במסגרת בדיקות
          רפואיות ו/או הפלטפורמה ו/או השאלון ו/או בכל התקשרות אחרת עם כללית.
          באחריותו הבלעדית של המשתמש לוודא שכל המידע שהוא מספק למוסד הרפואי,
          לרבות וללא מגבלה באמצעות השאלון ו/או הפלטפורמה, הינו נכון ומדויק.
          המשתמש מאשר כי ידוע לו שהפלטפורמה משמשת לעזר ונוחות בלבד וייתכן
          שהפלטפורמה לא תכלול את כל המידע ו/או האבחנות ו/או העצות הרפואיות
          הרלוונטיות. כמו כן, הפלטפורמה מיועדת לשימוש ביחס להליכים הרפואיים
          הספציפיים המוגדרים בה - מובהר בזאת כי אין להסתמך על הפלטפורמה ו/או
          השירותים ו/או התכנים ו/או תכני ההדרכה ביחס לפרוצדורה רפואית ו/או כל
          עניין רפואי אחר שאינו נכלל במפורש ובצורה פרטנית בשירותים שהפלטפורמה
          מספקת ושלא ביחס למטופל אשר עבורו הופקו התכנים במסגרת הפלטפורמה. מבלי
          לגרוע מכלליות האמור, כל התכנים (לרבות תכני ההדרכה), הניתנים במסגרת
          השירותים, יהיו רלוונטיים למועד מתן התכנים כאמור, והם אינם מהווים תחליף
          לייעוץ רפואי כללי. באחריותו הבלעדית של המשתמש להתייעץ עם גורם רפואי
          מוסמך ולפעול בהתאם להמלצת הרופא המטפל בכל עניין רפואי. בכל מקרה בו
          המשתמש חש בהחמרת המצב הרפואי עליו לפנות מיידית לקבלת עזרה רפואית. אם
          הנך האפוטרופוס של נושא ההליך הרפואי (המטופל), לרבות הורה למטופל שהוא
          קטין בן פחות משמונה עשרה, הנך מאשר בזאת כי אתה: (א) האפוטרופוס המוסמך
          לטפל בענייניו הרפואיים של המטופל בכל הקשור לשימוש בפלטפורמה זו; (ב)
          אחראי לספק, במקרה הצורך, את המידע הרפואי הנכון והמדויק לגבי המטופל,
          בהתאם לדרישותינו בתנאים אלה; ו-(ג) מקבל ומאשר בזאת את תנאי השימוש,
          לרבות את מדיניות הפרטיות שלנו. הפלטפורמה עשויה לאפשר למשתמש לשתף תכני
          הדרכה ומידע מתוך הפלטפורמה עם גורמים שלישיים, באמצעים שונים. כל שיתוף
          כאמור של תכנים אלה הינו באחריותו הבלעדית של המשתמש, ואנחנו ו/או
          ג'יסטמד לא נהיה אחראים לכל נזק או אובדן שייגרמו למשתמש או לכל אדם אחר
          כתוצאה או בקשר עם כל שיתוף של תכנים אלה עם גורמים שלישיים. יובהר כי,
          על אף שתכני ההדרכה הינם אנונימיים, שיתופם עם צדדים שלישיים עשוי לקשר
          תכנים אלה עם פרטיו האישיים של המשתמש. בין הצדדים לתנאים אלו, כל
          הזכויות בתכנים הזמינים בפלטפורמה, לרבות תכני ההדרכה, שמורות לכללית או
          לג'יסטמד. השירותים, התכנים ו/או תכני ההדרכה הזמינים בה ניתנים "כמו
          שהם" ("AS-IS").
        </BoldParagraph>
      </Border>
      <SubTitle>שימושים אסורים</SubTitle>
      <Paragraph>
        ישנן פעולות מסוימות שהינן אסורות בתכלית האיסור בעת השימוש בפלטפורמה. אנא
        קרא הגבלות אלו בעיון. אי עמידה באחת מההוראות המפורטות להלן עשויה להביא
        לידי סיום השימוש שלך בשירותים, ואף עשויה לחשוף אותך לחבות אזרחית ו/או
        פלילית. אלא אם כן הדבר הותר במפורש על ידי תנאים אלה או בכתב על ידינו,
        אינך רשאי (ואינך רשאי להתיר לכל צד שלישי): (א) להשתמש בפלטפורמה ו/או
        בשירותים ו/או בתכנים ו/או בתכני ההדרכה לכל מטרה בלתי חוקית, בלתי מוסרית,
        בלתי מורשית ו/או אסורה; (ב) להשתמש בפלטפורמה ו/או בשירותים ו/או בתכנים
        ו/או בתכני ההדרכה למטרות מסחריות או שאינן פרטיות; (ג) להסיר או להפריד
        מהתכנים ו/או מהפלטפורמה ו/או מתכני ההדרכה כל הגבלות וסימנים כלשהם
        המציינים זכויות קנייניות של כללית, של ג'יסטמד ו/או של נותני רישיונותיהם,
        לרבות כל ההודעות הקנייניות המופיעות בהם (כגון ©, ,™ או ®); (ד) להפר או
        לפגוע בזכויות המשתמשים לפרטיות וזכויות אחרות, או לאסוף מידע אישי מזהה
        אודות משתמשים ללא הסכמתם המפורשת, בין אם באופן ידני או באמצעות שימוש בכל
        רובוט, עכביש, סורק, כל יישום חיפוש או אחזור, או שימוש באמצעי, בתהליך או
        בשיטה ידניים או אוטומטיים אחרים על מנת להיכנס לפלטפורמה ולאחזר, לאסוף
        ו/או לשאוב מידע; (ה) לפגוע או לשבש את פעולת הפלטפורמה, השרתים או הרשתות
        המאחסנים את הפלטפורמה, או להפר כל חוק, תקנה, דרישה, נוהל או מדיניות של
        שרתים או רשתות כאמור; (ו) להצהיר הצהרות שקריות או להציג מצג שווא בנוגע
        לקשר שלך עם כל אדם או גוף, או לציין במפורש או במרומז כי אנחנו נותנים
        חסות לך, לאתר שלך, לעסק שלך או לכל הצהרה שאתה מפרסם, או להציג מידע שקרי
        או לא מדויק אודות הפלטפורמה ו/או השירותים; (ז) לבצע כל פעולה היוצרת או
        העלולה ליצור עומס בלתי סביר או לא פרופורציונלי על תשתית הפלטפורמה שלנו,
        כפי שייקבע על ידינו; (ח) לעקוף את כל האמצעים בהם אנו עשויים להשתמש על
        מנת למנוע או להגביל את הגישה לשירותים; (ט) להעתיק, לשנות, להתאים,
        להנגיש, לתרגם, להעביר, לבצע הנדסה חוזרת, להמיר קוד בינארי לקוד פתוח,
        לעשות דה-קומפילציה או להפריד כל חלק מהתכנים בפלטפורמה, או להציג לציבור,
        לשכפל, ליצור יצירות נגזרות, לבצע, להפיץ או לבצע שימוש דומה בתכנים; (י)
        להעתיק, להפיץ, להציג, להציג לציבור, להפחית לצורת קריאה אנושית, להמיר קוד
        בינארי לקוד פתוח, לעשות דה-קומפילציה, להתאים, להעניק רישיון משנה, לעשות
        כל שימוש מסחרי, למכור, להשכיר, להעביר, להשאיל, לעבד, להרכיב, לבצע הנדסה
        חוזרת, לשלב עם תוכנה אחרת, לתרגם, לשנות או ליצור יצירות נגזרות מכל חומר
        הכפוף לזכויות קנייניות שלנו, כולל הקניין הרוחני של הכללית ו/או של
        ג'יסטמד (כהגדרתו להלן), בכל דרך שהיא ובכל אמצעי שהוא; (יא) לעשות כל
        שימוש בשירותים ו/או בתכנים ו/או בתכני ההדרכה בכל אתר או רשת מחשבים, לכל
        מטרה, ללא הסכמתנו הכתובה מראש; (יב) ליצור סביבת דפדפן, לתחם (frame),
        ליצור העתק (mirror) או לבצע inline linking לתכנים; (יג) למכור, להעניק
        רישיון או לנצל למטרה מסחרית כלשהי כל שימוש או גישה לפלטפורמה ו/או לתכנים
        ו/או לתכני ההדרכה; (יד) למסגר או לשקף כל חלק מהפלטפורמה ללא הסכמתנו
        המפורשת הכתובה מראש; (טו) ליצור מאגר מידע על ידי הורדה ואחסון שיטתיים של
        כל או חלק מהתכנים ו/או מתכני ההדרכה ו/או מהפלטפורמה; (טז) להעביר או
        להנגיש בכל דרך אחרת, בקשר לפלטפורמה, כל וירוס, "תולעת", סוס טרויאני,
        באג, רוגלה, נוזקה או כל קוד מחשב, קובץ או תוכנה אחרים שעשויים או מיועדים
        להזיק לפעילות של כל חומרה, תוכנה, ציוד תקשורת, קוד או רכיב אחר אשר
        עשויים להזיק, להפריע או לפלוש בפועל או באופן פוטנציאלי; ו/או (יז) להפר
        אי אלו מהתנאים.
      </Paragraph>
      <SubTitle>השימוש של הפלטפורמה במידע</SubTitle>
      <Paragraph>
        הפלטפורמה אוגרת מידע בשרתי SQL Cloud של Google בתנאים כפי שאושרו על ידי
        ועדת הענן של הכללית. המידע המזהה נמחק מהשרת הייעודי לאחר חמישה (5) ימים
        לכל היותר, ונותרים פרטי מטופל אנונימיים באופן אשר לא ניתן לזהות את
        המטופל. גישה למידע המזוהה תינתן אך ורק לצוותים הרפואיים הייעודיים בכללית
        אשר קיבלו הרשאה לכך וכן לאנשי צוות הפיתוח המורשים לכך בג'יסטמד, באישור
        כללית. הפלטפורמה רשומה כמאגר מידע וחברת ג'יסטמד רשומה כמחזיק מאגר המידע.
      </Paragraph>
      <SubTitle>זכויות קניין רוחני</SubTitle>
      <Paragraph>
        הפלטפורמה, התכנים, תכני ההדרכה והנכסים הקנייניים שלנו או של ג'יסטמד וכל
        זכויות הקניין הרוחני הנוגעות בהם, לרבות אך לא רק, המצאות, פטנטים ובקשות
        פטנט, סימני מסחר, שמות מסחר, סימני שירות, זכויות יוצרים, שמות מתחם
        וסודות מסחרי, בין אם רשומים או ניתנים לרישום ובין אם לאו (ביחד, "הקניין
        הרוחני"), הם בבעלותנו או בבעלות ג'יסטמד ו/או נמסרו לנו או לג'יסטמד
        ברישיון ומוגנים על ידי חוקי פטנטים, זכויות יוצרים וקניין רוחני אחרים ועל
        ידי אמנות והסכמים בינלאומיים. כל זכות שלא הוקנתה לך במפורש להלן תישמר
        לנו ולנותני הרישיון שלנו. התנאים אינם מקנים לך זכות בקניין הרוחני שלנו
        ו/או של ג'יסטמד, אלא אך ורק זכות שימוש מוגבלת הניתנת לביטול בהתאם
        לתנאים. אין בתנאים אלה כדי להוות וויתור על הקניין הרוחני שלנו על פי כל
        דין.
      </Paragraph>
      <SubTitle>סימני מסחר ושמות מסחריים</SubTitle>
      <Paragraph>
        הלוגואים של כללית ושאר המזהים הקניינים המשמשים את כללית בקשר עם פלטפורמה
        ו/או השירותים הניתנים במסגרתה (להלן – "סימני המסחר של החברה") הם כולם
        סימני מסחר ו/או שמות מסחר של כללית, בין אם רשומים ובין אם לאו, ובין אם
        ניתנים לרישום ובין אם לאו. כל שאר סימני המסחר, שמות המסחר, סימנים מזהים
        אחרים וסמלים מסחריים אחרים (לרבות לוגו כזה או אחר) העשויים להופיע
        בפלטפורמה שייכים לבעליהם (להלן – "סימני מסחר של צדדים שלישיים"). סימני
        מסחר של צדדים שלישיים מובאים בפלטפורמה (אם בכלל) למטרות הצגה, תיאור
        וזיהוי בלבד. לא ניתנת בזאת כל זכות, רישיון או קניין בסימני המסחר של
        החברה או בסימני המסחר של צדדים שלישיים ולכן על המשתמש להימנע משימוש
        כלשהו בסימנים אלו, אלא אם כן הותר אחרת בתנאי שימוש אלה.
      </Paragraph>
      <SubTitle>משוב</SubTitle>
      <Paragraph>
        ככל שתמסור לכללית ו/או לג'יסטמד משוב, פידבק, תגובות או הצעות בקשר
        לפלטפורמה ("משוב"), ג'יסטמד תקבל רישיון בלעדי, ללא תמלוגים, משולם
        במלואו, כלל עולמי, תמידי ובלתי הדיר לשלב את המשוב בכל אחד מהמוצרים,
        הטכנולוגיות ו/או השירותים, הנוכחיים או העתידיים שלנו, ולהשתמש במשוב, ללא
        קבלת אישורך, עבור כל מטרה והכל ללא תמורה נוספת עבורך. אתה מסכים כי משוב
        כזה ייחשב כמידע שאינו סודי. יתרה מזאת, אתה מתחייב כי המשוב שלך אינו כפוף
        לתנאי רישיון אשר יש בהם כדי לחייב אותנו לעמוד בחובות נוספים בקשר
        למוצרים, טכנולוגיות ו/או שירותים המשלבים משוב כלשהו.
      </Paragraph>
      <SubTitle>זמינות</SubTitle>
      <Paragraph>
        זמינות ופעילות השירותים ו/או התכנים (לרבות תכני ההדרכה) הניתנים במסגרת
        הפלטפורמה תלויים בגורמים רבים, לרבות תוכנה, חומרה, רשתות תקשורת, ספקי
        שירותים או קבלנים של החברה או צדדים שלישיים אחרים (לרבות אלה המספקים
        שירותי אחסון ענן, שירותי רישום לאתרים ועוד). איננו מתחייבים כי השירותים
        יפעלו ו/או יהיו זמינים בכל עת ללא הפרעה, תקלה או שהיא תהיה חסינה מפני
        גישה לא מורשת ו/או ללא שגיאות. המשתמש מסכים בזאת כי כללית ו/או ג'יסטמד
        לא יהיו אחראים לאי היכולת של הפלטפורמה לפעול או להיות נגישה, מכל סיבה
        שהיא; לרבות הפסקות בפעילות האינטרנט או רשתות, הפסקות בפעילות החומרה או
        התכנה בשל בעיות טכניות או אחרות שאינן בשליטת החברה (למשל, סיכול, כח
        עליון, רשלנות של צדדים שלישיים וכד') או עקב תקלה או טעות של כללית ו/או
        ג'יסטמד או מי מטעמם.
      </Paragraph>
      <SubTitle>קטינים</SubTitle>
      <Paragraph>
        מבלי לגרוע מהאמור בתנאים אלה, כדי להשתמש בפלטפורמה עליך להיות מעל גיל
        שמונה עשרה (18). מטבע הדברים, יכולתנו לוודא כי המשתמש הינו מעל גיל שמונה
        עשרה (18) היא מוגבלת ביותר, ובד"כ תסתמך על הצהרת המשתמש עצמו, אותה אנו
        רשאים לדרוש בכל שלב. במקרה שיובא לידיעתנו כי אדם מתחת לגיל שמונה עשרה
        (18) משתמש בפלטפורמה, ללא ליווי הורה או אפוטרופוס המוסמך לטפל בענייניו
        הרפואיים של הקטין בכל הקשור לשימוש בפלטפורמה, אנו נחסום משתמש זה מלהיכנס
        לפלטפורמה ונעשה כל מאמץ על מנת למחוק מיידית כל מידע אישי (כהגדרתו של
        מונח זה במדיניות הפרטיות שלנו) בנוגע למשתמש כאמור. למען הסר ספק, ומבלי
        לגרוע מהאמור לעיל, השימוש בשירותים על ידי משתמשים (מטופלים) קטינים היא
        באחריות הוריהם או אפוטרופוס המוסמך לטפל בענייניהם הרפואיים של הקטינים.
      </Paragraph>
      <SubTitle>הסרת אחריות והתחייבויות</SubTitle>
      <Paragraph>
        שימושך בפלטפורמה היא באחריותך הבלעדית. בכל מקרה של שאלה רפואית, החמרה
        במצבך ו/או ספק באשר לתכני ההדרכה הכלולים בפלטפורמה, עליך לפנות באופן
        מיידי לרופא המטפל שלך ו/או לצוות הרפואי הרלוונטי. שים לב כי בכל מקרה
        הפלטפורמה אינה מיועדת לשימוש במצבי חירום. במידה המרבית המותרת על פי דין
        ולמעט כאמור במפורש בתנאים אלה, הפלטפורמה, השירותים וכל התכנים בפלטפורמה,
        לרבות תכני ההדרכה, ניתנים על-בסיס "כמו שהם" (“AS-IS”) והכללית ו/או
        ג'יסטמד, לא נושאים בכל אחריות או התחייבות מכל סוג שהיא, באופן מפורש או
        מכללא, לרבות אחריות לזכות בעלות או לאי הפרה או אחריות מכללא לשימוש,
        לאיכות מסחרית או להתאמה למטרה מסוימת וכן בכל אחריות הנובעת ממהלך העסקים
        הרגיל או פעולה מסחרית. ייתכן כי מוקנות לך זכויות צרכניות נוספות תחת הדין
        אשר אינן ניתנות לשינוי באמצעות תנאי שימוש אלה. במידה המקסימלית על פי כל
        דין, הכללית ו/או ג'יסטמד לא מתחייבים כי (א) השימוש וההפעלה של הפלטפורמה
        ו/או התכנים ו/או תכני ההדרכה הינם או יהיו נקיים מכל וירוסים, פגמים,
        תולעים, רכיבים מזיקים אחרים או הגבלות תוכנה אחרות, (ב) נתקן כל טעות או
        ליקוי בשירותים, ו/או (ג) ניתן מצג כלשהו בקשר לשימוש, אי היכולת להשתמש או
        לתפעל, או תוצאות השימוש בשירותים ו/או בתכנים הזמינים בפלטפורמה או
        באמצעות הפלטפורמה (לרבות שהתוצאות של השימוש בשירותים יעמדו בדרישותיכם).
        מבלי לגרוע מכלליות האמור, שיתוף תכנים ו/או תכני הדרכה עם גורמים שלישיים
        הינם באחריותך הבלעדית, והכללית ו/או ג'יסטמד לא נהיה אחראים לכל נזק או
        אובדן שייגרמו לך או לכל אדם אחר כתוצאה או בקשר עם כל שיתוף של תכנים אלה.
        הכללית ו/או ג'יסטמד איננו אחראים לכל תוצאה שתיגרם לך או לאחרים הנובעת
        מתקלות טכניות (לרבות אך לא רק בקשר לקישוריות האינטרנט, עומס קו או שרתים,
        עיכובים והפרעות תקשורת) והנובעת מספקי אינטרנט וטלקומוניקציה. מבלי לגרוע
        מכלליות האמור, ג'יסטמד אינה מתחייבת שהשירותים ו/או התכנים ו/או תכני
        ההדרכה יהיו בטוחים לשימוש, מדויקים, מלאים, ללא הפרעות, ללא שגיאות ו/או
        ללא טעויות. כמו כן, ג'יסטמד לא נושאת בכל אחריות בכל הנוגע לשימוש
        בשירותים, לרבות אך ללא הגבלה, לגבי הזמינות, האמינות או האיכות של
        השירותים ו/או התכנים ו/או תכני ההדרכה, וג'יסטמד אינה אחראית ולא תשא
        באחריות לכל טעות או ליקוי ביחס לתכנים ו/או לתכני ההדרכה ו/או כל מידע
        המוצג בפלטפורמה. היה וסמכויות שיפוט אחרות אינן מאפשרות החרגות או הגבלות
        כאמור לעיל, ההחרגות וההגבלות הנזכרות לעיל חולו במידה המקסימלית האפשרית.
      </Paragraph>
      <SubTitle>הגבלת אחריות</SubTitle>
      <Paragraph>
        במידה המקסימאלית האפשרית על פי דין, גי'סטמד, לא תהא אחראית לכל נזקים
        שייגרמו למשתמשים או לצד ג', מכל סוג שהוא, לרבות, נזקים ישירים, עקיפים,
        מיוחדים, עונשיים, אגביים או תוצאתיים (לרבות, אך לא רק, נזק למוניטין,
        לרווחים, למידע, או לעסקים ונזק בגין עוגמת נפש), כתוצאה או הנובעים מתנאי
        שימוש אלה ו/או מהשירותים ו/או מהתכנים ו/או תכני ההדרכה, משימושך או חוסר
        יכולתך להשתמש בשירותים, מהתוצאות וההשלכות של שימושך בשירותים והדיוק של
        תוצאות אלה ואמינותן, או מכל תוכן או מהביצועים או אי הביצועים של ג'יסטמד
        לפעול תחת תנאים אלה, וכל מעשה או מחדל אחרים של ג'יסטמד בכל סיבה אחרת
        שהיא, בין אם ג'יסטמד הזהירה בדבר האפשרות כי עלול להיגרם נזק מסוג זה.
        מבלי לגרוע מכלליות האמור לעיל ובמידה המרבית המותרת על פי דין, החבות
        המצטברת של ג'יסטמד עבור כל הנזקים הנובעים מתנאים אלה, תוגבל לסכום של מאה
        (100) שקלים חדשים.
      </Paragraph>
      <SubTitle>שיפוי</SubTitle>
      <Paragraph>
        המשתמש מסכים להגן ולשפות את כללית ו/או ג'יסטמד מפני ונגד כל תביעה, נזק,
        הפסד, התחייבות, אחריות, הוצאה וחוב (לרבות אך לא רק, שכר טרחת עורך דין)
        אשר נובעים מ: (א) שימושו בשירותים ו/או בתכנים ו/או בתכני ההדרכה שלא
        בהתאם לתנאי שימוש אלה; (ב) כל הפרה מצדו של תנאי שימוש אלה; (ג) הפרה מצדו
        של כל זכות של צד שלישי, לרבות אך לא רק, זכויות קניין רוחני או הזכות
        לפרטיות; ו-(ד) כל נזק מכל סוג שהוא, בין אם נזק ישיר, עקיף, מיוחד או
        תוצאתי, שגרם לצד שלישי אשר קשור לשימושו בשירותים, בתכנים או בתכני
        ההדרכה. מובהר בזאת כי חובת השיפוי האמורה תחול אף לאחר סיום התקשרותך עם
        החברה. מבלי לגרוע מכלליות האמור לעיל, אנו ו/או ג'יסטמד שומרים את הזכות
        הבלעדית לנהל את ההגנה והשליטה הבלעדית בכל עניין והליך הקשור בשיפוי,
        באופן שאינו גורע מחובת המשתמש, והמחייב אותו לשתף פעולה מלאה איתנו ו/או
        ג'יסטמד בניהול הליך כאמור. המשתמש מאשר כי לא יסכים לפשרה בכל עניין הכפוף
        לשיפוי על ידו מבלי לקבל לכתחילה את הסכמתנו בכתב לכך.
      </Paragraph>
      <SubTitle>ג'יסטמד</SubTitle>
      <Paragraph>
        ג'יסטמד היא היוצרת והמתפעלת של הפלטפורמה (בהיבטים הטכנולוגיים
        הרלוונטיים), וזאת בכפוף להסכמותיה עם כללית. יובהר כי ג'יסטמד אינה מוחזקת
        על ידי כללית ו/או אינה חברת בת ו/או אינה שלוחתה של כללית בישראל או
        בעולם, והיא אינה אחראית להליך הרפואי ו/או לכל מוצר או שירות של כללית
        ו/או לטיבם ו/או לאיכותם ו/או לזמינותם. כל תכני ההדרכה ו/או השאלות בשאלון
        הינם מאושרים ומסופקים על ידי כללית. מבלי לגרוע מכלליות האמור לעיל,
        ג'יסטמד אינה אחראית לכל אובדן ו/או נזק הקשורים: (א) לתכני ההדרכה ו/או
        השאלון הכלולים בפלטפורמה, וכן לכל תוכן רפואי אחר שכללית ו/או כל גורם
        שלישי המתקשר עם כללית מספק למשתמשים, בין אם דרך הפלטפורמה ובכלל,
        ולהסתמכות המשתמש עליהן; (ב) להליך הרפואי ו/או למוצרים או שירותים של
        כללית ו/או כל צד שלישי; או (ג) לאמינות, שלמות או חוקיות כל מידע רפואי
        ו/או אישי שהוזן לפלטפורמה על ידי כללית או מי מטעמו או על ידי המשתמש.
        למעט כפי שמצוין במפורש כאן, ג'יסטמד לא תישא באחריות לכל נזק או הפסד
        שייגרמו לך ו/או לצד שלישי ו/או לכל אדם אחר כתוצאה או בקשר ליחסים שלך עם
        כללית ועם השימוש שלך בשירותים ו/או בתכנים ו/או בתכני ההדרכה. מובהר בזאת
        כי אין לראות בג'יסטמד צד לכל התקשרות ו/או הסכם שייכרת בין כללית לבינך
        ו/או לצד שלישי אחר, הנך מוותר בזאת על כל טענה כלפי ג'יסטמד ביחס לתכני
        ההדרכה ו/או השאלון ו/או ההליך הרפואי ו/או בקשר לכל עניין ביחסים שבינך
        לבין כללית ו/או כל גורם שלישי, ומשחרר בזאת את ג'יסטמד וכל מי מטעמה מכל
        תביעה בעניין זה. כל הזכויות בתכנים שמורות לחברת ג'יסטמד אלא אם נאמר
        במפורש אחרת.
      </Paragraph>
      <SubTitle>שינויים בפלטפורמה והפסקת פעילות הפלטפורמה</SubTitle>
      <Paragraph>
        אנו שומרים לעצמנו את הזכות לבצע בפלטפורמה ובשירותיה ו/או בתכניה ו/או
        בתכני ההדרכה תיקונים, הרחבות, שיפורים, התאמות, הפסקת פעילות כללית, חסימה
        זמנית, הגבלות זמניות או קבועות וכל שינוי אחר, ללא הודעה מוקדמת ובכל עת,
        וזאת על פי שיקול דעתנו הבלעדי (כולל, בין היתר, מבלי לגרוע, בשל פעולות
        שנעשות על-ידך בזדון בקשר עם הפלטפורמה), בנוסף לכל סעד אחר העשוי לעמוד
        לרשות החברה על פי כל דין. הנך מסכים כי כללית ו/או ג'יסטמד לא יהיו אחראים
        כלפיך או כלפי כל צד שלישי בגין השינויים ו/או הפסקות הפעילות ו/או כל תקלה
        או שגיאה שעשויים להתרחש בקשר עם ביצוע שינויים כאלה, לרבות אבדן מידע ו/או
        כל נזק נטען אחר הכרוך בהם. הוראות תנאים אלה שעל פי טבען ותוכנן חייבות
        לשרוד את סיום תנאים אלה על מנת להשיג את המטרות הבסיסיות של תנאים אלה,
        ישרדו את סיום תנאים אלה.
      </Paragraph>
      <SubTitle>קישורים לאתרים של צדדים שלישיים</SubTitle>
      <Paragraph>
        קישורים מסוימים המופיעים בפלטפורמה, מאפשרים למשתמשים לעזוב את הפלטפורמה
        ולהיכנס לאתרים או לשירותים שאינם של הכללית ו/או של ג'יסטמד. אתרים
        ושירותים מקושרים אלה אינם בשליטתנו ו/או של ג'יסטמד וקישור להם מובא
        לנוחיותך בלבד; אין בהכללת קישורים אלה משום אישור לחומר המופיע בהם או
        המלצה לרכישת המוצרים ו/או קבלת השירותים המוצעים בהם, והם אינם מעידים על
        קשר כלשהו שלנו ו/או של ג'יסטמד עם מפעילי האתרים האמורים. הכללית ו/או
        ג'יסטמד אינם אחראים לזמינותם, אינם מאשרים ואינם אחראים לגביהם, לרבות אך
        לא רק, לכל פרסומות, הטבות, מוצרים או מידע אחר המופיע בהם או הזמין
        באמצעותם או לכל קישור המצוי בהם. כמו כן, אנחנו ו/או נציגינו ו/או ג'יסטמד
        אינם אחראים למדיניות הפרטיות ו/או מדיניות האבטחה ו/או כל מדיניות אחרת של
        האתרים או השירותים של צדדים שלישיים אלה. כניסת המשתמש, שימושו והסתמכותו
        על קישורים אלה והאינטראקציות שלו עם הצדדים השלישיים האמורים הינם
        באחריותו של המשתמש ועל חשבונו בלבד. יש לנו הזכות למחוק כל קישור שכזה
        ובכל עת. כמו כן, המשתמש מסכים ומאשר כי הכללית ו/או ג'יסטמד לא נהיה
        אחראיים לכל נזק אשר נגרם, או לכאורה נגרם, בקשר עם או כתוצאה משימושו או
        הסתמכותו על תכנים, שירותים, מוצרים או פרסומות הזמינים באתרים, או שירותים
        של צדדים שלישיים אלה. רוב האתרים והשירותים המקושרים מספקים מסמכים
        משפטיים, לרבות תנאי שימוש ומדיניות פרטיות, החלים על השימוש בהם. אנו
        ממליצים לכל משתמש לקרוא מסמכים אלו בעיון לפני השימוש באתרים ושירותים
        אלו, בין היתר, על מנת להיות מודע לסוג המידע הנאסף לגביו.
      </Paragraph>
      <SubTitle>תיקונים לתנאים</SubTitle>
      <Paragraph>
        מובהר בזאת כי אנו רשאים, לפי שיקול דעתנו הבלעדי, לשנות תנאים אלה מעת
        לעת, לרבות מדיניות הפרטיות וכל מדיניות אחרת המשולבת בהם. באחריות המשתמש
        לעיין, לעתים קרובות, בהסכם תנאי השימוש ומדיניות הפרטיות. בכל מקרה של
        שינוי מהותי, אנו נעשה מאמצים סבירים לפרסם הודעה ברורה בפלטפורמה ו/או
        נשלח אליך דואר אלקטרוני (במידה שסיפקת לנו כתובת דואר אלקטרוני ושהסכמת
        לקבל דיוור מטעמנו) בנוגע לשינוי כאמור. שינויים מהותיים כאלה ייכנסו לתוקף
        שבעה (7) ימים לאחר שהודעה כזו נמסרה בפלטפורמה שלנו או נשלחה באמצעות דואר
        אלקטרוני, המוקדם מביניהם. אחרת, כל שאר השינויים בתנאים אלה ייכנסו לתוקף
        מהתאריך הנקוב בראש תנאים אלה ("עודכן לאחרונה") והמשך השימוש שלך
        בפלטפורמה לאחר מכן יהווה הסכמה לשינויים אלה. במקרה שיש לתקן את התנאים
        כדי לעמוד בדרישות חוק כלשהן, התיקונים עשויים להיכנס לתוקף באופן מידי, או
        כנדרש בחוק וללא כל הודעה מוקדמת.
      </Paragraph>
      <SubTitle>כללי</SubTitle>
      <Paragraph>
        (א) כל תביעה בקשר לשירותים יהיו כפופים לחוקי מדינת ישראל, ויתפרשו על-פי
        חוקים אלה, מבלי ליתן תוקף לכללי ברירת הדין הבינלאומי הקבועים בהם, (ב) כל
        מחלוקת אשר תנבע או תהיה קשורה לשימוש שלך בשירותים תובא לדיון בבתי המשפט
        המוסמכים במדינת ישראל, ואתה מסכים בזאת לסמכות השיפוט הייחודית והמקומית
        של בתי משפט אלה. הנך מסכים לוותר על כל ההגנות בדבר היעדר סמכות שיפוט
        פרסונלית ופורום לא נאות, ומסכים כי כתבי בית דין יומצאו באופן המותר על פי
        הדין החל ו/או על פי החלטת בית משפט. על אף האמור לעיל, אנו רשאים לבקש מתן
        צווי מניעה בכל בית משפט מוסמך, (ג) תנאים אלה אינם יוצרים ולא יתפרשו
        כאילו הם יוצרים כל מערכת יחסים, יחסי שותפות, מיזם משותף, יחסי
        עובד-מעביד, יחסי שליחות או יחסי נותן-מקבל זיכיון בין הצדדים, לרבות
        ג'יסטמד, (ד) שום ויתור של מי מהצדדים, לרבות ג'יסטמד, על כל הפרה או מחדל
        על פי תנאים אלה זה לא ייחשב כוויתור על כל הפרה או מחדל, בין אם קודמים או
        מאוחרים יותר, (ה) כל כותרת של סעיף או כל כותרת אחרת בתנאים אלה מובאת
        לצורכי נוחות בלבד, ואינה מגדירה או מבארת כל סעיף או הוראה הכלולים בתנאים
        אלה, (ו) הנך מאשר ומסכים כי כל עילת תביעה שעשויה לעמוד לך, הנובעת
        מהשירותים או הנוגעים להם, תעמוד לך במשך שנה אחת (1) מיום קרות האירוע.
        לאחר תקופה זו, מוסכם בזאת בין הצדדים כי עילת תביעה זו תתיישן. (ז) היה
        וייקבע על ידי גוף מוסמך כי הוראה כלשהי מתנאי שימוש אלה אינה חוקית, בטלה
        או שמכל סיבה שהיא אין אפשרות לאוכפה, אזי יראו הוראה זו כהוראה שניתן
        להגבילה או להפרידה מתנאים אלה, וההוראה האמורה (במידה המרבית האפשרית על
        פי דין) לא תשפיע על התוקף והאפשרות לאכוף הוראה כלשהי מבין ההוראות
        הנותרות של תנאים אלה, (ח) אינך רשאי להמחות או להעביר את תנאים אלה (כולל
        כל הזכויות וההתחייבויות תחתיהם) ללא הסכמתנו מראש ובכתב, וכל ניסיון לעשות
        כן תוך הפרה של האמור לעיל יבוטל. אנחנו ו/או ג'יסטמד, רשאים להמחות או
        להעביר את תנאים אלה ללא הגבלה וללא הודעה על כך, (ט) כל תיקון לתנאים אלה
        לא יהיה בעל תוקף משפטי מחייב אלא אם כן נעשה בכתב ונחתם על ידינו ועל ידי
        ג'יסטמד, ו- (י) הצדדים מסכימים כי כל התכתבות הקשורה בתנאים אלה תהיה בכתב
        (בדואר אלקטרוני או בדואר רגיל) ובשפה העברית או האנגלית.
      </Paragraph>
      <SubTitle>שאלות</SubTitle>
      <Paragraph>
        במידה ויש לך שאלות נוספות או הערות בנוגע לתנאים, הינך מוזמן לפנות אלינו
        באמצעות דואר אלקטרוני בכתובת{" "}
        <a href="mailto:support@gistmd.com" onClick={supportClick}>
          info@gistmd.com
        </a>{" "}
        ואנו נעשה את מירב המאמצים לחזור אליך תוך זמן סביר.
      </Paragraph>
    </Wrapper>
  );
}

export default LegalText;

const Wrapper = styled.div`
  direction: rtl;
  padding-inline: 2.4rem;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
const BoldParagraph = styled(Paragraph)`
  font-weight: 500;
`;
const Border = styled.div`
  border: 1px solid black;
  padding-inline: 0.5rem;
`;
