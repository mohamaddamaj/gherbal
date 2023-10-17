import { Container, Grid, LinearProgress } from "@mui/material";
import Header from "./Header";
import TabbedContent from "./TabbedContent";
import DelayOfAppellate from "./DelayOfAppellate/DelayOfAppellate";
import Jurisdiction from "./Jurisdiction/Jurisdiction";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useCallback, useEffect, useState } from "react";
import i18next from "i18next";
import { firebase } from "./data/firebase";

const DATA = {
  en: {
    introduction:
      "Within every governorate, there is one or more courts of appeal.;The Court of Appeal consists of 3 judges: a president and two consultants;The public prosecution is represented before the Court of Appeal by the Appellate Public Prosecutor or an Attorney General.",
    delayOfAppellateData: {
      finalJudgement: [
        {
          days: 15,
          title:
            "With respect to plaintiff, defendant, responsible for money, and guarantor",
          descriptions: [
            "As of the date of its issuance if it is made in presentia.",
            "As of the date of being notified whether it is made in presentia or absentia.",
          ],
        },
        {
          days: 30,
          title: "With respect to the Appellate Public Prosecutor",
          descriptions: ["As of the date of issuance of the judgment."],
        },
        {
          days: 60,
          title: "With respect to the Appellate Public Prosecution",
          descriptions: ["As of the date of issuance of the judgment."],
        },
      ],
      decisions: [
        {
          days: 1,
          title: "With respect to the Public Prosecution",
          descriptions: ["As of the date of issuance of the decision."],
        },
        {
          days: 1,
          title: "With respect to the opponents",
          descriptions: [
            "As of the date of notifying the opponents of the same.",
          ],
        },
      ],
    },
    jurisdiction: {
      description:
        "The Court of Appeal considers the appeal of all judgments issued by the Criminal Single Judge in the cases of misdemeanors, provided that they shall have been settled in the merits of the dispute.\nHowever, if they were not settled in the merits of the dispute, they shall be appealed with the nal judgment only.",
      exceptions: [
        "The appeal of decisions that settle one or more of the formal defenses stipulated in Article 73 of the Criminal Procedures Code shall be accepted.",
        "Decisions by which the Single Judge terminates the lawsuit without addressing its subject matter.",
        "Decisions issued on accepting or revoking the release requests.",
      ],
      considerations: [
        {
          title:
            "Imprisonment, preventive detention or a one of more than five hundred thousand Lebanese pounds.",
          color: "#6da0d5",
        },
        {
          title:
            "Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.",
          color: "#d4753c",
        },
        {
          title:
            "Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.",
          color: "#be4066",
        },
        {
          title: "Penalty for a violation correlative with a misdemeanor",
          color: "#93d2b9",
        },
      ],
      decisions: [
        { title: "Dissolution of the appealed judgment." },
        { title: "Legalization of the appealed judgment." },
      ],
    },
  },
  ar: {
    introduction:
      "في نطاق كل محافظة محكمة استئناف أو أكثر.; تتألف محكمة الاستئناف من 3 قضاة: رئيس ومستشارين.; تتمثل النيابة العامة أمام محكمة الاستئناف إما بالنائب العام الاستئنافي أو بأحد المحامين العامين.",
    delayOfAppellateData: {
      finalJudgement: [
        {
          days: 15,
          title: "بالنسبة للمدعي والمدعى عليه والضامن والمسؤول بالمال",
          descriptions: [
            "من تاريخ صدور الحكم إذا كان وجاهيا.",
            "من تاريخ تبليغه إذا كان بمثابة الوجاهي أو غيابيا.",
          ],
        },
        {
          days: 30,
          title: "بالنسبة للنائب العام الاستئنافي",
          descriptions: ["من تاريخ صدور الحكم."],
        },
        {
          days: 60,
          title: "بالنسبة للنيابة العامة الاستئنافية",
          descriptions: ["من تاريخ صدور الحكم."],
        },
      ],
      decisions: [
        {
          days: 1,
          title: "بالنسبة للنيابة العامة",
          descriptions: ["من تاريخ صدور القرار"],
        },
        {
          days: 1,
          title: "بالنسبة للخصوم",
          descriptions: ["من تاريخ تبليغه للخصوم."],
        },
      ],
    },
    jurisdiction: {
      description:
        "تنظر محكمة الاستئناف في استئناف جميع الأحكام الصادرة عن القاضي المنفرد الجزائي في قضايا الجنح، شرط أن تكون قد فصلت في أساس النزاع. أما إذا لم تكن قد فصلت في أساس النزاع، فلا يجوز استئنافها إلا مع الحكم النهائي.",
      exceptions: [
        "يقبل إستئناف القرارات التي تفصل في دفع أو أكثر من الدفوع الشكلية المنصوص عليها في المادة 73 من قانون أصول المحاكمات الجزائية.",
        "القرارات التي ينهي بها القاضي المنفرد الدعوى من دون أن يتعرض لموضوعها.",
        "القرارات الصادرة في قبول أو رد طلبات إخلاء السبيل.",
      ],
      considerations: [
        {
          title:
            "الحبس أو التوقيف التكديري أو غرامة تزيد على الخمسمائة ألف ليرة لبنانية.",
          color: "#6da0d5",
        },
        {
          title:
            "عقوبة إضافية أو فرعية أو تعويضات شخصية تزيد على الخمسمائة ألف ليرة لبنانية.",
          color: "#d4753c",
        },
        {
          title:
            "ردّ دفع من الدفوع المنصوص عليها في المادة 73 من قانون أصول المحاكمات الجزائية.",
          color: "#be4066",
        },
        {
          title: "عقوبة لمخالفة متلازمة مع جنحة.",
          color: "#93d2b9",
        },
      ],
      decisions: [
        { title: "فسخ الحكم المستأنف." },
        { title: "تصديق الحكم المستأنف." },
      ],
    },
  },
};

const Home = () => {
  const [value, setValue] = useState("delayOfAppellate");
  const [data, setData] = useState({});
  const handleOnChangeValue = (value) => {
    setValue(value);
  };

  const init = useCallback(async () => {
    const db = firebase.firestore();

    let langDocument;
    if (i18next.language === "ar") {
      langDocument = "ar";
    } else {
      langDocument = "en";
    }

    const documentRef = db.collection("judiciary").doc(langDocument);

    documentRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [setData, i18next.language]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {console.log(data)}
            {data.introduction && <Header introduction={data.introduction} />}
          </Grid>
          <Grid item xs={12}>
            <TabbedContent onChangeValue={handleOnChangeValue} />
          </Grid>
          <Grid item xs={12}>
            {data.delayOfAppellateData && value === "delayOfAppellate" && (
              <DelayOfAppellate data={data.delayOfAppellateData} />
            )}
          </Grid>
          <Grid item xs={12}>
            {data.jurisdiction && value === "jurisdiction" && (
              <Jurisdiction data={data.jurisdiction} />
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
