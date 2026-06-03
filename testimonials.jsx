/* Stories / Testimonials - Wild Prairie Coaching */
const { useState } = React;

const FEATURED = {
  name: "Travis", meta: "Jessica's husband · cycle-breaker",
  quote: "Jessica and I grew up the same way — both told, in different words, that we'd only be loved if we earned it. Walking with her has meant being told, for the first time in my life, that I matter no matter what. Even when life gets heavy. Even when I'm the one who is the mess. She helped me name that the little boy in me had been waiting since the day my sisters were born — waiting for someone to tell him he was never the problem. We've been calling it the well-worn path: the old route my mind takes when I'm tired. She and I now have the language for it, and she helped me find new ground.",
};

const ALL = [
  { name: "A coworker", meta: "Promotion · rooted confidence", quote: "I'd been the woman everyone asks for help and no one ever promotes. Jessica didn't pump me up — she walked me through it. We worked on the mindset that kept telling me I'd be seen if I just did more. We built a brand for me that finally shouted my name from the rooftops. When promotion time came around, it wasn't even a conversation. She doesn't hype you. She helps you actually see yourself." },
  { name: "A woman walking the path", meta: "Wild Prairie transformation", quote: "After time walking the prairie with her, the color started to come back. I noticed it in my kids first — they were softer with me because I was softer with myself. There's laughter in my eyes again that I'd forgotten I used to have. The light I'd been chasing outside of myself was already there. It was just buried under thirty years of performance." },
  { name: "An early Wildflower", meta: "Mom · faith returning · ages 30s", quote: "I came to Jessica because I was tired. Of mothering perfectly. Of being the strong one. Of being the woman who never asks. She didn't fix me — she just kept asking the right questions until I could finally hear myself. The day I cried in front of my kids and apologized — not for being broken, but for hiding — that was the day everything started to shift." },
  { name: "A faith-returning woman", meta: "Bible study group · rooted", quote: "I was young in my faith and embarrassed about it. Jessica met me there with absolutely zero condescension. She walked me into Scripture the way a friend walks you into a room. The work she did with me — gentle, prayerful, never pushed — is the reason I can sit in bible study now without feeling like I'm pretending. I finally feel rooted." },
  { name: "A non-faith path woman", meta: "Inner work · no faith imagery", quote: "I wanted the inner-healing work without the prayer language. Jessica held that fully — same depth, same softness, just held in a way that respected exactly where I was. I never felt pushed. I never felt judged for not believing what she believes. That alone is rare. The work itself was the most honest thing I've done in years." },
  { name: "A friend who watched it happen", meta: "Witness · 2 yrs", quote: "I've watched Jessica become a different woman in the last year. Quieter. Less performative. More herself. The way she shows up for her kids and her husband now — there's no mask. She lives the work she's offering. That's why I trust her with the women in my life who are tired of the bandaids." },
];

function Featured() {
  return (
    <section className="section" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Featured story</div>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500, marginBottom: 48 }}>
          A cycle broken.{" "}
          <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>A man finally held.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "center" }}>
          <Placeholder label={FEATURED.name + " · portrait"} style={{ aspectRatio: "4 / 5", width: "100%" }} />
          <div>
            <div aria-hidden style={{ fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontWeight: 300, fontSize: 140, color: "var(--terracotta)", opacity: 0.25, lineHeight: 0.5, marginBottom: 14 }}>"</div>
            <p style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.45, color: "var(--walnut)", fontFamily: "'Source Serif 4', serif", fontWeight: 300, fontStyle: "italic", marginBottom: 32 }}>
              {FEATURED.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 24, borderTop: "1px solid var(--rule-strong)", flexWrap: "wrap" }}>
              <div className="display" style={{ fontSize: 22, fontWeight: 500, color: "var(--walnut)" }}>— {FEATURED.name}</div>
              <div style={{ flex: 1, height: 1, background: "var(--rule)", minWidth: 30 }} />
              <div className="smallcaps" style={{ color: "var(--walnut-soft)" }}>{FEATURED.meta}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ marginBottom: 48, maxWidth: 920 }}>
          <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ More voices</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 64px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500 }}>
            Early stories from the{" "}
            <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>prairie.</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.6, color: "var(--walnut-soft)" }}>
            Wild Prairie is a new offering — and Jessica's coaching practice has been deeply lived before it was named. These are voices from her husband, her circle, and the women who walked early seasons of this work with her. Honest. Unedited. Specific.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {ALL.map((t, i) => (
            <figure key={i} style={{ background: "var(--cream-2)", padding: "36px 36px 32px" }}>
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 18 }}>{t.meta.split(" · ")[0]}</div>
              <blockquote style={{ fontSize: 18, lineHeight: 1.55, color: "var(--walnut)", marginBottom: 26, fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontWeight: 300 }}>"{t.quote}"</blockquote>
              <figcaption style={{ borderTop: "1px solid var(--rule)", paddingTop: 16, display: "flex", alignItems: "center", gap: 14 }}>
                <Placeholder label="" style={{ width: 44, height: 44, borderRadius: "50%" }} />
                <div>
                  <div className="grotesk" style={{ fontSize: 15, fontWeight: 500, color: "var(--walnut)" }}>{t.name}</div>
                  <div className="smallcaps" style={{ color: "var(--walnut-soft)", fontSize: 9 }}>{t.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section style={{ padding: "48px clamp(28px, 6vw, 96px)", background: "var(--walnut)", color: "var(--cream)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
        {[["20+ yrs", "Walking the path · lived not theorized"], ["12 wks", "1:1 walking arc · weekly · held"], ["2", "Free fit sessions · no pressure"]].map(([n, l], i) => (
          <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 16, borderLeft: i === 0 ? "none" : "1px solid rgba(239,241,232,0.18)", paddingLeft: i === 0 ? 0 : 32 }}>
            <div className="display" style={{ fontSize: 44, fontWeight: 500, color: "var(--cream)", letterSpacing: "-0.04em" }}>{n}</div>
            <div className="smallcaps" style={{ color: "var(--terracotta)" }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav current="stories" />
      <main>
        <PageHero
          eyebrow="Stories"
          title="Women coming"
          italic="home."
          subtitle="These are voices from Jessica's earliest seasons of this work — her husband, her circle, and the women who walked alongside her as the Wild Prairie path was being named. Unedited. Specific. The first chapter, not the last. Yours could be the next."
          verse="Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble."
          verseRef="2 Corinthians 1:3-4"
        />
        <StatsBar />
        <Featured />
        <Grid />
        <CTA
          eyebrow="✦ Your turn"
          headline="Ready to write"
          headlineItalic="your story?"
        />
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
