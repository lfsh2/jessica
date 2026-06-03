/* Book Two Free Fit Sessions - Jessica Medler · Wild Prairie Coaching */
const { useState } = React;

function CalendlyMock() {
  const checklist = [
    "Who you are — your name, your season, what's been quietly running in the background.",
    "Your story — what's been happening, how long, what you've tried, what the mask is costing you.",
    "My honest read — whether I believe the Wild Prairie path is the right fit, and exactly why or why not.",
    "Clear next steps — which path makes sense, what coaching together would look like, or a kind exit if I'm not the right voice for you.",
  ];

  return (
    <section className="section" style={{ background: "var(--cream)", paddingTop: 40 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "start" }}>
          <div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Two free fit sessions · 60 min each · zero pressure</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 3.8vw, 48px)", color: "var(--walnut)", lineHeight: 1.05, fontWeight: 500, marginBottom: 24 }}>
              Here's how our first 60 minutes{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>will go.</span>
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, fontSize: 16, color: "var(--walnut-soft)", lineHeight: 1.55, marginBottom: 28 }}>
              {checklist.map((c, i) => (
                <li key={i} style={{ display: "flex", gap: 14, paddingBottom: 14, borderBottom: i < checklist.length - 1 ? "1px solid var(--rule)" : "none" }}>
                  <span className="mono" style={{ fontSize: 11, color: "var(--terracotta)", paddingTop: 4, minWidth: 24 }}>0{i + 1}</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div style={{ background: "var(--cream-2)", borderLeft: "2px solid var(--terracotta)", padding: "18px 22px", marginBottom: 24 }}>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--walnut-soft)" }}>
                <strong style={{ color: "var(--walnut)" }}>Zero pressure. Zero pitch.</strong> The two free sessions are real — both for you to see if my voice fits your soul, and for me to listen honestly to where you are. If we're not the right walking match, I will tell you and point you toward someone who is.
              </p>
            </div>
            <div className="serif-italic" style={{ fontSize: 16, color: "var(--walnut)", fontWeight: 300 }}>
              "I praise you, for I am fearfully and wonderfully made."
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginTop: 8, fontStyle: "normal" }}>Psalm 139:14</div>
            </div>
          </div>
          <div style={{ background: "var(--cream-2)", border: "1px solid var(--rule)", padding: 12 }}>
            <iframe
              src={BOOKING_URL}
              title="Book Two Free Fit Sessions"
              id="leadconnector-booking-iframe"
              scrolling="no"
              style={{ width: "100%", border: "none", minHeight: 720, display: "block", background: "var(--cream)" }}
            />
            <div className="serif-italic" style={{ fontSize: 13, color: "var(--walnut-soft)", marginTop: 12, textAlign: "center" }}>
              Times shown in your local zone · zero pressure to book
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatToExpect() {
  const steps = [
    { t: "You talk. I listen.", d: "I'll ask you to share where you are — what's been happening, how long, what you've tried, what the mask has been costing you. You will not be judged for what you say. I have lived in that chair. I know every corner of it." },
    { t: "I ask honest questions.", d: "I'll ask about your story, the lies you've quietly believed, the patterns you can't seem to outrun, and what shows up in your body when an old wound gets touched. These aren't small talk — they're how I understand what's actually driving the season you're in." },
    { t: "I'll be honest with you.", d: "If I believe Wild Prairie is right for you, I'll say so clearly and walk you through what coaching together would look like. If I don't, I'll tell you and point you toward someone I believe will help. No script. No pitch. Just truth and a soft handshake." },
  ];
  return (
    <section className="section" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ What to expect</div>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500, maxWidth: 980, marginBottom: 20 }}>
          How the call{" "}
          <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>actually goes.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--walnut-soft)", maxWidth: 720, marginBottom: 56 }}>
          This is not a sales call disguised as a consultation. It's a real conversation between two women — one who has walked this prairie, and one who may be ready to step onto it.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule-strong)" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: "44px 36px 48px", borderRight: i < 2 ? "1px solid var(--rule)" : "none" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--terracotta)", marginBottom: 24 }}>0{i + 1}</div>
              <h3 className="display" style={{ fontSize: 26, fontWeight: 500, color: "var(--walnut)", marginBottom: 14 }}>{s.t}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--walnut-soft)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav current="" />
      <main>
        <PageHero
          eyebrow="Book two free fit sessions · 60 min each · free"
          title="60 minutes that could"
          italic="change everything."
          subtitle="This isn't a pitch. It's a real conversation — 60 minutes for you to share where you are and for us to figure out together whether Wild Prairie is the right next step. If it isn't, I'll tell you plainly and point you somewhere it might be. That's my word."
          verse="Come unto me, all ye that labour and are heavy laden, and I will give you rest."
          verseRef="Matthew 11:28"
        />
        <CalendlyMock />
        <WhatToExpect />
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
