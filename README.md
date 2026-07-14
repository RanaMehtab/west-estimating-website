# West Estimating — Next.js Website

Construction cost estimating, quantity takeoff, and drafting services website for
**West Estimating** (westestimating.com). Built with Next.js 15 (App Router),
plain CSS (no build-step CSS framework), and a working contact form that emails
submissions via SMTP.

- Email: sales@westestimating.com
- Phone: (737) 770-7167
- Address: 5900 Balcones Dr Ste 4186, Austin, TX 78731

---

## 1. Run it locally

```bash
npm install
cp .env.example .env      # then fill in your real SMTP password
npm run dev
```

Visit http://localhost:3000.

Without SMTP configured, the contact form still "succeeds" (so you can test the
UI), but no email is actually sent — submissions are only logged to the
terminal. Fill in `.env` to send real emails locally.

## 2. Set up the contact-form mailbox

The contact form sends email via SMTP using `nodemailer`
(`app/api/contact/route.js`). You need a real mailbox to send from.

**If sales@westestimating.com is (or will be) a Hostinger email hosting mailbox:**

1. In hPanel → Emails, create the mailbox `sales@westestimating.com` if it
   doesn't already exist, and set its password.
2. Your SMTP settings will be:
   - Host: `smtp.hostinger.com`
   - Port: `465` (SSL) — or `587` if you prefer STARTTLS
   - Username: `sales@westestimating.com`
   - Password: the mailbox password you set

Put those in `.env` (local) or your hosting panel's environment variables
(production) — see `.env.example` for the exact variable names.

## 3. Deploy to Hostinger (Node.js hosting)

Hostinger's **Node.js** hosting (available on Business/Cloud/VPS hosting
plans) runs a real Node.js server, so this app deploys as a standard Next.js
app — no adapters needed.

**Steps (hPanel → Advanced → Node.js):**

1. Create a new Node.js application, pointing its application root at this
   project folder.
2. Set the Node.js version to **18.18 or newer** (20.x recommended).
3. Set the **startup file** to `node_modules/next/dist/bin/next` is not
   needed — instead set the app's **entry point/start command** to:
   ```
   npm run start
   ```
   (Hostinger runs `npm install` then your start command automatically. Make
   sure `npm run build` runs first — either add it as a build step in the
   panel, or run it once over SSH before starting the app.)
4. In the Node.js app's **Environment Variables** section, add:
   - `SMTP_HOST=smtp.hostinger.com`
   - `SMTP_PORT=465`
   - `SMTP_USER=sales@westestimating.com`
   - `SMTP_PASS=<the mailbox password>`
   - `CONTACT_TO=sales@westestimating.com`
5. Point your domain (westestimating.com) at the Node.js application in
   hPanel → Domains, then restart the app.

**Or, over SSH (if you prefer the terminal):**

```bash
cd ~/domains/westestimating.com/public_html   # or wherever hPanel put the app
npm install
npm run build
npm run start                                  # or use pm2 to keep it alive:
# pm2 start npm --name west-estimating -- start
```

If Hostinger's panel doesn't expose a "build command" field for your plan,
run `npm run build` once yourself over SSH after every deploy, then just have
the panel run `npm run start`.

## 4. What's included

- `app/` — every page (Home, About, Services, Service detail, Contact,
  Privacy, Terms) plus API routes (`/api/contact`, `/api/services`,
  `/api/health`), `sitemap.xml`, and `robots.txt`.
- `components/` — all UI components, plain CSS-in-JS (no Tailwind), no
  external UI library.
- `lib/services.js` — the 14 services and full CSI trade list, editable in
  one place. Every service card and detail page renders from this file.
- `lib/photos.js` — every stock photo used sitewide, sourced from Unsplash
  (free license, no attribution required). Swap any `src` here to replace an
  image everywhere it's used.
- `app/api/contact/route.js` — validates and emails contact form submissions
  via SMTP (see section 2 above). `GET /api/contact` is a diagnostic-only
  endpoint — visit it directly in a browser on the live site to check
  whether SMTP env vars are set and whether the server can authenticate
  with your mail provider, without sending a real email.
- `lib/blog.js` + `components/blog/*` + `app/blog/` — blog index and post
  pages. Add a post by adding an entry to `lib/blog.js`, a matching content
  component in `components/blog/`, and registering it in
  `lib/blogContent.js`.
- `next.config.mjs` — `redirects()` 301s old WordPress URLs (still indexed
  in Google from before the Next.js migration, e.g. `/faqs/`,
  `/roofing-estimating-services/`) to their closest match on the new site.
  Add more entries here as you find other old indexed URLs still ranking
  (Google Search Console → Pages report shows the full list).

## 5. Editing content

- **Services / trades:** `lib/services.js`
- **Blog posts:** `lib/blog.js` and `components/blog/`
- **Contact info, hours, address:** `components/TopBar.jsx`,
  `components/Footer.jsx`, `components/ContactView.jsx`, and the structured
  data block in `app/layout.jsx`
- **Homepage photo gallery:** `components/PhotoShowcase.jsx`
- **Legal pages:** `app/privacy/page.jsx`, `app/terms/page.jsx`

## 6. Production checklist

- [ ] Real SMTP credentials set in the hosting panel's environment variables
- [ ] Domain pointed at the Node.js app in hPanel
- [ ] `npm run build` succeeds with no errors
- [ ] Test the contact form on the live domain and confirm the email arrives
      at sales@westestimating.com — or visit `/api/contact` directly to
      check SMTP connectivity without submitting the form
- [ ] Submit `https://westestimating.com/sitemap.xml` to Google Search
      Console and use URL Inspection → Request Indexing on the homepage
- [ ] In Google Search Console → Pages, check for any other old WordPress
      URLs still indexed and add a matching redirect for each in
      `next.config.mjs`
