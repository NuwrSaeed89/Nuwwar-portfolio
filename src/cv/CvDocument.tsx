import type { ReactNode } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type { CvLang } from "./cvData";
import { CONTACT, getCvMessages, getPortfolioUrl } from "./cvData";

const styles = StyleSheet.create({
  pageEn: {
    padding: 36,
    fontSize: 9,
    fontFamily: "Helvetica",
    lineHeight: 1.35,
    color: "#1a1a1a",
  },
  pageAr: {
    padding: 36,
    fontSize: 9,
    fontFamily: "Cairo",
    lineHeight: 1.45,
    color: "#1a1a1a",
    direction: "rtl",
    textAlign: "right",
  },
  name: {
    fontSize: 20,
    marginBottom: 16,
  },
  nameEn: { fontFamily: "Helvetica-Bold" },
  nameAr: { fontFamily: "Cairo", fontWeight: 700 },
  headline: {
    fontSize: 11,
    color: "#444",
    marginTop: 2,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 14,
    fontSize: 8.5,
    color: "#333",
  },
  contactRowAr: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  sectionTitle: {
    fontSize: 11,
    marginTop: 8,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 2,
  },
  sectionTitleEn: { fontFamily: "Helvetica-Bold" },
  sectionTitleAr: { fontFamily: "Cairo", fontWeight: 700 },
  paragraph: {
    marginBottom: 5,
    textAlign: "justify",
  },
  paragraphAr: {
    textAlign: "right",
  },
  bullet: {
    marginBottom: 3,
    paddingLeft: 10,
  },
  bulletAr: {
    paddingLeft: 0,
    paddingRight: 10,
    textAlign: "right",
  },
  bulletDot: {
    width: 10,
  },
});

function Section({
  title,
  children,
  lang,
}: {
  title: string;
  children: ReactNode;
  lang: CvLang;
}) {
  const isAr = lang === "ar";
  return (
    <View>
      <Text
        style={[
          styles.sectionTitle,
          isAr ? styles.sectionTitleAr : styles.sectionTitleEn,
        ]}
      >
        {title}
      </Text>
      {children}
    </View>
  );
}

export function CvDocument({ lang }: { lang: CvLang }) {
  const m = getCvMessages(lang);
  const r = m.resume;
  const isAr = lang === "ar";
  const cv = m.cvPdf;

  const pageStyle = isAr ? styles.pageAr : styles.pageEn;
  const nameStyle = [styles.name, isAr ? styles.nameAr : styles.nameEn];
  const pStyle = isAr ? [styles.paragraph, styles.paragraphAr] : styles.paragraph;
  const bulletStyle = isAr ? [styles.bullet, styles.bulletAr] : styles.bullet;
  const contactRowStyle = isAr ? [styles.contactRow, styles.contactRowAr] : styles.contactRow;

  const expItems = [
    r.exp1,
    r.exp2,
    r.exp3,
    r.exp4,
    r.exp5,
    r.exp6,
    r.exp7,
    r.exp8,
    r.exp9,
    r.exp10,
  ];
  const courseItems = [r.course1, r.course2, r.course3, r.course4, r.course5, r.course6];
  const langItems = [r.lang1, r.lang2, r.lang3];
  const skillItems = [
    r.cvSkill1,
    r.cvSkill2,
    r.cvSkill3,
    r.cvSkill4,
    r.cvSkill5,
    r.cvSkill6,
    r.cvSkill7,
    r.cvSkill8,
  ];

  return (
    <Document
      author={m.site.name}
      title={`${m.site.name} — CV`}
      subject={cv.documentSubject}
    >
      <Page size="A4" style={pageStyle}>
        <Text style={nameStyle}>{m.site.name}</Text>
        <Text style={styles.headline}>{m.hero.badge}</Text>

        <View style={contactRowStyle}>
          <Text>{cv.emailLabel}: </Text>
          <Link src={`mailto:${CONTACT.email}`} style={{ color: "#0369a1" }}>
            {CONTACT.email}
          </Link>
          <Text> · </Text>
          <Text>{cv.phoneLabel}: </Text>
          <Link src={`tel:${CONTACT.phoneTel}`} style={{ color: "#0369a1" }}>
            {CONTACT.phone}
          </Link>
          <Text> · </Text>
          <Text>{cv.portfolioLabel}: </Text>
          <Link src={getPortfolioUrl(lang)} style={{ color: "#0369a1" }}>
            nuwwar-portfolio.vercel.app/{lang}
          </Link>
          <Text> · </Text>
          <Text>{cv.behanceLabel}: </Text>
          <Link src={CONTACT.behanceUrl} style={{ color: "#0369a1" }}>
            behance.net/nuwwarsaeed
          </Link>
        </View>

        <Section title={cv.summaryTitle} lang={lang}>
          <Text style={pStyle}>{m.about.p1}</Text>
          <Text style={pStyle}>{m.about.p2}</Text>
        </Section>

        <Section title={r.educationTitle} lang={lang}>
          <Text style={pStyle}>{r.educationText}</Text>
        </Section>

        <Section title={r.experienceTitle} lang={lang}>
          {expItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              • {line}
            </Text>
          ))}
        </Section>

        <Section title={r.coursesTitle} lang={lang}>
          {courseItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              • {line}
            </Text>
          ))}
        </Section>

        <Section title={r.languagesTitle} lang={lang}>
          {langItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              • {line}
            </Text>
          ))}
        </Section>

        <Section title={r.cvSkillsTitle} lang={lang}>
          {skillItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              • {line}
            </Text>
          ))}
        </Section>
      </Page>
    </Document>
  );
}
