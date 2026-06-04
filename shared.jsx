/* shared.jsx — Nav, Footer, palettes, ornaments, CTA, hooks
 * Jessica Medler · Wild Prairie Coaching
 * Loaded BEFORE each page's own .jsx file.
 */

const { useState, useEffect, useMemo, useRef } = React;

/* External booking widget */
const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/d6d2wxNruqgKR9GrKKnU";

/* ============================================================
 * PALETTES — Sage Studio is default (Jessica's template choice)
 * ============================================================ */
const PALETTES = {
  sageStudio: {
    name: "Sage Studio",
    swatches: ["#EFF1E8", "#2E3A29", "#6B8E5A", "#8FA67D"],
    vars: {
      "--cream": "#EFF1E8", "--cream-2": "#E2E7D6", "--cream-3": "#D2DAC0",
      "--walnut": "#2E3A29", "--walnut-soft": "#46554A",
      "--terracotta": "#6B8E5A", "--terracotta-deep": "#547047",
      "--sage": "#8FA67D", "--sage-soft": "#B0C09D",
      "--ink": "#1F2818",
      "--rule": "rgba(46, 58, 41, 0.18)",
      "--rule-strong": "rgba(46, 58, 41, 0.32)",
    },
  },
  warmDevotional: {
    name: "Warm Devotional",
    swatches: ["#F5EFE6", "#3D2E1F", "#A66B3F", "#7A8B6F"],
    vars: {
      "--cream": "#F5EFE6", "--cream-2": "#EFE7D8", "--cream-3": "#E8DDC8",
      "--walnut": "#3D2E1F", "--walnut-soft": "#5A4838",
      "--terracotta": "#A66B3F", "--terracotta-deep": "#8C552F",
      "--sage": "#7A8B6F", "--sage-soft": "#9DA992",
      "--ink": "#2A1F14",
      "--rule": "rgba(61, 46, 31, 0.18)",
      "--rule-strong": "rgba(61, 46, 31, 0.32)",
    },
  },
  desertBloom: {
    name: "Desert Bloom",
    swatches: ["#F8F4ED", "#2C2825", "#B85C3D", "#D4A574"],
    vars: {
      "--cream": "#F8F4ED", "--cream-2": "#F0E8D8", "--cream-3": "#E5D6BE",
      "--walnut": "#2C2825", "--walnut-soft": "#4A4239",
      "--terracotta": "#B85C3D", "--terracotta-deep": "#9B4A2E",
      "--sage": "#7E8B6E", "--sage-soft": "#A0AB91",
      "--ink": "#1F1B17",
      "--rule": "rgba(44, 40, 37, 0.18)",
      "--rule-strong": "rgba(44, 40, 37, 0.32)",
    },
  },
  oliveAndIvory: {
    name: "Olive & Ivory",
    swatches: ["#EFE8DC", "#3A2E26", "#9B5D3F", "#7B7A4F"],
    vars: {
      "--cream": "#EFE8DC", "--cream-2": "#E5DCC8", "--cream-3": "#D8CCB2",
      "--walnut": "#3A2E26", "--walnut-soft": "#564539",
      "--terracotta": "#9B5D3F", "--terracotta-deep": "#80482D",
      "--sage": "#7B7A4F", "--sage-soft": "#9C9B72",
      "--ink": "#221B14",
      "--rule": "rgba(58, 46, 38, 0.20)",
      "--rule-strong": "rgba(58, 46, 38, 0.34)",
    },
  },
  morningChapel: {
    name: "Morning Chapel",
    swatches: ["#FAF6F0", "#1F1A14", "#C19A6B", "#6B5B47"],
    vars: {
      "--cream": "#FAF6F0", "--cream-2": "#F2EBDD", "--cream-3": "#E8DDC4",
      "--walnut": "#1F1A14", "--walnut-soft": "#3A322A",
      "--terracotta": "#C19A6B", "--terracotta-deep": "#A37E51",
      "--sage": "#6B5B47", "--sage-soft": "#8C7A66",
      "--ink": "#1A1510",
      "--rule": "rgba(31, 26, 20, 0.16)",
      "--rule-strong": "rgba(31, 26, 20, 0.30)",
    },
  },
  slate: {
    name: "Slate",
    swatches: ["#EEF1F5", "#1F2937", "#5B7A95", "#6B7F94"],
    vars: {
      "--cream": "#EEF1F5", "--cream-2": "#E2E7ED", "--cream-3": "#D2DAE3",
      "--walnut": "#1F2937", "--walnut-soft": "#475569",
      "--terracotta": "#5B7A95", "--terracotta-deep": "#46637D",
      "--sage": "#6B7F94", "--sage-soft": "#94A4B7",
      "--ink": "#0F172A",
      "--rule": "rgba(31, 41, 55, 0.18)",
      "--rule-strong": "rgba(31, 41, 55, 0.32)",
    },
  },
  slateMidnight: {
    name: "Slate Midnight",
    swatches: ["#E8ECF1", "#0F172A", "#475A75", "#5C6F87"],
    vars: {
      "--cream": "#E8ECF1", "--cream-2": "#DCE2EA", "--cream-3": "#C8D1DD",
      "--walnut": "#0F172A", "--walnut-soft": "#334155",
      "--terracotta": "#475A75", "--terracotta-deep": "#34465E",
      "--sage": "#5C6F87", "--sage-soft": "#8694A7",
      "--ink": "#070C16",
      "--rule": "rgba(15, 23, 42, 0.18)",
      "--rule-strong": "rgba(15, 23, 42, 0.32)",
    },
  },
};

function applyPalette(key) {
  const pal = PALETTES[key] || PALETTES.sageStudio;
  const root = document.documentElement;
  Object.entries(pal.vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

/* ============================================================
 * Ornaments — wildflower / wheat / circle marks (prairie language)
 * ============================================================ */
function WheatMark({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
      <rect x="6.4" y="0.5" width="1.2" height="13" fill={color} />
      <path d="M7 4 Q3.5 4 3 6.5" fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M7 4 Q10.5 4 11 6.5" fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M7 6.5 Q3.8 6.5 3.3 9" fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M7 6.5 Q10.2 6.5 10.7 9" fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M7 9 Q4.1 9 3.6 11.2" fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M7 9 Q9.9 9 10.4 11.2" fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
function BloomMark({ size = 12, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true">
      <circle cx="6" cy="3" r="1.6" fill={color} />
      <circle cx="2.8" cy="6" r="1.6" fill={color} />
      <circle cx="9.2" cy="6" r="1.6" fill={color} />
      <circle cx="4.4" cy="9" r="1.6" fill={color} />
      <circle cx="7.6" cy="9" r="1.6" fill={color} />
      <circle cx="6" cy="6" r="1.2" fill="var(--cream)" />
    </svg>
  );
}
function DiamondMark({ size = 10, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden="true">
      <rect x="2" y="2" width="6" height="6" transform="rotate(45 5 5)" fill={color} />
    </svg>
  );
}
function CircleMark({ size = 10, color = "currentColor", filled = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden="true">
      <circle cx="5" cy="5" r="4" fill={filled ? color : "none"} stroke={color} strokeWidth="1" />
    </svg>
  );
}

/* ============================================================
 * Nav
 * ============================================================ */
function Nav({ current = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [mobileOpen]);

  const links = [
    { label: "About", href: "about.html", key: "about" },
    { label: "Walk With Me", href: "work-with-me.html", key: "work" },
    { label: "Stories", href: "testimonials.html", key: "stories" },
    { label: "FAQ", href: "faq.html", key: "faq" },
    { label: "Contact", href: "contact.html", key: "contact" },
  ];

  const Logo = () => (
    <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span
        aria-hidden
        style={{
          width: 44, height: 44, borderRadius: "50%",
          background: "var(--terracotta)", color: "var(--cream)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <BloomMark size={22} color="var(--cream)" />
      </span>
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span className="display" style={{ fontSize: 19, fontWeight: 600, color: "var(--walnut)" }}>
          Jessica Medler
        </span>
        <span className="smallcaps" style={{ color: "var(--terracotta)", fontSize: 9 }}>
          wild prairie coaching
        </span>
      </span>
    </a>
  );

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "var(--cream)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "20px clamp(28px, 6vw, 96px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <Logo />

        <div className="nav-desktop-links grotesk" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map((l) => {
            const active = l.key === current;
            return (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 14,
                  color: active ? "var(--terracotta)" : "var(--walnut-soft)",
                  fontWeight: active ? 500 : 400,
                  position: "relative",
                  paddingBottom: 2,
                  borderBottom: active ? "1px solid var(--terracotta)" : "1px solid transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--terracotta)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = active ? "var(--terracotta)" : "var(--walnut-soft)")
                }
              >
                {l.label}
              </a>
            );
          })}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "12px 20px", fontSize: 13 }}>
            Book a Call <span className="arrow">→</span>
          </a>
        </div>

        <button
          type="button"
          className="nav-hamburger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
            <rect x="0" y="0"  width="20" height="1.6" fill="currentColor" />
            <rect x="0" y="6.2" width="20" height="1.6" fill="currentColor" />
            <rect x="0" y="12.4" width="20" height="1.6" fill="currentColor" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-drawer" role="dialog" aria-modal="true">
          <div className="nav-mobile-head">
            <Logo />
            <button
              type="button"
              className="nav-hamburger"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              style={{ display: "inline-flex" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <rect x="-1" y="8.2" width="20" height="1.6" fill="currentColor" transform="rotate(45 9 9)" />
                <rect x="-1" y="8.2" width="20" height="1.6" fill="currentColor" transform="rotate(-45 9 9)" />
              </svg>
            </button>
          </div>

          <div className="nav-mobile-links">
            {links.map((l) => {
              const active = l.key === current;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={active ? "active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                  <span style={{ color: "var(--terracotta)", fontSize: 14 }}>→</span>
                </a>
              );
            })}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call <span className="arrow">→</span>
          </a>
        </div>
      )}
    </nav>
  );
}

/* ============================================================
 * Universal CTA block (used at bottom of every page)
 * ============================================================ */
function CTA({
  headline = "You don't have to",
  headlineItalic = "walk this alone.",
  eyebrow = "✦ Your next step · two free sessions to see if we fit",
  checklist,
}) {
  const defaultList = [
    "Where the lie of performance-based love is still writing the rules you live by",
    "What inner-healing work actually opens — and why behavior change alone has stopped working",
    "What walking the Wild Prairie Identity Journey looks like for the season you're in",
    "Whether the faith-based or non-faith path is the right starting place for you",
  ];
  const list = checklist || defaultList;

  return (
    <section
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(28px, 6vw, 96px)",
        background: "var(--terracotta)",
        color: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="smallcaps" style={{ color: "var(--cream)", opacity: 0.85, marginBottom: 20 }}>
              {eyebrow}
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(48px, 6.4vw, 96px)",
                lineHeight: 0.95,
                color: "var(--cream)",
                fontWeight: 500,
                marginBottom: 32,
              }}
            >
              {headline}{" "}
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300 }}>
                {headlineItalic}
              </span>
            </h2>

            <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 460, marginBottom: 36, color: "rgba(239,241,232,0.9)" }}>
              Start with two free sessions — no pressure, no pitch. We'll talk about the season you're in, the lies you've been carrying, and whether the Wild Prairie path is the right place for the next twelve weeks of your life.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "var(--cream)", color: "var(--walnut)" }}>
                Book Two Free Sessions <span className="arrow">→</span>
              </a>
              <a
                href="contact.html"
                className="btn"
                style={{ background: "transparent", color: "var(--cream)", border: "1px solid rgba(239,241,232,0.5)" }}
              >
                Send a message
              </a>
            </div>
          </div>

          <div>
            <div style={{ background: "var(--cream)", color: "var(--walnut)", padding: "36px 36px 32px" }}>
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 18 }}>
                On the call we'll explore
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
                {list.map((c, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span className="mono" style={{ fontSize: 11, color: "var(--terracotta)", marginTop: 6, minWidth: 22 }}>
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: 16, lineHeight: 1.45, color: "var(--walnut)" }}>{c}</span>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 22,
                  borderTop: "1px solid var(--rule)",
                  fontStyle: "italic",
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: 15,
                  color: "var(--walnut-soft)",
                  lineHeight: 1.5,
                }}
              >
                "I won't push you. I won't perform for you. I'll walk beside you — asking questions that let you finally hear yourself, and holding the space until you do."
              </div>
            </div>

            <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 14, color: "rgba(239,241,232,0.85)" }}>
              <BloomMark size={12} color="var(--cream)" />
              <span className="serif-italic" style={{ fontSize: 16 }}>
                Psalm 139:14 — "I praise you, for I am fearfully and wonderfully made."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Footer
 * ============================================================ */
function Footer() {
  return (
    <footer
      style={{
        background: "var(--walnut)",
        color: "var(--cream)",
        padding: "clamp(60px, 7vw, 96px) clamp(28px, 6vw, 96px) 36px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(239,241,232,0.15)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <span
                aria-hidden
                style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "var(--terracotta)", color: "var(--cream)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <BloomMark size={28} color="var(--cream)" />
              </span>
              <div className="display" style={{ fontSize: 24, fontWeight: 600 }}>
                Jessica Medler
              </div>
            </div>
            <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 22 }}>
              Wild Prairie Coaching · rooted, grounded, loved
            </div>
            <p className="serif-italic" style={{ fontSize: 18, lineHeight: 1.45, color: "rgba(239,241,232,0.75)", maxWidth: 380 }}>
              A grounded, faith-focused mentorship for women tired of earning love and ready to come home to who they were made to be. Two free sessions, then twelve weeks of walking together.
            </p>
          </div>

          {[
            { title: "Walk With Me", links: [["Home", "index.html"], ["About Jessica", "about.html"], ["Programs", "work-with-me.html"], ["Stories", "testimonials.html"], ["FAQ", "faq.html"], ["Contact", "contact.html"], ["Book a Call", BOOKING_URL]] },
            { title: "Wild Prairie", links: [["The 12-Week Path", "work-with-me.html"], ["Wildflower Circle", "work-with-me.html"], ["Self-Paced Journey", "work-with-me.html"], ["Instagram", "https://www.instagram.com/wildprairiecoaching"]] },
            { title: "Legal", links: [["Privacy Policy", "legal.html"], ["Terms of Service", "legal.html"], ["Coaching Disclaimer", "legal.html"], ["Refund Policy", "legal.html"]] },
          ].map((col) => (
            <div key={col.title}>
              <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 20 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(([label, href]) => {
                  const external = /^https?:\/\//.test(href);
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        style={{ fontSize: 15, color: "rgba(239,241,232,0.85)" }}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 30,
            color: "rgba(239,241,232,0.55)",
            fontSize: 13,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>© 2026 Jessica Medler · Wild Prairie Coaching. All rights reserved.</div>
          <div className="serif-italic" style={{ fontSize: 14 }}>
            Romans 8:1 — "There is therefore now no condemnation to them which are in Christ Jesus."
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="legal.html" style={{ color: "rgba(239,241,232,0.55)" }}>Privacy</a>
            <a href="legal.html" style={{ color: "rgba(239,241,232,0.55)" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
 * Page-level palette tweaks panel
 * ============================================================ */
const SHARED_TWEAK_DEFAULTS = { palette: "sageStudio" };

function PaletteTweaksPanel() {
  const [tweaks, setTweak] = useTweaks(SHARED_TWEAK_DEFAULTS);
  useEffect(() => { applyPalette(tweaks.palette); }, [tweaks.palette]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Palette">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {Object.entries(PALETTES).map(([key, p]) => (
            <button
              key={key}
              onClick={() => setTweak("palette", key)}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "10px 12px",
                background: tweaks.palette === key ? "rgba(0,0,0,0.05)" : "transparent",
                border: tweaks.palette === key ? "1px solid rgba(0,0,0,0.25)" : "1px solid rgba(0,0,0,0.1)",
                borderRadius: 6, cursor: "pointer", textAlign: "left",
                fontFamily: "inherit", color: "inherit",
              }}
            >
              <div style={{ display: "flex", borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
                {p.swatches.map((c, i) => (
                  <div key={i} style={{ width: 16, height: 24, background: c }} />
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
              {tweaks.palette === key && (
                <div style={{ marginLeft: "auto", fontSize: 11, opacity: 0.6 }}>active</div>
              )}
            </button>
          ))}
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}

/* ============================================================
 * Stripe placeholder (used when photos aren't provided)
 * ============================================================ */
function Placeholder({ label = "image", style = {}, src, alt, objectPosition, ...rest }) {
  if (src) {
    const { aspectRatio, width, height, borderRadius, position, inset, top, left, right, bottom, marginTop, ...frameRest } = style || {};
    const frameStyle = {
      position: position || (inset !== undefined || top !== undefined ? "absolute" : "relative"),
      inset, top, left, right, bottom,
      width: width ?? (inset !== undefined ? undefined : "100%"),
      height,
      aspectRatio,
      borderRadius,
      marginTop,
      overflow: "hidden",
      background: "var(--cream-2)",
      ...frameRest,
    };
    return (
      <div style={frameStyle} {...rest}>
        <img
          src={src}
          alt={alt || label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: objectPosition || "center",
            display: "block",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="stripe-placeholder"
      data-label={label}
      style={style}
      {...rest}
    />
  );
}

/* ============================================================
 * Inner page hero — reusable
 * ============================================================ */
function PageHero({ eyebrow, title, italic, subtitle, verse, verseRef }) {
  return (
    <section
      style={{
        padding: "clamp(60px, 7vw, 110px) clamp(28px, 6vw, 96px) clamp(60px, 7vw, 100px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48, color: "var(--walnut-soft)" }}>
          <CircleMark size={6} color="var(--terracotta)" />
          <span className="smallcaps">{eyebrow}</span>
          <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <h1
            className="display"
            style={{
              fontSize: "clamp(54px, 7.6vw, 116px)",
              color: "var(--walnut)",
              lineHeight: 0.96,
              fontWeight: 500,
              margin: 0,
            }}
          >
            {title}{" "}
            {italic && (
              <span style={{ fontStyle: "italic", fontFamily: "'Source Serif 4', serif", fontWeight: 300, color: "var(--terracotta)" }}>
                {italic}
              </span>
            )}
          </h1>

          <div>
            {subtitle && (
              <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--walnut-soft)", marginBottom: 24, maxWidth: 420 }}>
                {subtitle}
              </p>
            )}
            {verse && (
              <div style={{ borderLeft: "1px solid var(--terracotta)", paddingLeft: 18, maxWidth: 420 }}>
                <div className="smallcaps" style={{ color: "var(--terracotta)", marginBottom: 8 }}>
                  {verseRef}
                </div>
                <p className="serif-italic" style={{ fontSize: 17, color: "var(--walnut)", lineHeight: 1.45 }}>
                  "{verse}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Export to window so per-page Babel scripts can use these.
Object.assign(window, {
  PALETTES, applyPalette,
  WheatMark, BloomMark, DiamondMark, CircleMark,
  Nav, Footer, CTA, PaletteTweaksPanel, Placeholder, PageHero,
  SHARED_TWEAK_DEFAULTS, BOOKING_URL,
});
