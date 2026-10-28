# Caltech Pre-Med & MedLife website

Original, responsive, single-page website with Home, About, Events, Pre-Med Resources, Team, and Join sections. Plain HTML/CSS/JS; no dependencies, build step, backend, or Apache rewrites. All assets are local. Works by opening index.html directly, including without JavaScript (navigation remains visible).

## Edit in VS Code

1. Choose File → Open Folder and select this `medlife-site` folder.
2. Edit `index.html` for content, `styles.css` for appearance, and `script.js` for the mobile menu and event carousel.
3. Open `index.html` in your browser. Optionally use VS Code's Live Server extension to refresh automatically while editing.

## Before public launch

The design and general introductory copy are drafts for club approval. Search for `[` and `PLACEHOLDER`, `DRAFT`, `SAMPLE`, `TBD`, `proposed`, and `COMING SOON` in index.html. Replace:

- Approved mission, eligibility, MEDLIFE relationship, and program descriptions.
- Event highlight descriptions and approved event photos. Planned activities are labeled separately; confirm them before presenting them as completed events.
- Resource descriptions and verified official links, with review dates.
- Officer names, roles, academic year, bios, and portraits.
- Group photo, caption, credit, and descriptive alt text. Use only images you have permission to publish.
- Membership form, mailing list, and contact email. Pending destinations are intentionally text, not broken links. Replace each `pending-link` div with an anchor containing the actual HTTPS URL (or mailto address).
- Draft notices after all content is confirmed.

Replace a portrait placeholder with an `<img>` and use `width:100%;height:100%;object-fit:cover` for its styling. Add a concise alt description or use empty alt when the adjacent officer name already supplies the same information.

The botanical illustration and favicon were authored for this site; no reference code, logos, photographs, or other assets were copied. Reference inspection covered the repository listing/README and public site content. Individual GitHub source-file fetches were unavailable.

## Preview

Open index.html directly, or from this folder run `python3 -m http.server 8765` and visit http://localhost:8765. No information is collected and no join destination is connected yet.

## Upload to Caltech with SFTP

Based on IMSS guidance reviewed October 27, 2026:
https://www.imss.caltech.edu/services/web-hosting-development/web-hosting/managing-your-dynamic-web-site

1. Connect on campus or use Caltech VPN with **Tunnel All**.
2. In your SFTP client, connect to **portal.caltech.edu**, protocol **SFTP**, port **22**, using your own authorized Caltech account. Verify the server fingerprint through a trusted Caltech source if prompted. Do not put credentials in website files.
3. Confirm the exact club document-root path from the hosting setup message or IMSS. The general documented pattern is `/srv/www.SITE.caltech.edu/www/docroot/`; do not assume this is the club's literal path. Ask IMSS for the docroot for `medlife.clubs.caltech.edu` if unclear.
4. Download a backup of existing files before replacing anything. Upload `index.html`, `styles.css`, `script.js`, and the `assets/` folder into the confirmed docroot, preserving their relative layout. Do not upload the ZIP, README, or preview screenshot. Uploading to docroot publishes the files.
5. Use **0664 for files** and **2775 for directories**, preserving the group that owns docroot so other club maintainers can edit. Some clients cannot set the setgid bit; ask IMSS if needed.
6. Visit https://medlife.clubs.caltech.edu, hard-refresh, and check mobile layout, menu, section links, expanded panels, images, and all real join/resource links. If an older index.php or server setting takes precedence, ask IMSS before changing it.

No server login, credential access, upload, or deployment was performed.

## Design reference

https://github.com/jsz-05/hack.caltech.edu
https://hack.caltech.edu

Inspiration: a scrolling club/event experience, strong section hierarchy, event discovery, expandable information, and prominent participation links. This implementation uses an independent layout, palette, typography, illustration, and code.

## Event showcase

Events is an evergreen gallery rather than a calendar. Four past highlights have photo placeholders; the separate Looking ahead area labels proposed activities. The gallery supports touch/trackpad scrolling, keyboard arrows when focused, and JavaScript previous/next buttons. It does not autoplay and remains scrollable without JavaScript.

To add a photo, put the approved image in `assets/` and replace the contents of its `.event-photo` div with an `<img src="assets/your-photo.jpg" alt="Describe the activity shown" width="1600" height="1000" loading="lazy">`. Add any required photo credit beside it. Keep photos free of private participant information and use images approved for publication.

Content sources reviewed: user-confirmed event highlights; `25-26 Event Timeline_Plans.pdf` (planning document, not proof every listed event occurred); `Medlife Intro Meeting 26-27.pptx` (plans remain subject to confirmation). Dates and costs are intentionally omitted to avoid an ongoing calendar maintenance requirement.

## Blog

Two expandable articles were adapted from the supplied `Website Content.pdf`: the MCAT Resource Roadmap and CHLA Preceptorship Shadowing Experience. No author names or publication dates were supplied. Personal study recommendations are labeled as student perspectives; program timelines describe the reported experience, not guaranteed future availability. The source’s mixed C/P and B/B subject lists were consolidated rather than reproduced as official exam specifications.
