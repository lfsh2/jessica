/* About Jessica · Wild Prairie Coaching */
const { useState, useEffect } = React;

function StoryBlock() {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 120 }}>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Meet Jessica</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", color: "var(--walnut)", lineHeight: 1.0, fontWeight: 500 }}>
              I'm a recovering performer.{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>Still walking the prairie.</span>
            </h2>
            <Placeholder src="https://assets.cdn.filesafe.space/oLtwgt8srMUe5rV1iQgS/media/6a20f5865cd41fa7c6ba97ff.jpg" label="Jessica · candid portrait" style={{ marginTop: 32, aspectRatio: "4 / 5", width: "100%" }} />
            <div style={{ marginTop: 32, padding: "24px 28px", background: "var(--cream-2)", borderLeft: "2px solid var(--terracotta)" }}>
              <p className="serif-italic" style={{ fontSize: 18, lineHeight: 1.5, color: "var(--walnut)", fontWeight: 300 }}>
                "I praise you, for I am fearfully and wonderfully made."
              </p>
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginTop: 12 }}>Psalm 139:14</div>
            </div>
          </div>
          <div>
            <div style={{ borderLeft: "2px solid var(--terracotta)", paddingLeft: 28, marginBottom: 40 }}>
              <p className="serif-italic" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.45, color: "var(--walnut)", fontWeight: 300 }}>
                "You don't have a willpower problem. You have a little girl still waiting for a love that was always going to be conditional. We're going to deal with her — and when we do, the woman in the mirror won't need a mask anymore."
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 26, fontSize: 17.5, lineHeight: 1.75, color: "var(--walnut-soft)" }}>
              <p>I grew up in Sunday school, confirmation, and the Sunday-morning pew. My values were built on being a good person — do unto others — and on a quiet, unspoken rule that the love around me cost something. My father was a deployed military man, more absent than present. My mother's love I never quite measured up to. I left for college, and faith fell away. I lived "good enough." I focused on becoming who I thought I should be.</p>
              <p>By forty I had two kids, a second marriage to a man who loved every part of me, and a deep certainty that I was a failure at everything I touched. <span className="serif-italic" style={{ color: "var(--walnut)" }}>Spring 2025 we filed bankruptcy on our business. We were losing the house. The 401k was gone. I was forty pounds heavier than I wanted to be, drinking every night, and watching my kids play in the lake from the shore because my knee injury wouldn't let me follow them in.</span></p>
              <p>One night outside a brewery I slipped on concrete. My face missed a metal stair by an inch. Walking out, I caught my reflection and heard myself think, clear as a bell: <em>this is my mother. I will not be like her.</em> The next morning I was bruised, knee like a softball, wrist in a splint. The body would heal. The shame wouldn't. I started numbing on social media. I told myself this is just what life is now.</p>
              <p>Then one quiet afternoon I was scrolling and I saw a man — a public man of faith — shot on a live feed. And I saw the comments mocking his death. And something in me broke. Not the body kind. The soul kind. <span className="serif-italic" style={{ color: "var(--walnut)", fontSize: 19 }}>I fell to my knees and prayed for the first time in over a decade. Not eloquently. Just truly. I begged forgiveness — for me, for them, for a country I love. I surrendered.</span> I have felt reborn ever since.</p>
              <p>The first sermon I walked into was on exactly what I was feeling. The band was rehearsing the song that had been on my car radio as I pulled in. My old confirmation bible — the one I hadn't opened in twenty years — had highlighted passages that mirrored the bible study I'd just signed up for. The Lord kept showing up. He still does, every morning, with a praise song already on my heart.</p>
              <p>Nine months later I felt the calling to coaching. Not because I'd arrived. Because I'd walked the road and could hold space for other women on it. The Wild Prairie Identity Journey is what came from that — and it is the work I'd give my whole life to.</p>
            </div>
            <div className="display" style={{ fontSize: 32, fontWeight: 300, color: "var(--walnut)", marginTop: 36, fontFamily: "'Source Serif 4', serif", fontStyle: "italic" }}>— Jessica</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beliefs() {
  const beliefs = [
    { n: "I", title: "Resolution, not modification.", body: "I won't hand you a behavioral bandaid. The reason willpower keeps failing isn't that you don't try hard enough — it's that the lie underneath the behavior is still in charge. Wild Prairie does the root work. What gets resolved doesn't have to be re-managed." },
    { n: "II", title: "Held space, not pushed space.", body: "I walk beside. I ask questions that let you finally hear yourself. I don't perform for you and I don't ask you to perform for me. The work happens in the quiet honesty of being met without judgment — by a woman who's been exactly where you are." },
    { n: "III", title: "Faith-focused, never faith-forced.", body: "I offer both faith-based and non-faith paths so no woman feels pushed in a direction she's not ready for. The work itself is grounded in inner-healing and identity work. If you want prayer and devotional woven in, we walk that path. If not, the work still holds." },
  ];
  return (
    <section className="section" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 920 }}>
          <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ What I stand for</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500 }}>
            The foundations{" "}
            <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>of this work.</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.6, color: "var(--walnut-soft)", maxWidth: 720 }}>
            Soft soil. Honest naming. Slow tending. Every conversation I hold is built on these three convictions about women, healing, and what it looks like to be loved without conditions.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule-strong)" }}>
          {beliefs.map((b, i) => (
            <div key={b.n} style={{ padding: "44px 36px 48px", borderRight: i < 2 ? "1px solid var(--rule)" : "none" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--terracotta)", marginBottom: 24 }}>{b.n}</div>
              <h3 className="display" style={{ fontSize: 26, fontWeight: 500, color: "var(--walnut)", lineHeight: 1.15, marginBottom: 18 }}>{b.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--walnut-soft)" }}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const items = [
    { tag: "Certified Coach", t: "Trained · grounded · accountable", d: "Formal coaching certification and a background in business and leadership before this calling. The frameworks I use — inner-child work, shame work (Bradshaw, Miller), identity-in-Christ theology, Holy-Spirit-led memory healing — are not borrowed from a weekend retreat. They are tools I've been practicing on myself and the people I love for years." },
    { tag: "Lived Healing", t: "Twenty years on the path", d: "I grew up with a deployed father and a mother whose love I couldn't earn. I walked through a first marriage I had to leave, performance-based love that nearly drowned me, a bankruptcy, an injury, and a season of numbing that ended on my knees. None of this is theory for me. Every piece of the Wild Prairie path is ground I have personally walked." },
    { tag: "Authority Topic", t: "Performance-based love & worth", d: "I help women who feel they are not worthy of love unless they provide something first — or who don't feel they deserve respect, appreciation, or for others to do for them. I have walked through this for the better part of thirty years, in my body, in my marriage, in my mothering, and in my faith." },
    { tag: "Lineage & Voices", t: "Faith, inner work, somatic grit", d: "Influenced by Sammi Robins, Glennon Doyle, Rick Hamilton (my dad), David Goggins, and Mike Reiley. Theologically grounded in identity-in-Christ and grace-based theology. Practiced in inner-child reparenting, shame work, and Holy-Spirit-led inner healing — for clients who want it, and quiet for those who don't." },
  ];
  return (
    <section className="section" style={{ background: "var(--walnut)", color: "var(--cream)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Background & credentials</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--cream)", lineHeight: 0.98, fontWeight: 500 }}>
              Trained, tested, and{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>still tending.</span>
            </h2>
            <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6, color: "rgba(239,241,232,0.7)" }}>
              I bring certification, leadership background, and two decades of personal healing to every woman I walk with. None of this is borrowed. Most of it cost me something to learn.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid rgba(239,241,232,0.18)" }}>
            {items.map((it, i) => (
              <div key={i} style={{ padding: "32px 28px 32px 0", borderBottom: i < 2 ? "1px solid rgba(239,241,232,0.18)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(239,241,232,0.18)" : "none", paddingLeft: i % 2 === 1 ? 28 : 0 }}>
                <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 14 }}>{it.tag}</div>
                <h3 className="display" style={{ fontSize: 21, fontWeight: 500, color: "var(--cream)", lineHeight: 1.2, marginBottom: 10 }}>{it.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(239,241,232,0.7)" }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav current="about" />
      <main>
        <PageHero
          eyebrow="My Story"
          title="I spent thirty years performing for love."
          italic="Then I came home."
          subtitle="A military father deployed more than home. A mother whose love I never earned. A first marriage I had to leave. A bankruptcy, a fall outside a brewery, and a quiet afternoon that put me on my knees for the first time in a decade. This is the road I walked — and the one I now walk with women like you."
          verse="I praise you, for I am fearfully and wonderfully made."
          verseRef="Psalm 139:14"
        />
        <section style={{ padding: "60px clamp(28px, 6vw, 96px) 0", background: "var(--cream)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, borderTop: "1px solid var(--rule)", paddingTop: 36 }}>
              {[["20+", "yrs", "On her own healing path"], ["12", "wks", "1:1 walking together"], ["2", "", "Free fit sessions to start"], ["1", "", "Mission · grace over performance"]].map(([n, unit, l], i) => (
                <div key={i}>
                  <div className="display" style={{ fontSize: 38, fontWeight: 500, color: "var(--walnut)", letterSpacing: "-0.03em", display: "flex", alignItems: "baseline", gap: 6, whiteSpace: "nowrap" }}>
                    <span>{n}</span>
                    {unit && <span style={{ fontSize: 18, fontWeight: 400, color: "var(--walnut-soft)", letterSpacing: "0.02em" }}>{unit}</span>}
                  </div>
                  <div className="smallcaps" style={{ color: "var(--terracotta)", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <StoryBlock />
        <Beliefs />
        <Credentials />
        <CTA
          eyebrow="✦ Your next step"
          headline="Ready to come"
          headlineItalic="home?"
          checklist={[
            "Where the lie of performance-based love is still writing the rules of your day",
            "What inner-healing work actually opens — and why behavior change alone has stopped working",
            "Which Wild Prairie path fits your season — 1:1, the Wildflower Circle, or self-paced",
            "Whether the faith-based or non-faith starting place is right for you",
          ]}
        />
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
