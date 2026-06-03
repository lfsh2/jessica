/* FAQ - Jessica Medler · Wild Prairie Coaching */
const { useState } = React;

const FAQS = [
  { cat: "About Coaching", q: "Is this another women's program?",
    a: "No — and that matters. Most programs hand you a curriculum and call it transformation. Wild Prairie is walking — slow, honest, and grounded. You are not coming into a system. You are coming under a woman who has lived this work and will hold the space until you can hear yourself again." },
  { cat: "About Coaching", q: "How is this different from therapy?",
    a: "Therapists treat symptoms with clinical tools. I'm not your therapist and I won't pretend to be. What I do is sit beside you, ask the questions no one's asking, and walk you through the inner-healing and identity work that most behavioral coaching never touches. Many women keep their therapist alongside this work — that's encouraged." },
  { cat: "About Coaching", q: "I've read every book on identity and inner work. Why would this be different?",
    a: "Because reading is not the same as being seen. The reason the books haven't landed isn't that you didn't understand them — it's that there hasn't been someone walking the path with you, asking honest questions, and refusing to let you stay in the well-worn path of your old patterns. Wild Prairie is the walking. The books were the map." },
  { cat: "About Coaching", q: "Do I have to be a Christian for this to work?",
    a: "No. I offer both a faith-based and a non-faith path so no woman ever feels pushed in a direction she's not ready for. The faith-based path includes prayer and devotional woven through. The non-faith path holds the same inner-healing work without any faith imagery. Same depth. Same softness. Just held in the language that fits you." },
  { cat: "Getting Started", q: "What do the two free fit sessions look like?",
    a: "Two free 60-minute sessions before any commitment. We talk. I ask questions. You feel out whether I'm the right voice for you. I tell you honestly whether I believe the Wild Prairie path is the right fit. If it isn't, I tell you clearly and point you somewhere it might be. No pressure. No pitch." },
  { cat: "Getting Started", q: "I'm not sure my family knows how depressed I actually am. Is that okay?",
    a: "Yes. The work begins inside the room before anything has to change outside of it. We will work through disclosure together — gently, on your timing. The goal is never a confession that blows up your home. The goal is a rooted woman who can hold the conversation when she's ready for it. We build her first." },
  { cat: "Results & Outcomes", q: "How long until I notice real change?",
    a: "Most women report a felt shift in the first four to six sessions — something loosens, sleep changes, the tightness around an old loop starts to soften. The full twelve weeks is what produces integrated, durable change that survives real life. I won't sell you a quick fix. I will tell you that this is real work and what gets resolved doesn't have to be re-managed." },
  { cat: "Results & Outcomes", q: "What if I slip back into old patterns while we're working?",
    a: "A slip is information — never a verdict. If you regress while we're walking together, we bring it into the next session and we use it. What did it reveal? What was your body trying to tell you? What lie was still in charge? I will never shame you for a slip. Almost every woman I've walked with sees the frequency and weight of old patterns soften long before she would have used the word 'healed.'" },
  { cat: "Programs & Pricing", q: "Is the inner-healing work safe for someone who is new to faith?",
    a: "Yes — and that question deserves a direct answer. The faith-based inner-healing work I do is gentle, prayer-led, and held in plain language. I will never assume you know your way around Scripture. I'll meet you where you are. If you want it, prayer and devotional are woven through. If you don't, the non-faith path holds the same inner work without any of that." },
  { cat: "Programs & Pricing", q: "Why offer two free sessions before committing?",
    a: "Because this is a relationship — not a transaction. Twelve weeks of weekly walking is a real commitment of your time, your honesty, and your money. I would never want you to commit to that without first knowing whether my voice fits your soul. The two free fit sessions are how we both find out — honestly, and without pressure." },
];

const CATS = ["All Questions", "About Coaching", "Programs & Pricing", "Getting Started", "Results & Outcomes"];

function App() {
  const [cat, setCat] = useState("All Questions");
  const [open, setOpen] = useState(0);
  const filtered = cat === "All Questions" ? FAQS : FAQS.filter((f) => f.cat === cat);

  return (
    <>
      <Nav current="faq" />
      <main>
        <PageHero
          eyebrow="Questions"
          title="Real questions."
          italic="Honest answers."
          subtitle="No spin. No softening. Just direct responses from a woman who has been exactly where you are and is still walking this prairie. I've heard every version of these questions — and the quiet ones underneath them. If yours isn't here, write me directly and I'll answer personally."
          verse="Ask, and it shall be given you; seek, and ye shall find."
          verseRef="Matthew 7:7"
        />
        <section className="section" style={{ background: "var(--cream)", paddingTop: 20 }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48, paddingBottom: 24, borderBottom: "1px solid var(--rule)" }}>
              {CATS.map((c) => (
                <button key={c} onClick={() => { setCat(c); setOpen(0); }}
                  style={{ background: cat === c ? "var(--walnut)" : "transparent", color: cat === c ? "var(--cream)" : "var(--walnut-soft)", border: cat === c ? "1px solid var(--walnut)" : "1px solid var(--rule-strong)", padding: "10px 18px", borderRadius: 999, fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, letterSpacing: "0.04em", cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>
            <ol style={{ listStyle: "none" }}>
              {filtered.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={i} style={{ borderBottom: "1px solid var(--rule)" }}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", padding: "32px 0", background: "transparent", border: "none", textAlign: "left", cursor: "pointer", display: "grid", gridTemplateColumns: "60px 1fr 32px", gap: 24, alignItems: "start" }}>
                      <div className="mono" style={{ fontSize: 12, color: "var(--terracotta)", paddingTop: 4 }}>{String(i + 1).padStart(2, "0")}</div>
                      <div>
                        <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 8, fontSize: 9 }}>{f.cat}</div>
                        <h3 className="display" style={{ fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 500, color: "var(--walnut)", lineHeight: 1.25 }}>{f.q}</h3>
                      </div>
                      <div style={{ paddingTop: 8, color: "var(--terracotta)", fontSize: 22, transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "none" }}>+</div>
                    </button>
                    {isOpen && (
                      <div style={{ paddingLeft: 84, paddingRight: 60, paddingBottom: 36, maxWidth: 920 }}>
                        <p className="serif-italic" style={{ fontSize: 19, lineHeight: 1.6, color: "var(--walnut-soft)", fontWeight: 400 }}>
                          {f.a}
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
        <CTA
          eyebrow="✦ Still have questions?"
          headline="Let's talk it through"
          headlineItalic="together."
        />
      </main>
      <Footer />
      <PaletteTweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
