/* Legal - Jessica Medler · Wild Prairie Coaching */
const { useState } = React;

const SECTIONS = [
  { id: "privacy", title: "Privacy Policy", body: [
    { kind: "p", text: "Last Updated: June 2026" },
    { kind: "p", text: "Jessica Medler and Wild Prairie Coaching (\"I,\" \"me,\" or \"my\") is committed to protecting your privacy. The women who reach out are often sharing deeply personal things. I take that trust seriously and I handle your information accordingly." },
    { kind: "p", text: "By using this website or participating in any coaching offering, you consent to the practices described in this policy. If anything is unclear, reach out directly — I'd rather explain it plainly than hide behind legal language." },
  ] },
  { id: "info-collect", title: "Information We Collect", body: [
    { kind: "p", text: "I collect information you provide directly and information gathered automatically through your use of this website:" },
    { kind: "li", text: "Personal Data: Name, email, phone, and contact details from booking, contact form, email signups, or purchase." },
    { kind: "li", text: "Session Information: Notes and records, kept strictly confidential and never shared." },
    { kind: "li", text: "Payment Information: Processed through secure third-party processors. I do not store full card information on my servers." },
    { kind: "li", text: "Usage Data: Standard analytics — pages visited, time on site, device type — used only to improve the website." },
    { kind: "li", text: "Cookies: Small data files that enhance your browsing experience. Disable in browser settings if you prefer." },
  ] },
  { id: "info-use", title: "How We Use Your Information", body: [
    { kind: "p", text: "Your information is used only to serve you well. Specifically:" },
    { kind: "li", text: "To provide coaching services and program delivery" },
    { kind: "li", text: "To process bookings, enrollments, and payments" },
    { kind: "li", text: "To respond personally to your questions and inquiries" },
    { kind: "li", text: "To send opted-in reflections and newsletter (you may unsubscribe at any time)" },
    { kind: "li", text: "To improve this website and the quality of Wild Prairie offerings" },
    { kind: "li", text: "To comply with applicable legal obligations" },
    { kind: "p", text: "I do not sell, rent, or share your personal information with third parties for marketing purposes — ever." },
  ] },
  { id: "terms", title: "Terms of Service", body: [
    { kind: "p", text: "Last Updated: June 2026" },
    { kind: "p", text: "By accessing this site or services, you agree to these Terms. Lawful use only; no commercial reproduction without explicit written permission; you are responsible for the security of your account credentials." },
    { kind: "p", text: "All content on this website — including text, frameworks, teachings, and program materials — is the intellectual property of Jessica Medler and Wild Prairie Coaching and may not be reproduced, distributed, or used without permission." },
    { kind: "p", text: "Behavior that is disrespectful, harmful, or contrary to the well-being of other women in shared spaces (such as the Wildflower Circle) may result in termination of services without refund." },
    { kind: "p", text: "We reserve the right to update these terms. Continued use of this website or our services following changes constitutes acceptance of the revised terms." },
  ] },
  { id: "coaching", title: "Coaching Disclaimer", body: [
    { kind: "p", text: "Wild Prairie Coaching provides life coaching and inner-healing coaching — offered in both faith-based and non-faith formats. Coaching is not therapy, counseling, psychiatry, or any form of licensed mental health treatment. I am not a licensed therapist, psychologist, or medical professional." },
    { kind: "p", text: "The work we do together helps women identify root-level patterns — performance-based love, inherited shame, the lies underneath the behavior — and build embodied practices for lasting change. It is designed to complement, not replace, professional mental health care." },
    { kind: "p", text: "If you are experiencing a mental health crisis, suicidal ideation, or acute trauma symptoms, please contact a licensed mental health professional or call 988 immediately. I encourage clients in therapy to continue alongside coaching." },
    { kind: "p", text: "Results from coaching vary based on individual circumstances, commitment, and willingness to engage in the process. Testimonials shared on this site reflect individual experiences and are not guarantees of specific outcomes." },
  ] },
  { id: "refund", title: "Refund Policy", body: [
    { kind: "p", text: "Refunds are considered on a case-by-case basis within the first 30 days of program enrollment." },
    { kind: "li", text: "1:1 Coaching (Wild Prairie Identity Journey): The first two fit sessions are free. After enrollment, if within 30 days the coaching isn't the right fit for reasons within my control, email me and we'll have an honest conversation about a prorated refund." },
    { kind: "li", text: "Wildflower Circle: Prorated refund within first 30 days of circle start. Membership is otherwise non-refundable due to the small intentional size of the group." },
    { kind: "li", text: "Self-Paced Journey (Coming Home to You): Due to the immediate digital access nature of this offering, refunds are not available after enrollment. Contact me immediately for any technical issues and I will resolve them." },
    { kind: "p", text: "No refunds after 30 days or for missed sessions due to client conflicts. Free fit sessions and Wild Prairie content carry no purchase obligation." },
  ] },
  { id: "contact", title: "Contact Information", body: [
    { kind: "p", text: "Questions about these policies? Concerns about how your information is used? Reach out directly:" },
    { kind: "li", text: "Email: Jessica@wildprairiecoaching.com" },
    { kind: "li", text: "Phone: (701) 541-9800" },
    { kind: "li", text: "Location: North Dakota (serving women remotely nationwide)" },
    { kind: "li", text: "Response Time: 24–48 hours, personally — no bots, no team." },
  ] },
];

function App() {
  const [active, setActive] = useState("privacy");
  const section = SECTIONS.find((s) => s.id === active);
  return (
    <>
      <Nav current="" />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Terms &"
          italic="privacy."
          subtitle="The fine print, kept honest and plain. I believe in being straightforward about how I handle your information and what you can expect from working with me. Please review these policies at your convenience. If anything is unclear, ask — I'd rather explain it directly than hide behind legal language."
        />
        <section className="section" style={{ background: "var(--cream)", paddingTop: 20 }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2.4fr", gap: 64, alignItems: "start" }}>
            <aside style={{ position: "sticky", top: 120 }}>
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Quick navigation</div>
              <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--rule)" }}>
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <button onClick={() => setActive(s.id)} style={{ background: "transparent", border: "none", display: "flex", gap: 14, alignItems: "center", width: "100%", padding: "14px 0", borderBottom: "1px solid var(--rule)", cursor: "pointer", textAlign: "left", color: active === s.id ? "var(--terracotta)" : "var(--walnut)" }}>
                      <span className="mono" style={{ fontSize: 11, color: "var(--terracotta)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="grotesk" style={{ fontSize: 14.5, fontWeight: active === s.id ? 500 : 400 }}>{s.title}</span>
                      {active === s.id && <span style={{ marginLeft: "auto", color: "var(--terracotta)" }}>→</span>}
                    </button>
                  </li>
                ))}
              </ol>
            </aside>
            <div>
              <article>
                <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 12 }}>Section · {section.id}</div>
                <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500, marginBottom: 40 }}>{section.title}</h2>
                <div style={{ maxWidth: 740, fontSize: 17, lineHeight: 1.7, color: "var(--walnut-soft)" }}>
                  {section.body.map((b, i) => b.kind === "li"
                    ? <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--rule)" }}>
                        <span className="mono" style={{ fontSize: 11, color: "var(--terracotta)", paddingTop: 6 }}>{String(i + 1).padStart(2, "0")}</span>
                        <p>{b.text}</p>
                      </div>
                    : <p key={i} style={{ marginBottom: 22 }}>{b.text}</p>
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
