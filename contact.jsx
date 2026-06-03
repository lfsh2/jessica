/* Contact - Jessica Medler · Wild Prairie Coaching */
const { useState } = React;

function Form() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section" style={{ background: "var(--cream)", paddingTop: 40 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ background: "var(--cream-2)", padding: "44px clamp(28px, 4vw, 56px)" }}>
            {sent ? (
              <div style={{ padding: "60px 0", textAlign: "center" }}>
                <BloomMark size={28} color="var(--terracotta)" />
                <h3 className="display" style={{ fontSize: 32, fontWeight: 500, color: "var(--walnut)", marginTop: 24, marginBottom: 14 }}>Thank you for writing.</h3>
                <p className="serif-italic" style={{ fontSize: 18, color: "var(--walnut-soft)" }}>I read every note personally — usually within 24 hours. I'll write you back. No bots. No form letters. No script.</p>
              </div>
            ) : (
              <>
                <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 14 }}>✦ Send a message</div>
                <h2 className="display" style={{ fontSize: 36, fontWeight: 500, color: "var(--walnut)", lineHeight: 1.05, marginBottom: 12 }}>
                  You don't need the right words.{" "}
                  <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>Just start somewhere.</span>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--walnut-soft)", marginBottom: 32 }}>
                  I'll meet you there. Your privacy matters. Your story is held with care. I will never share either with anyone.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                  <Field label="First name" placeholder="Jessica" />
                  <Field label="Last name" placeholder="Medler" />
                </div>
                <Field label="Email" placeholder="you@email.com" />
                <Field label="What brings you here?" placeholder="Choose one" select options={["Question about a program", "Considering 1:1 coaching", "Wildflower Circle waitlist", "Self-paced journey question", "Faith-based vs. non-faith path", "Something else"]} />
                <Field label="Anything you'd like me to know" textarea placeholder="As much or as little as you want. Nothing you say will surprise me." />
                <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }}>Send my message <span className="arrow">→</span></button>
              </>
            )}
          </form>
          <aside style={{ background: "var(--walnut)", color: "var(--cream)", padding: "40px 36px" }}>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 14 }}>Reach Jessica</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {[["✉️  Email", "Jessica@wildprairiecoaching.com"], ["📞  Phone", "(701) 541-9800"], ["📍  Based in", "North Dakota · Remote nationwide"], ["⏰  Response time", "Within 24 hrs · personally · no bots"], ["📱  Instagram", "@wildprairiecoaching"], ["🌐  Website", "wildprairiecoaching.com"]].map(([t, v]) => (
                <div key={t} style={{ paddingBottom: 18, borderBottom: "1px solid rgba(239,241,232,0.15)" }}>
                  <div className="smallcaps" style={{ color: "rgba(239,241,232,0.55)", marginBottom: 6, fontSize: 9 }}>{t}</div>
                  <div className="grotesk" style={{ fontSize: 15.5, color: "var(--cream)" }}>{v}</div>
                </div>
              ))}
            </div>
            <div className="serif-italic" style={{ marginTop: 32, fontSize: 16, lineHeight: 1.5, color: "rgba(239,241,232,0.85)", fontWeight: 300 }}>
              "Come unto me, all ye that labour and are heavy laden, and I will give you rest."
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginTop: 10, fontStyle: "normal" }}>Matthew 11:28</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, textarea, select, options }) {
  const inputStyle = { width: "100%", padding: "14px 16px", background: "var(--cream)", border: "1px solid var(--rule-strong)", borderRadius: 4, fontSize: 15, color: "var(--walnut)", marginTop: 6, fontFamily: "inherit" };
  return (
    <div style={{ marginBottom: 18 }}>
      <label className="smallcaps" style={{ color: "var(--walnut-soft)" }}>{label}</label>
      {textarea ? <textarea rows={5} placeholder={placeholder} style={{ ...inputStyle, resize: "vertical" }} /> :
       select ? <select style={inputStyle} defaultValue=""><option value="" disabled>{placeholder}</option>{options.map(o => <option key={o}>{o}</option>)}</select> :
       <input type="text" placeholder={placeholder} style={inputStyle} />}
    </div>
  );
}

function AltCards() {
  const cards = [
    { eyebrow: "📅 Ready to talk", t: "Book two free sessions", d: "Two free, no-pressure 60-minute fit sessions. We'll talk about your story, the season you're in, and whether the Wild Prairie path is the right fit. You don't need answers. Just a willingness to be honest.", href: BOOKING_URL, cta: "Book your sessions" },
    { eyebrow: "🌐 Explore Wild Prairie", t: "Read about the work", d: "Not ready to talk yet? Start with the About page — my story, the four roots of this work, and how the Wild Prairie Identity Journey actually goes. A quiet doorway in.", href: "about.html", cta: "Visit the About page" },
    { eyebrow: "📱 Follow along", t: "On Instagram", d: "Honest reflections, prairie language, and quiet inner-work prompts on @wildprairiecoaching. A good place to feel my voice before reaching out.", href: "https://www.instagram.com/wildprairiecoaching", cta: "Follow on Instagram" },
  ];
  return (
    <section className="section" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Other ways to connect</div>
        <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500, marginBottom: 20, maxWidth: 720 }}>
          Not ready to write?{" "}
          <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>Start here.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--walnut-soft)", maxWidth: 720, marginBottom: 48 }}>
          Three doorways for the woman who isn't ready for a form yet — but who knows she can't keep living the way she has been.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cards.map((c, i) => {
            const external = /^https?:\/\//.test(c.href);
            return (
              <a
                key={i}
                href={c.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                style={{ background: "var(--cream)", padding: "32px 32px 28px", display: "flex", flexDirection: "column", border: "1px solid var(--rule)" }}
              >
                <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 18 }}>{c.eyebrow}</div>
                <h3 className="display" style={{ fontSize: 26, fontWeight: 500, color: "var(--walnut)", marginBottom: 10 }}>{c.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--walnut-soft)", marginBottom: 26 }}>{c.d}</p>
                <span className="grotesk" style={{ marginTop: "auto", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--terracotta)" }}>{c.cta} →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav current="contact" />
      <main>
        <PageHero
          eyebrow="Reach out"
          title="You don't have to carry this"
          italic="alone."
          subtitle="I know what it is to wear a mask so the kids don't see how depressed you actually are — to be the woman in the room who looks like she has it together while something inside is quietly bleeding. If that's where you are right now, this is the right place to say so. Send a message below. I read every one personally — usually within 24 hours."
          verse="Come unto me, all ye that labour and are heavy laden, and I will give you rest."
          verseRef="Matthew 11:28"
        />
        <Form />
        <AltCards />
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
