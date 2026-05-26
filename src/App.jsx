import BackgroundOrbs from "./components/BackgroundOrbs";
import Profile from "./components/Profile";
import LinkItem from "./components/LinkItem";
import InfoCard from "./components/InfoCard";
import ContactCTA from "./components/ContactCTA";
import { links } from "./data/links";
import { infoCards } from "./data/infoCards";

const FADE_IN = (delay) => ({
  opacity: 0,
  transform: "translateY(14px)",
  animation: `rise 0.7s cubic-bezier(0.2,0,0,1) ${delay} forwards`,
});

export default function App() {
  return (
    <div className="grain relative min-h-screen">
      <BackgroundOrbs />

      <main className="relative z-10 max-w-[680px] mx-auto px-6 pt-[60px] pb-20">

        {/* Header strip */}
        <div
          className="flex items-center justify-between mb-14 pb-5"
          style={{
            borderBottom: "0.5px solid rgba(245,240,232,0.15)",
            ...FADE_IN("0.05s"),
          }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            Anshuman's — links
          </span>
          <span
            className="font-mono text-[10px] tracking-[0.1em]"
            style={{ color: "rgba(245,240,232,0.25)" }}
          >
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Profile (avatar + name + bio + tags) */}
        <Profile />

        {/* Section label */}
        <div
          className="flex items-center gap-3 mb-5"
          style={FADE_IN("0.25s")}
        >
          <span
            className="font-mono text-[9px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Socials &amp; presence
          </span>
          <div
            className="flex-1 h-[0.5px]"
            style={{ background: "rgba(245,240,232,0.1)" }}
          />
        </div>

        {/* Links list */}
        <div className="flex flex-col gap-[2px] mb-12">
          {links.map((link, i) => (
            <LinkItem key={link.name} link={link} index={i} />
          ))}
        </div>

        {/* Info cards */}
        <div
          className="grid grid-cols-2 gap-3 mb-12"
          style={FADE_IN("0.4s")}
        >
          {infoCards.map((card) => (
            <InfoCard key={card.label} card={card} />
          ))}
        </div>

        {/* Contact CTA */}
        <ContactCTA />

        {/* Footer */}
        <footer
          className="text-center pt-7"
          style={{
            borderTop: "0.5px solid rgba(245,240,232,0.08)",
            ...FADE_IN("0.5s"),
          }}
        >
          <p
            className="font-mono text-[9px] tracking-[0.15em] uppercase"
            style={{ color: "rgba(245,240,232,0.18)" }}
          >
            Anshuman Kharbade — Creator — {new Date().getFullYear()}
          </p>
        </footer>

      </main>
    </div>
  );
}
