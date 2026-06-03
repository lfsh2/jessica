/* Walk With Me · Wild Prairie Coaching */
const { useState } = React;

const PROGRAMS = [
  {
    n: "01", icon: "❀", name: "Wild Prairie Identity Journey", sub: "12-Week 1:1 Coaching", tag: "Flagship",
    price: "By application", commit: "12 weeks · 1:1",
    pitch: "The signature offering. Two free fit sessions followed by twelve weeks of weekly 1:1 walking together — naming the lie, holding the little girl, rooting your identity in grace, and learning to live from overflow. Faith-based and non-faith paths available so no one is pushed in a direction she isn't ready for.",
    inside: ["2 free 60-minute fit sessions before any commitment", "12 weekly 60-minute 1:1 coaching sessions", "Weekly inner-healing or identity homework", "Faith-based path: prayer & devotional woven through", "Non-faith path: somatic & inner work, no faith imagery", "Voice or text check-ins between sessions when you need them"],
    cta: "Apply Now",
    featured: true,
  },
  {
    n: "02", icon: "✿", name: "Wildflower Circle", sub: "Small Group Cohort", tag: "Vetted & small",
    price: "Monthly subscription", commit: "Min 3 months",
    pitch: "A small, intentional circle of women walking the prairie at the same pace. Built for 1:1 graduates and for women who want grounded community without the Sunday-small-group performance pressure. Peer accountability, shared rhythms, and the kind of honesty most women have never had room for.",
    inside: ["Monthly 90-minute group video calls", "Private Wildflower Circle community space", "Shared rhythms, devotionals, and inner-work prompts", "Peer accountability rooted in shared journey", "Application or 1:1 completion required to join"],
    cta: "Request an Invite",
  },
  {
    n: "03", icon: "✤", name: "Coming Home to You", sub: "Self-Paced Journey", tag: "Always open",
    price: "One-time", commit: "Lifetime access",
    pitch: "The full Wild Prairie framework at your own pace — identity work, reparenting practices, inner-healing audio, and a workbook to walk you through Root, Tend, Bloom, and Overflow. The gateway in for the woman who isn't ready for an elder yet but knows she can't stay where she is.",
    inside: ["4 video modules (Root · Tend · Bloom · Overflow)", "Downloadable workbook and weekly practices", "Guided inner-healing audio (faith-based + non-faith versions)", "Lifetime access — return to any module any time", "Quiet community forum for women on the same path"],
    cta: "Enroll Now",
  },
];

function Programs() {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 920 }}>
          <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Choose your path</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500 }}>
            Coaching for{" "}
            <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>the real work.</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.6, color: "var(--walnut-soft)", maxWidth: 720 }}>
            Three doorways onto the same prairie: identity rooted in grace, reparenting the little girl, and learning to live from overflow. You've read the books. You've tried the bandaids. This is the resolution work.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {PROGRAMS.map((p) => <ProgramRow key={p.sub} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function ProgramRow({ p }) {
  return (
    <article style={{ background: p.featured ? "var(--walnut)" : "var(--cream-2)", color: p.featured ? "var(--cream)" : "var(--walnut)", padding: "48px clamp(28px, 4vw, 56px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1.4fr", gap: 56, alignItems: "start" }}>
        <div>
          <div className="mono" style={{ fontSize: 12, color: "var(--terracotta)", marginBottom: 14 }}>{p.n}</div>
          <span className="smallcaps" style={{ fontSize: 10, background: p.featured ? "var(--terracotta)" : "transparent", color: p.featured ? "var(--cream)" : "var(--terracotta)", border: p.featured ? "none" : "1px solid var(--terracotta)", padding: "5px 10px", borderRadius: 999 }}>{p.tag}</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 28 }}>
            <span style={{ fontSize: 28, color: "var(--terracotta)" }}>{p.icon}</span>
            <h3 className="display" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.03em" }}>{p.name}</h3>
          </div>
          <div className="serif-italic" style={{ fontSize: 19, color: p.featured ? "var(--cream-3)" : "var(--walnut-soft)", marginTop: 4 }}>{p.sub}</div>
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: p.featured ? "rgba(239,241,232,0.7)" : "var(--walnut-soft)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: p.featured ? "1px solid rgba(239,241,232,0.15)" : "1px solid var(--rule)", paddingBottom: 8 }}>
              <span className="smallcaps" style={{ fontSize: 9 }}>Investment</span>
              <span className="grotesk">{p.price}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="smallcaps" style={{ fontSize: 9 }}>Commitment</span>
              <span className="grotesk">{p.commit}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 14 }}>What's inside</div>
          <p className="serif-italic" style={{ fontSize: 20, lineHeight: 1.5, color: p.featured ? "var(--cream)" : "var(--walnut)", marginBottom: 26, fontWeight: 300 }}>{p.pitch}</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {p.inside.map((w, i) => (
              <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 15.5, color: p.featured ? "rgba(239,241,232,0.85)" : "var(--walnut-soft)" }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--terracotta)", marginTop: 4, minWidth: 22 }}>0{i + 1}</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ borderLeft: p.featured ? "1px solid rgba(239,241,232,0.15)" : "1px solid var(--rule)", paddingLeft: 32 }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: p.featured ? "var(--cream)" : "var(--walnut)", color: p.featured ? "var(--walnut)" : "var(--cream)" }}>
            {p.cta} <span className="arrow">→</span>
          </a>
          <p style={{ marginTop: 24, fontSize: 14, color: p.featured ? "rgba(239,241,232,0.65)" : "var(--walnut-soft)", lineHeight: 1.5 }}>
            Not sure which path is yours? <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--terracotta)", textDecoration: "underline" }}>Book two free fit sessions</a> and we'll figure it out together.
          </p>
        </div>
      </div>
    </article>
  );
}

function Phases() {
  const phases = [
    { v: "Root", s: "Name the Lie", b: "We start by tracing what was planted. The performance-based love. The mother whose praise you couldn't earn. The patterns you swore you'd never repeat. Honest soil — no shame, no rushing." },
    { v: "Tend", s: "Hold the Little Girl", b: "Inner-child reparenting with the unconditional love no one ever gave her. The grief most women avoid for a lifetime. We sit with her, name what she needed, and let her finally exhale." },
    { v: "Bloom", s: "Rooted in Grace", b: "Identity rebuilt — in Christ for the faith-based path, in honest somatic & inner work for the non-faith path. The lie that you'd only be loved when you earned it loses its hold. Quietly. Fully." },
    { v: "Overflow", s: "Live From Fullness", b: "Marriage softens. Mothering shifts. Work becomes less performance and more presence. The dress looks beautiful — not because of your body, but because of how you carry yourself." },
  ];
  return (
    <section className="section" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 880 }}>
          <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ The methodology</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500 }}>
            How the journey{" "}
            <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>actually works.</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.6, color: "var(--walnut-soft)" }}>
            Every woman moves through the same four phases — in 1:1 coaching, in the Wildflower Circle, or through the self-paced journey. The pace differs. The path is identical.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule-strong)" }}>
          {phases.map((p, i) => (
            <div key={p.v} style={{ padding: "36px 28px 40px", borderRight: i < 3 ? "1px solid var(--rule)" : "none" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--terracotta)", marginBottom: 18 }}>0{i + 1} · ❀</div>
              <div className="display" style={{ fontSize: 32, fontWeight: 500, color: "var(--walnut)", letterSpacing: "-0.02em" }}>{p.v}</div>
              <div className="serif-italic" style={{ fontSize: 17, color: "var(--walnut-soft)", marginTop: 4, marginBottom: 18 }}>{p.s}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--walnut-soft)" }}>{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientFit() {
  const groups = [
    { tag: "The Quiet Performer", t: "Mom · wife · overlooked", d: "You give everyone everything. Your kids. Your husband. Your job. And quietly, you wonder if anyone actually sees you. You wear a mask so the kids don't see how depressed you are. You're exhausted from being the one who asks for nothing and is offered nothing. This is exactly the woman the Wild Prairie path was built for." },
    { tag: "The Faith-Returning Woman", t: "Young in her faith · hungry for Jesus", d: "You grew up in church, or you didn't, and you've recently come back to faith — or are quietly finding it for the first time. You're hungry, but you don't have a circle yet. You want to grow without being pushed or shamed for asking honest questions. The faith-based path is held softly here." },
    { tag: "The 'Almost 40' Woman", t: "Asking what comes next", d: "Your identity has been wrapped in motherhood, marriage, or a job that's been overlooking you for years. You're scared of who you'll be when the kids leave — or when this season ends. You want to find your purpose in the mess. You want to start the business, the bible study, the something. We'll find her together." },
    { tag: "The Non-Faith Path Woman", t: "Healing work · no faith imagery", d: "You want the inner-healing and identity work without prayer or scripture woven through. That's a fully held path here. Same root work, same soft tending, same Wild Prairie methodology — held in a way that respects exactly where you are. No one is pushed." },
  ];
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Is this for you?</div>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", color: "var(--walnut)", lineHeight: 1.0, fontWeight: 500, marginBottom: 36 }}>
          The women I walk with{" "}
          <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>most often.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--rule-strong)" }}>
          {groups.map((g, i) => (
            <div key={i} style={{ padding: "36px 36px 40px", borderBottom: i < 2 ? "1px solid var(--rule)" : "none", borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none" }}>
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 12 }}>{g.tag}</div>
              <h3 className="display" style={{ fontSize: 24, fontWeight: 500, color: "var(--walnut)", lineHeight: 1.2, marginBottom: 14 }}>{g.t}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--walnut-soft)" }}>{g.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    ["Personalized, deep-dive attention", "Full", "Partial", "—"],
    ["Live sessions with Jessica", "Weekly", "Monthly", "—"],
    ["Wildflower community access", "✓", "✓", "✓"],
    ["Faith-based or non-faith path", "Either", "Either", "Both included"],
    ["Lifetime access to materials", "✓", "✓", "✓"],
    ["Inner-healing work format", "Every session", "Group format", "Audio guided"],
  ];
  return (
    <section className="section" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Compare programs</div>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", color: "var(--walnut)", lineHeight: 1.0, fontWeight: 500, marginBottom: 48 }}>
          Find your{" "}
          <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>right fit.</span>
        </h2>
        <div style={{ overflow: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr style={{ borderTop: "1px solid var(--rule-strong)", borderBottom: "1px solid var(--rule-strong)" }}>
                <th style={{ textAlign: "left", padding: "20px 18px 20px 0", width: "30%" }}><div className="smallcaps" style={{ color: "var(--walnut-soft)" }}>Feature</div></th>
                {[["01", "1:1 Journey"], ["02", "Wildflower Circle"], ["03", "Self-Paced"]].map(([n, name]) => (
                  <th key={n} style={{ textAlign: "left", padding: "20px 18px" }}>
                    <div className="mono" style={{ fontSize: 11, color: "var(--terracotta)" }}>{n}</div>
                    <div className="display" style={{ fontSize: 20, fontWeight: 500, color: "var(--walnut)", marginTop: 4 }}>{name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "18px 18px 18px 0", color: "var(--walnut-soft)", fontSize: 14, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase", verticalAlign: "top" }}>{r[0]}</td>
                  {r.slice(1).map((v, j) => (
                    <td key={j} style={{ padding: "18px", color: "var(--walnut)", fontSize: 16, lineHeight: 1.45, verticalAlign: "top", background: j === 0 ? "var(--cream)" : "transparent" }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav current="work" />
      <main>
        <PageHero
          eyebrow="Programs & Coaching"
          title="This isn't another"
          italic="women's program."
          subtitle="Three entry points into the same grounded, inner-healing work. Every offering is built on the same soil: identity rooted in grace, reparenting the little girl, and learning to live from overflow. Faith-based and non-faith paths held side by side. No one is pushed."
          verse="There is therefore now no condemnation to them which are in Christ Jesus."
          verseRef="Romans 8:1"
        />
        <Programs />
        <Phases />
        <ClientFit />
        <Compare />
        <CTA
          eyebrow="✦ You've tried the bandaids"
          headline="This is the root"
          headlineItalic="work."
        />
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
