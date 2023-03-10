import styled from "styled-components"

const Shtoiot = styled.div`
    color: black;
    background-color: rgba(255, 255, 255, .5);
`

const SecondTitle = styled.h2`
    color: green;
`
function Kaka() {
    return (
        <Shtoiot>
            <p><strong> גיזום עצים</strong> הוא תהליך חשוב העוזר להתפתחותו של העץ.</p>
            <SecondTitle>גיזום עצים – מתי לבצע?</SecondTitle>
            <p style={{textAlign: 'right', margin: '20px'}}>
                קיימות מספר סיבות אשר בגינן יש לגזום את העץ: <br /><br />

                <strong>
                    פתיחת נתיבי אור –
                </strong>
                דילול הענפים לטובת חדירה טובה יותר של שמש וסיוע לצמיחת העץ.
                <br />
                <strong>
                    פתיחת דרכי גישה לאדם –
                </strong>
                הפרעה למעבר היא אחת הסיבות העיקריות לגיזום עצים.
                <br />
                השפעה על עיצוב צמיחתו של העץ – כשרוצים לעצב את העץ כך שיהיה יפה יותר ומיוחד יותר, או כדי שלא יפגע בכבלי חשמל או תקשורת – מבצעים גיזום של הענפים הרצויים.
                <br />
                <strong>
                    מיגור מחלות –
                </strong>
                במצבי מחלה מסוימים חיתוך של ענפים חולים יכול לסייע להחלמתו של העץ.
                <br />
                <strong>
                    הרחקת מזיקים –
                </strong>
                פעמים רבות עטלפים או עכברים מקימים את קיניהם / בתיהם בין ענפי העץ. גיזום הענפים לא מאפשר להם להמשיך לקנן שם וכך מרחיק אותם מהאזור לחלוטין.
                <br /><br />
                ישנה חשיבות רבה למועד הגיזום ולאופן הגיזום, גורמים שיכולים לקבוע באופן מהותי את תוצאות הגיזום על העץ ועל התפתחותו העתידית של העץ לאחר הגיזום.
            </p>
        </Shtoiot>
    )
}

export default Kaka