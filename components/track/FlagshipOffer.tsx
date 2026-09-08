import type { Track } from "@/lib/tracks";
import { site } from "@/lib/site";
import Reveal from "../motion/Reveal";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5 6.5 12 13 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FlagshipOffer({ track }: { track: Track }) {
  const offer = track.flagshipOffer;

  return (
    <section className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div
            className="rounded-2xl border-2 bg-white p-8 sm:p-12"
            style={{ borderColor: `color-mix(in srgb, ${track.accent} 30%, transparent)` }}
          >
            <span
              className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              style={{
                backgroundColor: `color-mix(in srgb, ${track.accent} 14%, transparent)`,
                color: track.accentDark,
              }}
            >
              Flagship Offer
            </span>

            <h2 className="mt-4 text-balance text-3xl font-bold text-primary sm:text-4xl">
              {offer.hook}
            </h2>
            <p className="mt-3 text-lg font-semibold" style={{ color: track.accentDark }}>
              {offer.name}
            </p>
            <p className="mt-4 max-w-2xl text-secondary">{offer.promise}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  What we look at
                </h3>
                <ul className="mt-4 space-y-3">
                  {offer.scope.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-secondary">
                      <CheckIcon color={track.accentDark} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  What you get
                </h3>
                <ul className="mt-4 space-y-3">
                  {offer.deliverables.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-secondary">
                      <CheckIcon color={track.accentDark} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-black/5 pt-8">
              <p className="text-secondary">{offer.ctaLine}</p>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(offer.name)}`}
                className="mt-5 inline-block rounded-md px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: track.accent }}
              >
                {offer.ctaLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
