import type { ReactNode } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { CvLang } from "./cvData";
import { CONTACT, getCvMessages, getPortfolioUrl } from "./cvData";
import type { CvTailoringResult } from "./cvTailoring";

const BULLET = "\u2022";

const styles = StyleSheet.create({
  pageEn: {
    padding: 32,
    fontSize: 9,
    fontFamily: "Helvetica",
    lineHeight: 1.35,
    color: "#1a1a1a",
  },
  pageAr: {
    padding: 32,
    fontSize: 9,
    fontFamily: "Cairo",
    lineHeight: 1.45,
    color: "#1a1a1a",
    direction: "rtl",
    textAlign: "right",
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
  nameEn: { fontFamily: "Helvetica-Bold" },
  nameAr: { fontFamily: "Cairo", fontWeight: 700 },
  headline: {
    fontSize: 10,
    color: "#333",
    marginBottom: 8,
  },
  contactBlock: {
    marginBottom: 14,
  },
  contactLine: {
    marginBottom: 5,
    fontSize: 8.5,
    color: "#333",
    lineHeight: 1.6,
  },
  contactLineAr: {
    textAlign: "right",
  },
  contactLineLast: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 10,
    marginTop: 6,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    paddingBottom: 2,
    textTransform: "uppercase",
  },
  sectionTitleEn: { fontFamily: "Helvetica-Bold" },
  sectionTitleAr: { fontFamily: "Cairo", fontWeight: 700 },
  section: {
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 6,
    lineHeight: 1.45,
    textAlign: "left",
  },
  paragraphAr: {
    textAlign: "right",
  },
  bullet: {
    marginBottom: 4,
    paddingLeft: 8,
    fontSize: 8.5,
    lineHeight: 1.45,
  },
  bulletAr: {
    paddingLeft: 0,
    paddingRight: 8,
    textAlign: "right",
  },
  expRole: {
    marginTop: 6,
    marginBottom: 4,
    fontSize: 9,
    lineHeight: 1.4,
  },
  expRoleEn: { fontFamily: "Helvetica-Bold" },
  expRoleAr: { fontFamily: "Cairo", fontWeight: 700 },
  expBlock: {
    marginBottom: 6,
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
    <View style={styles.section}>
      <Text
        wrap={false}
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

export function CvDocument({
  lang,
  tailoring,
}: {
  lang: CvLang;
  tailoring?: CvTailoringResult;
}) {
  const m = getCvMessages(lang);
  const r = m.resume;
  const isAr = lang === "ar";
  const cv = m.cvPdf;

  const pageStyle = isAr ? styles.pageAr : styles.pageEn;
  const nameStyle = [styles.name, isAr ? styles.nameAr : styles.nameEn];
  const pStyle = isAr ? [styles.paragraph, styles.paragraphAr] : styles.paragraph;
  const bulletStyle = isAr ? [styles.bullet, styles.bulletAr] : styles.bullet;
  const contactLineStyle = isAr
    ? [styles.contactLine, styles.contactLineAr]
    : [styles.contactLine];
  const contactLineLastStyle = isAr
    ? [styles.contactLine, styles.contactLineAr, styles.contactLineLast]
    : [styles.contactLine, styles.contactLineLast];
  const projectItems = [r.proj1, r.proj2, r.proj3];
  const courseItems = [
    r.course1,
    r.course2,
    r.course3,
    r.course4,
    r.course5,
    r.course6,
    r.course7,
  ];
  const langItems = [r.lang1, r.lang2, r.lang3];
  const defaultSkillItems = [
    r.cvSkill1,
    r.cvSkill2,
    r.cvSkill3,
    r.cvSkill4,
    r.cvSkill5,
    r.cvSkill6,
    r.cvSkill7,
    r.cvSkill8,
    r.cvSkill9,
    r.cvSkill10,
    r.cvSkill11,
    r.cvSkill12,
  ];

  const headline = tailoring?.headline ?? m.hero.badge;
  const skillItems = tailoring?.skillLines ?? defaultSkillItems;

  return (
    <Document
      author={m.site.name}
      title={`${m.site.name} - ${headline} CV`}
      subject={cv.documentSubject}
      keywords={`${headline}, C#, ASP.NET Core, REST API, PostgreSQL, Backend, Flutter, BLoC, GetX, WordPress, Professional Working Proficiency, 10+ years`}
      creator={m.site.name}
      producer="Nuwwar Saeed Portfolio — digital PDF export"
      language={isAr ? "ar" : "en"}
    >
      <Page size="A4" style={pageStyle} wrap>
        <Text style={nameStyle}>{m.site.name}</Text>
        <Text style={styles.headline}>{headline}</Text>

        <View style={styles.contactBlock}>
          <Text style={contactLineStyle}>
            {cv.emailLabel}: {CONTACT.email}
          </Text>
          <Text style={contactLineStyle}>
            {cv.phoneLabel}: {CONTACT.phone}
          </Text>
          <Text style={contactLineStyle}>{getPortfolioUrl(lang)}</Text>
          <Text style={contactLineStyle}>{CONTACT.behanceUrl}</Text>
          <Text style={contactLineLastStyle}>{cv.locationLabel}</Text>
        </View>

        <Section title={cv.summaryTitle} lang={lang}>
          <Text style={pStyle}>{m.about.p1}</Text>
          <Text style={pStyle}>{m.about.p2}</Text>
          <Text style={pStyle}>{m.about.p3}</Text>
        </Section>

        <Section title={r.experienceTitle} lang={lang}>
          {r.experiences.map((entry) => (
            <View key={entry.role} style={styles.expBlock}>
              <Text
                style={[
                  styles.expRole,
                  isAr ? styles.expRoleAr : styles.expRoleEn,
                  ...(isAr ? [styles.paragraphAr] : []),
                ]}
              >
                {entry.role}
              </Text>
              {entry.bullets.map((bullet) => (
                <Text key={bullet} style={bulletStyle}>
                  {BULLET} {bullet}
                </Text>
              ))}
            </View>
          ))}
        </Section>

        <Section title={r.technicalSkillsTitle} lang={lang}>
          {skillItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              {BULLET} {line}
            </Text>
          ))}
        </Section>

        <Section title={r.projectsTitle} lang={lang}>
          {projectItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              {BULLET} {line}
            </Text>
          ))}
        </Section>

        <Section title={r.educationTitle} lang={lang}>
          <Text style={pStyle}>{r.educationText}</Text>
        </Section>

        <Section title={r.coursesTitle} lang={lang}>
          {courseItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              {BULLET} {line}
            </Text>
          ))}
        </Section>

        <Section title={r.languagesTitle} lang={lang}>
          {langItems.map((line, i) => (
            <Text key={i} style={bulletStyle}>
              {BULLET} {line}
            </Text>
          ))}
        </Section>
      </Page>
    </Document>
  );
}
