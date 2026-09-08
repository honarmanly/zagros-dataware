# Content Calendar Production

Operationalizes the 90-Day Content Calendar from `../Content Marketing and
Strategy/` (untracked locally — see `.gitignore`) into actual, ready-to-post
copy, in the site's established voice (no emoji, restrained tone — see
`../content-guidelines.md`).

## Files

- **`month-1-tracker.csv`** — every Month 1 (September 2026) content slot:
  date, day, week, content type, audience tier, WhatsApp tag, topic, target
  channels, status, and a link to the produced copy once it exists. Open in
  Excel, Numbers, or Google Sheets. This is the thing to check before asking
  "what's next" — update the `Status` column as pieces move from Not
  started → Drafted → Published, and fill in `Planned/Published URL` once a
  canonical article goes live.
- **`YYYY-MM-DD-<slug>.md`** — one file per content day, holding every
  channel's copy for that day (LinkedIn / Facebook / Telegram / WhatsApp
  Channel, and a canonical article draft on Thursdays). Referenced from the
  tracker's `Content File` column.

## Workflow

1. Check `month-1-tracker.csv` for the next `Not started` row.
2. Pull that day's raw content from the source `.docx` package (if it
   exists there) or write it fresh, adapted to house voice.
3. Save it as a dated file in this folder.
4. Update the tracker row: `Status` → `Drafted`, fill in `Content File`.
5. Once actually posted / published, update `Status` → `Published` and add
   the real URL.

## Known gaps as of the last update

- **Week 1 Thursday** (the flagship canonical article) has a rough draft at
  `../drafts/week-1-your-next-customer.md` — no frontmatter yet, and a few
  leftover `[cite: ...]` artifacts from the source document. Needs the same
  cleanup pass `beyond-rpa.md` got before it can go on the blog.
- The 90-Day Calendar and the Production Content Package disagree on Week
  1 Wednesday's framework shape (calendar says "4-Layer Discoverability
  Audit Checklist," the actual written copy in the Production Content
  Package uses a 5-point version). Went with the Production Content
  Package's version since it's the one that's actually finished — worth
  flagging if that's not the right call.
