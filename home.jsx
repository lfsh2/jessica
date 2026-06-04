/* Jessica Medler · Wild Prairie Coaching — Home page (uses shared.jsx shell) */

const { useState, useEffect } = React;

/* ============================================================
 * HERO (page-specific)
 * ============================================================ */
function Hero() {
  return (
    <section
      style={{
        padding: "clamp(40px, 6vw, 80px) clamp(28px, 6vw, 96px) clamp(80px, 10vw, 140px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 56, color: "var(--walnut-soft)" }}>
          <CircleMark size={6} color="var(--terracotta)" />
          <span className="smallcaps">Wild Prairie Coaching · for the woman ready to come home to herself</span>
          <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />
          <span className="smallcaps" style={{ color: "var(--walnut-soft)" }}>North Dakota · Remote</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "clamp(40px, 5vw, 80px)", alignItems: "stretch" }}>
          <div>
            <h1 className="display" style={{ fontSize: "clamp(48px, 7.4vw, 116px)", color: "var(--walnut)", marginBottom: 32 }}>
              You were never<br />the failure.<br />
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>You were the</span><br />
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>field waiting to bloom.</span>
            </h1>
            <p style={{ fontSize: 22, lineHeight: 1.4, color: "var(--walnut)", maxWidth: 540, marginBottom: 36, fontWeight: 300 }}>
              Twelve weeks of grounded, faith-focused coaching for the woman tired of earning love.<br />
              <span className="serif-italic" style={{ color: "var(--walnut-soft)", fontSize: 18 }}>I've walked this prairie. I'll walk it with you.</span>
            </p>
            <div style={{ display: "flex", gap: 14, marginBottom: 56, flexWrap: "wrap" }}>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Two Free Sessions <span className="arrow">→</span></a>
              <a href="about.html" className="btn btn-ghost">Meet Jessica</a>
            </div>
            <div style={{ maxWidth: 540, fontSize: 17, lineHeight: 1.7, color: "var(--walnut-soft)", borderTop: "1px solid var(--rule)", paddingTop: 28 }}>
              <p style={{ marginBottom: 14 }}>
                You give everything. To your kids, your husband, your job, your church. And still — quietly — you wonder if anyone actually sees you. If the mask you wear so the kids don't notice your depression is the only version of you anyone will ever love.
              </p>
              <p>
                That isn't a willpower problem. That's a performance-based-love problem.{" "}
                <span style={{ color: "var(--walnut)", fontStyle: "italic", fontFamily: "'Source Serif 4', serif" }}>You can't behavior-modify your way out of a wound that's been writing the rules for thirty years. Wild Prairie is the resolution work — root-level, slow, honest, and held.</span>
              </p>
            </div>
          </div>

          <div style={{ position: "relative", minHeight: 680 }}>
            <Placeholder src="https://assets.cdn.filesafe.space/oLtwgt8srMUe5rV1iQgS/media/6a20f5865cd41fa7c6ba97ff.jpg" label="Portrait of Jessica" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", borderRadius: 2, overflow: "hidden" }} />

            <div style={{ position: "absolute", left: "-48px", bottom: "-36px", background: "var(--cream)", border: "1px solid var(--rule)", padding: "28px 30px 24px", maxWidth: 340, boxShadow: "0 24px 60px -30px rgba(46,58,41,0.35)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, color: "var(--terracotta)" }}>
                <BloomMark size={12} color="var(--terracotta)" />
                <span className="smallcaps" style={{ color: "var(--terracotta)" }}>Psalm 139:14</span>
              </div>
              <p className="serif-italic" style={{ fontSize: 18, lineHeight: 1.4, color: "var(--walnut)", fontWeight: 300 }}>
                "I praise you, for I am fearfully and wonderfully made."
              </p>
            </div>

            <div className="grotesk" style={{ position: "absolute", top: 24, right: 24, background: "var(--walnut)", color: "var(--cream)", padding: "10px 14px", borderRadius: 999, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--terracotta)" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>Now accepting · spring season</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * STATS STRIP
 * ============================================================ */
function Stats() {
  const stats = [
    { n: "20+", unit: "yrs", l: "On her own healing journey" },
    { n: "12", unit: "wks", l: "1:1 walking together" },
    { n: "2", unit: "", l: "Free sessions to start", sub: "no pitch · no pressure" },
    { n: "1", unit: "", l: "Mission — women rooted in grace" },
  ];
  return (
    <section style={{ padding: "44px clamp(28px, 6vw, 96px)", background: "var(--walnut)", color: "var(--cream)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 16, borderLeft: i === 0 ? "none" : "1px solid rgba(239,241,232,0.18)", paddingLeft: i === 0 ? 0 : 32 }}>
            <div className="display" style={{ fontSize: 44, fontWeight: 500, color: "var(--cream)", letterSpacing: "-0.04em", display: "flex", alignItems: "baseline", gap: 6, whiteSpace: "nowrap" }}>
              <span>{s.n}</span>
              {s.unit && <span style={{ fontSize: 18, fontWeight: 400, color: "var(--cream)", opacity: 0.7, letterSpacing: "0.02em" }}>{s.unit}</span>}
            </div>
            <div>
              <div className="smallcaps" style={{ color: "var(--terracotta)", opacity: 0.95, fontSize: 10 }}>{s.l}</div>
              {s.sub && <div style={{ marginTop: 4, color: "rgba(239,241,232,0.7)", fontSize: 12, fontStyle: "italic" }}>{s.sub}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
 * 4 PILLARS
 * ============================================================ */
function Pillars() {
  const pillars = [
    { n: "I", title: "Identity Rooted in Grace", body: "Performance-based love says you earn your place. Grace says you already have one. Every conversation we have begins from the truth that you are fearfully and wonderfully made — not because of what you produce, but because of who made you." },
    { n: "II", title: "Reparenting the Little Girl", body: "Somewhere along the way, a little girl learned that love had a price tag. We go back. We name what she didn't get. We hold her with the kind of unconditional love no one ever gave her — and let her finally exhale." },
    { n: "III", title: "Inner Healing, Holy-Spirit Led", body: "I don't believe in slapping behavioral bandaids over a soul-deep wound. We do the inner work — gently, prayerfully, and at your pace — so what gets resolved actually stays resolved. (Faith-based and non-faith paths both available.)" },
    { n: "IV", title: "Resolution, Not Performance", body: "You don't need another to-do list. You need to stop performing for love you already have. The Wild Prairie path is about rooting you so deeply that overflowing — at home, at work, in your marriage — becomes the natural thing, not the exhausting one." },
  ];

  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2.4fr", gap: 64, alignItems: "start", marginBottom: 72 }}>
          <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ The four pillars</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.6vw, 64px)", color: "var(--walnut)", lineHeight: 1.0, fontWeight: 500 }}>
            The work rests on{" "}
            <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>four roots</span>
            —each one essential, none of them optional.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule-strong)" }}>
          {pillars.map((p, i) => (
            <div key={p.n} style={{ padding: "40px 32px 48px", borderRight: i < 3 ? "1px solid var(--rule)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--terracotta)" }}>{p.n}</span>
                <WheatMark size={14} color="var(--sage)" />
              </div>
              <h3 className="display" style={{ fontSize: 22, fontWeight: 500, color: "var(--walnut)", marginBottom: 16, lineHeight: 1.15 }}>{p.title}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--walnut-soft)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * ABOUT PREVIEW
 * ============================================================ */
function AboutPreview() {
  return (
    <section className="section" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(40px, 6vw, 100px)", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Placeholder src="https://assets.cdn.filesafe.space/oLtwgt8srMUe5rV1iQgS/media/6a20f5865cd41fa7c6ba97ff.jpg" label="Jessica · candid portrait" style={{ aspectRatio: "3 / 4", width: "100%" }} />
            <div style={{ position: "absolute", bottom: -28, right: -28, width: 140, height: 140, background: "var(--terracotta)", color: "var(--cream)", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 18 }}>
              <div className="smallcaps" style={{ fontSize: 9, marginBottom: 4, color: "var(--cream)" }}>Certified · Reborn</div>
              <div className="display" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1 }}>20+ yrs</div>
              <div className="smallcaps" style={{ fontSize: 9, marginTop: 4, color: "var(--cream)" }}>Walking the path</div>
            </div>
          </div>

          <div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 20 }}>✦ My Story</div>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", color: "var(--walnut)", lineHeight: 1.05, marginBottom: 30, fontWeight: 500 }}>
              I spent thirty years earning a love I already had.{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>Then I came home.</span>
            </h2>
            <div style={{ fontSize: 17.5, lineHeight: 1.7, color: "var(--walnut-soft)", marginBottom: 22 }}>
              <p style={{ marginBottom: 14 }}>
                I'm Jessica. A mom of two. A wife the second time around. A daughter of a military father who was deployed more than he was home, and a mother whose love I was never quite enough for. At forty, I had a husband who loved every part of me — even the broken pieces — and I still felt like a failure in everything I touched.
              </p>
              <p style={{ marginBottom: 14 }}>
                Spring 2025 we filed bankruptcy on our business. I'd gained forty pounds, was numbing nightly with wine, and was watching my kids play in the lake from the shore because a knee injury wouldn't let me follow them in.{" "}
                <span className="serif-italic" style={{ color: "var(--walnut)", fontSize: 19 }}>I fell hard one night outside a brewery. My face missed a metal stair by an inch. And I knew — quietly, viscerally — that this was my mother, not me. And I couldn't keep performing my way past it.</span>
              </p>
              <p>What broke me open isn't what I expected. What rebuilt me isn't a program I could have planned. But it is the road I now walk with women like you.</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 28 }}>
              <div className="display" style={{ fontSize: 32, fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--walnut)" }}>— Jessica</div>
              <div style={{ flex: 1, height: 1, background: "var(--rule)" }} />
              <a href="about.html" className="grotesk" style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--terracotta)", borderBottom: "1px solid var(--terracotta)", paddingBottom: 2 }}>
                Read the full story →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * 3 PROGRAMS
 * ============================================================ */
function ProgramCard({ p }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: p.featured ? "var(--walnut)" : "var(--cream-2)",
        color: p.featured ? "var(--cream)" : "var(--walnut)",
        padding: "36px 32px",
        position: "relative",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hover ? "translateY(-6px)" : "none",
        boxShadow: hover ? "0 30px 60px -30px rgba(46,58,41,0.4)" : "none",
        display: "flex", flexDirection: "column", minHeight: 460,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 60 }}>
        <span className="mono" style={{ fontSize: 12, color: "var(--terracotta)" }}>{p.n}</span>
        <span className="smallcaps" style={{ fontSize: 10, background: p.featured ? "var(--terracotta)" : "transparent", color: p.featured ? "var(--cream)" : "var(--terracotta)", border: p.featured ? "none" : "1px solid var(--terracotta)", padding: "5px 10px", borderRadius: 999 }}>
          {p.tag}
        </span>
      </div>
      <div style={{ flex: 1 }}>
        <h3 className="display" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.05, marginBottom: 6, letterSpacing: "-0.025em" }}>{p.name}</h3>
        <div className="serif-italic" style={{ fontSize: 18, color: p.featured ? "var(--cream-3)" : "var(--walnut-soft)", marginBottom: 28 }}>{p.sub}</div>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: p.featured ? "var(--cream-2)" : "var(--walnut-soft)", marginBottom: 24 }}>{p.pitch}</p>
        <div style={{ paddingTop: 18, borderTop: p.featured ? "1px solid rgba(239,241,232,0.15)" : "1px solid var(--rule)", fontSize: 13.5, lineHeight: 1.55, color: p.featured ? "var(--cream-3)" : "var(--walnut-soft)" }}>{p.format}</div>
      </div>
      <a href="work-with-me.html" className="grotesk" style={{ marginTop: 30, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: p.featured ? "var(--cream)" : "var(--walnut)", display: "inline-flex", alignItems: "center", gap: 10 }}>
        <span style={{ borderBottom: `1px solid ${p.featured ? "var(--cream)" : "var(--walnut)"}`, paddingBottom: 2 }}>{p.cta}</span>
        <span className="arrow" style={{ display: "inline-block", transition: "transform 0.3s", transform: hover ? "translateX(6px)" : "none" }}>→</span>
      </a>
    </div>
  );
}

function Programs() {
  const programs = [
    { n: "01", name: "Wild Prairie Identity Journey", sub: "12-Week 1:1 Coaching", tag: "Flagship", format: "2 free fit sessions · 12 weekly 60-min 1:1s · weekly inner-healing homework · faith-based or non-faith path · prayer & devotional (faith-based only)", pitch: "The signature 1:1 mentorship. Twelve weeks of walking the prairie together — naming the lie, holding the little girl, rooting your identity in grace, and learning to live from overflow instead of empty.", cta: "Apply Now", featured: true },
    { n: "02", name: "Wildflower Circle", sub: "Group Cohort", tag: "Small & vetted", format: "Monthly 90-min group calls · private circle for women in motion · shared prayer & devotional rhythms · peer accountability", pitch: "A small circle of women walking the prairie at the same pace. For graduates of the 1:1 and for women who want grounded community without the performance pressure of a Sunday small group.", cta: "Join the Waitlist" },
    { n: "03", name: "Coming Home to You", sub: "Self-Paced Journey", tag: "Always open", format: "4 video modules (Root · Tend · Bloom · Overflow) · workbook · guided inner-healing audio · lifetime access", pitch: "The full Wild Prairie framework at your own pace — for the woman not yet ready for an elder, but who can't keep living the way she has been. The doorway in.", cta: "Enroll Now" },
  ];
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
          <div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Walk With Me</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500, maxWidth: 720 }}>
              Three doorways onto the{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>same prairie.</span>
            </h2>
          </div>
          <a href="work-with-me.html" className="btn btn-ghost">Compare programs <span className="arrow">→</span></a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {programs.map((p, i) => <ProgramCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * THE WILD PRAIRIE FRAMEWORK
 * ============================================================ */
function Framework() {
  const [active, setActive] = useState(0);
  const phases = [
    { verb: "Root", sub: "Name the Lie", body: "We start by tracing what was planted in you. The performance-based love. The mother whose praise you couldn't earn. The patterns you swore you'd never repeat — and the lie underneath all of them. Nothing skipped. Nothing rushed. Just slow, honest naming.", items: ["Family-of-origin mapped honestly", "The lie underneath the behavior named", "Body-level patterns identified", "No shame — just honest soil"] },
    { verb: "Tend", sub: "Hold the Little Girl", body: "The grief work most women spend a lifetime avoiding. What she needed. What she got instead. Inner-child reparenting with the kind of unconditional love no one ever gave her — so she can finally exhale and let you grow up.", items: ["Inner-child reparenting", "Grief held without performance", "Shame separated from story", "Permission to be tender"] },
    { verb: "Bloom", sub: "Rooted in Grace", body: "Identity in Christ replacing identity in production. Holy-Spirit-led memory healing for the faith-based path; somatic and inner work for the non-faith path. The lie that you'd only be loved when you earned it gets evicted — quietly, fully, and for keeps.", items: ["Identity rebuilt from grace", "Holy-Spirit led healing (faith path)", "Somatic & inner work (non-faith path)", "The lie loses its hold"] },
    { verb: "Overflow", sub: "Live From the Fullness", body: "A rooted woman loves differently. Her marriage softens. Her kids feel it before they can name it. Her work no longer requires the mask. The dress looks beautiful — not because of her body, but because of how she carries herself.", items: ["Marriage on solid ground", "Mothering from rest, not performance", "Confidence that isn't a mask", "Light shining out, not in"] },
  ];

  return (
    <section className="section" style={{ background: "var(--walnut)", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: "-4vw", top: "10%", fontSize: "30vw", fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontWeight: 300, color: "rgba(239,241,232,0.04)", lineHeight: 1, pointerEvents: "none" }}>❀</div>

      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start", marginBottom: 56 }}>
          <div className="smallcaps" style={{ color: "var(--terracotta)" }}>✦ The Wild Prairie Identity Journey</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5.6vw, 80px)", lineHeight: 0.98, color: "var(--cream)", fontWeight: 500 }}>
            Your path back to{" "}
            <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>who you've always been.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(239,241,232,0.18)" }}>
          {phases.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ background: "transparent", border: "none", borderTop: active === i ? `3px solid var(--terracotta)` : "3px solid transparent", marginTop: -1, color: active === i ? "var(--cream)" : "rgba(239,241,232,0.55)", textAlign: "left", padding: "24px 8px 20px", cursor: "pointer", borderRight: i < 3 ? "1px solid rgba(239,241,232,0.12)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--terracotta)" }}>0{i + 1}</span>
                <WheatMark size={12} color={active === i ? "var(--terracotta)" : "rgba(239,241,232,0.4)"} />
              </div>
              <div className="display" style={{ fontSize: 30, fontWeight: 500, marginTop: 18, letterSpacing: "-0.02em" }}>{p.verb}</div>
              <div className="serif-italic" style={{ fontSize: 16, opacity: 0.7, marginTop: 2 }}>{p.sub}</div>
            </button>
          ))}
        </div>

        <div style={{ background: "rgba(239,241,232,0.04)", borderLeft: "1px solid rgba(239,241,232,0.12)", borderRight: "1px solid rgba(239,241,232,0.12)", borderBottom: "1px solid rgba(239,241,232,0.12)", padding: "44px clamp(28px, 5vw, 64px)", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "center", minHeight: 280 }}>
          <div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 18 }}>Phase 0{active + 1} of 04</div>
            <p style={{ fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.35, color: "var(--cream)", fontWeight: 300, fontFamily: "'Source Serif 4', serif", fontStyle: "italic", maxWidth: 640 }}>
              {phases[active].body}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, borderLeft: "1px solid rgba(239,241,232,0.18)", paddingLeft: 32 }}>
            <div className="smallcaps" style={{ color: "var(--terracotta)" }}>In this phase</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, color: "rgba(239,241,232,0.85)", fontSize: 15.5 }}>
              {phases[active].items.map((t, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <DiamondMark size={7} color="var(--terracotta)" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * THE QUIET WORDS — enhanced section unique to Jessica
 * (uses her ideal client's exact words, verbatim from intake)
 * ============================================================ */
function QuietWords() {
  const thoughts = [
    "No matter what I do, I'm overlooked.",
    "I don't know what else I can do to make him see the real me.",
    "I'm exhausted from the mask I put on so my kids don't see how depressed I am.",
    "Is there anyone who can relate?",
    "How can God love me in my shame?",
    "I wish there was a way to go back ten years.",
  ];
  return (
    <section className="section" style={{ background: "var(--cream-2)", position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ The words she'll never say out loud</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.6vw, 64px)", color: "var(--walnut)", lineHeight: 1.0, fontWeight: 500 }}>
              You've never said these out loud.{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>I have.</span>
            </h2>
            <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.65, color: "var(--walnut-soft)", maxWidth: 420 }}>
              If any of these is the loop you replay in the quiet moments — you're not broken, and you're not alone. You're a woman whose love was conditional too long. That is exactly the soil the Wild Prairie path tends.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--rule-strong)" }}>
            {thoughts.map((t, i) => (
              <div key={i} style={{ padding: "26px 28px 28px", borderBottom: i < thoughts.length - 1 && i < thoughts.length - 2 ? "1px solid var(--rule)" : "none", borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--terracotta)", marginBottom: 14 }}>0{i + 1} · whispered</div>
                <p className="serif-italic" style={{ fontSize: 19, lineHeight: 1.45, color: "var(--walnut)", fontWeight: 300 }}>"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * TESTIMONIALS — drawn from Jessica's actual non-client transformations
 * and her described ideal-client transformation language
 * ============================================================ */
function Testimonials() {
  const t = [
    { quote: "We grew up the same way — both told, in different words, that we'd only be loved if we earned it. Walking with Jessica has meant being told, for the first time in my life, that I matter no matter what. Even when life gets heavy. Even when I'm the mess. The little boy in me who felt forgotten the day my sisters were born finally has someone telling him he was never the problem.", hi: "She helped me realize I was worth loving — no performance required.", name: "Travis", meta: "Jessica's husband · cycle-breaker" },
    { quote: "Jessica coached me through the mindset rut I'd been stuck in at work. I'd been the woman everyone asks for help and no one promotes. She walked me through it — not with hype, but with grounded, honest questions — and I built a brand that finally shouted my name from the rooftops. When promotion came around, it was obvious.", hi: "She doesn't pump you up. She helps you finally see yourself.", name: "A coworker", meta: "Promotion · rooted confidence" },
    { quote: "After time walking the prairie with her, the color started to come back. My kids noticed before I did. There's laughter in my eyes again. The light I'd been chasing outside myself was already there — just buried under thirty years of performance.", hi: "The light of the world is shining out of my heart again.", name: "A woman walking the path", meta: "Wild Prairie transformation" },
  ];

  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
          <div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 16 }}>✦ Early voices · the path so far</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", color: "var(--walnut)", lineHeight: 0.98, fontWeight: 500, maxWidth: 800 }}>
              Women coming{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>home.</span>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div className="display" style={{ fontSize: 44, color: "var(--walnut)" }}>20+</div>
            <div>
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginTop: 4 }}>Yrs walking this path</div>
              <div className="smallcaps" style={{ color: "var(--walnut-soft)", marginTop: 4 }}>Faith-focused · grounded</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {t.map((q, i) => (
            <figure key={i} style={{ background: "var(--cream-2)", padding: "36px 32px 32px", display: "flex", flexDirection: "column", position: "relative" }}>
              <div aria-hidden style={{ position: "absolute", top: 12, left: 24, fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontWeight: 300, fontSize: 90, color: "var(--terracotta)", opacity: 0.25, lineHeight: 1 }}>"</div>
              <blockquote style={{ fontSize: 17, lineHeight: 1.55, color: "var(--walnut-soft)", marginBottom: 18, fontFamily: "'Source Serif 4', serif", flex: 1, position: "relative", zIndex: 1, marginTop: 14 }}>{q.quote}</blockquote>
              <p className="serif-italic" style={{ fontSize: 19, color: "var(--walnut)", marginBottom: 26, lineHeight: 1.4, fontWeight: 400 }}>{q.hi}</p>
              <figcaption style={{ borderTop: "1px solid var(--rule)", paddingTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <Placeholder label="" style={{ width: 36, height: 36, borderRadius: "50%" }} />
                <div>
                  <div className="grotesk" style={{ fontSize: 14, fontWeight: 500, color: "var(--walnut)" }}>{q.name}</div>
                  <div className="smallcaps" style={{ color: "var(--walnut-soft)", fontSize: 9 }}>{q.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="testimonials.html" className="grotesk" style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--terracotta)", borderBottom: "1px solid var(--terracotta)", paddingBottom: 3 }}>
            Read all stories →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * APP
 * ============================================================ */
function App() {
  return (
    <>
      <Nav current="home" />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <AboutPreview />
        <Programs />
        <Framework />
        <QuietWords />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
