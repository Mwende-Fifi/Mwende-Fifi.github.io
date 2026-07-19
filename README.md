# Faith Mwende — Portfolio Site

A single-page portfolio built as plain HTML/CSS/JS, designed to host on GitHub Pages for free.

## Files
- `index.html` — page structure and content
- `style.css` — visual design (ledger / anomaly-flagging theme, tied to your fraud analytics work)
- `script.js` — animates the transaction feed in the hero section

## Deploy to GitHub Pages (free, ~10 minutes)

1. **Create the repo.** On GitHub, create a new repository named exactly `Mwende-Fifi.github.io` (must match your GitHub username exactly — this is what makes it your default site URL instead of a project subpage).
2. **Upload the files.** Add `index.html`, `style.css`, and `script.js` to the repo root (drag-and-drop works fine via the GitHub web UI, or `git push` if you're comfortable with the CLI).
3. **Turn on Pages.** Go to Settings → Pages → under "Build and deployment," set Source to "Deploy from a branch," branch `main`, folder `/ (root)`. Save.
4. **Wait ~1–2 minutes**, then visit `https://mwende-fifi.github.io`. That's your live site.
5. **Optional custom domain:** if you later buy a domain, add it under Settings → Pages → Custom domain — GitHub Pages supports this for free (you just pay the domain registrar).

## Before you send this to anyone

Your reference doc flagged this and it still applies: re-pin the credit risk, Airbnb EDA, sales dashboard, and HealthPoint repos on your GitHub profile before sending applications, so the profile itself matches what the portfolio links to.

## Editing content later

- Project cards, bio text, and stats all live directly in `index.html` — search for the relevant heading (e.g. `Credit Risk Classification`) and edit the surrounding text.
- The `case-status` labels (SCORED, PATTERN FOUND, LIVE, SHIPPED) are meant to describe each project's actual state — update them if a project's status changes (e.g. once something is deployed live, e.g. via Streamlit).
- To add a 5th project, copy one `<article class="case-card">...</article>` block and edit its contents — the grid layout adjusts automatically.
