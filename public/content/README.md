# Insights & Resources — content (temporary, pre-CMS)

Everything in this folder is auto-discovered and shown on the **Insights** page
(`/insights`). Add a link or drop a PDF here, **redeploy**, and it appears — with
its title, description and cover image pulled in automatically.

> This is a stop-gap until the admin dashboard (CMS) is built. The CMS will store
> content in Supabase and this folder goes away.

## 1. Add links — edit the `resources` file

Plain text. Write a section header, then one URL per line. The header decides the
card type:

```
articles:
https://yourname.substack.com/p/your-post
https://medium.com/@you/your-article-123abc

youtube:
https://youtu.be/VIDEO_ID
https://www.youtube.com/watch?v=VIDEO_ID
```

Supported headers: `articles`, `youtube` / `videos`, `guides`, `checklists`,
`whitepapers`. For each link we automatically fetch the **title, description and
cover image** (YouTube thumbnails included). If a site blocks that, the card
still shows with a sensible title and a branded cover.

## 2. Add PDFs — just drop the file in

Drop any `.pdf` into `public/content/` (or `public/content/files/`). It becomes a
downloadable card. The **title** comes from the filename, and the **type** and
**category** are guessed from it:

- filename contains `checklist` → Checklist, `whitepaper` → Whitepaper, else Guide
- filename mentions tax/GST/ITR → *Tax & Compliance*; invest/wealth/fund →
  *Investment & Wealth*

So `2025_2026-Tax-Checklist.pdf` becomes a **Checklist** in **Tax & Compliance**
titled "2025 2026 Tax Checklist". Rename the file to change the title.

## 3. (Optional) `insights.json` — structured entries

This is the shape the future CMS form will export. Leave it as `[]` unless you
want to hand-add a fully-specified entry (title, description, url, image, type,
category, meta, date). Anything here is merged in alongside the links and PDFs.

## Folders

```
public/content/
├── resources        ← add links here
├── *.pdf            ← drop PDFs here (or in files/)
├── files/           ← (alternative place for PDFs)
├── covers/          ← optional cover images for insights.json entries
└── insights.json    ← optional structured entries (future CMS format)
```
