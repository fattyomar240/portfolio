# Project Overview

## What this project is

This repository contains a responsive, multi-page personal portfolio website. It presents an introduction, background and skills, services, example projects, and contact options. The interface is a client-side React application; the repository does not include a server or database.

## Technologies used

- **React 18** builds the interface from reusable components.
- **TypeScript 5** adds static typing to the application. The TypeScript configuration enables strict checks and checks the `src` directory.
- **Vite 5** runs the local development server and bundles the application for production. The React plugin supports the React/TSX code.
- **React Router DOM** provides browser-based navigation between the portfolio pages.
- **Tailwind CSS 3** supplies utility classes for layout, responsive styling, colors, and animation. **PostCSS** and **Autoprefixer** process the CSS.
- **Lucide React** supplies the interface icons.
- **Radix UI Slot**, **Class Variance Authority (CVA)**, **clsx**, and **tailwind-merge** support composable UI components and conditional class names.
- **Inter** is loaded from Google Fonts in the HTML entry point.

The About page also lists technologies and tools such as Next.js, Node.js, Python, Figma, Docker, and Supabase as portfolio skills. Their appearance in that page does not mean they are dependencies or services used by this application.

## How the application is built

1. `index.html` provides the page metadata, font links, and the `root` element where the app is mounted.
2. `src/main.tsx` imports the global stylesheet and mounts the React app inside `StrictMode`.
3. `src/App.tsx` sets up `BrowserRouter`, the shared navigation and footer, scroll behavior, and the page routes.
4. Vite and TypeScript process the TSX application. The `build` script runs the TypeScript project build first, then creates the production bundle with Vite.
5. Tailwind scans the HTML and source files for utility classes. Its theme is extended with the portfolio's dark colors, emerald accent, Inter font, and custom animations.

## Pages and routes

| Route | Page | Main content |
| --- | --- | --- |
| `/` | Home | Introduction, highlights, service previews, featured projects, and contact calls to action |
| `/about` | About | Bio, quick facts, skills and tools, and a journey timeline |
| `/services` | Services | Service descriptions, features, and a four-step working process |
| `/projects` | Projects | Project cards with filters for all projects, web apps, and design |
| `/contact` | Contact | Contact details, social links, and a WhatsApp message form |
| Any unmatched route | Not Found | A 404 page with a link back to the home page |

## Source layout

```text
src/
  App.tsx                  Routes and shared page layout
  main.tsx                 React entry point
  index.css                Tailwind directives, theme variables, and global styles
  components/
    Navbar.tsx             Responsive navigation
    Footer.tsx             Footer, social links, and back-to-top button
    ScrollToTop.tsx        Scroll reset and reveal-on-scroll behavior on route changes
    ui/                    Reusable Button, Card, and Badge components
  lib/
    utils.ts               Conditional and merged Tailwind class helper
  pages/
    Home.tsx
    About.tsx
    Services.tsx
    Projects.tsx
    Contact.tsx
    NotFound.tsx
```

The `@` import alias points to `src`, so imports such as `@/components/ui/button` resolve from the source directory.

## Styling and interaction

The visual design uses a dark background, emerald accents, responsive Tailwind layouts, and CSS custom properties for shared theme values. Global CSS adds scrolling behavior, gradients, grid and dot backgrounds, a page-entry animation, and reveal-on-scroll styles. The reveal effect is activated by an `IntersectionObserver` in `ScrollToTop` whenever the route changes.

The navigation adapts to smaller screens with a toggleable mobile menu. Project cards and page content are rendered from arrays defined in their page files, making their displayed entries straightforward to update in place.

## Run and build

Use a current Node.js installation and npm from the project directory:

```bash
npm install
npm run dev
```

Vite prints a local development URL in the terminal. To check the TypeScript build and create production assets:

```bash
npm run build
```

To serve the generated production build locally:

```bash
npm run preview
```

The available npm scripts are `dev`, `build`, and `preview`; there is no test script defined in `package.json`.

## Contact Form — WhatsApp Integration

The contact form in `src/pages/Contact.tsx` uses **WhatsApp** to deliver messages directly to the portfolio owner. No backend, API key, or third-party account is required.

### How it works

1. The visitor fills in their **Name**, **Email**, **Subject** (optional), and **Message**.
2. On submit, the form builds a formatted WhatsApp message using the visitor's input.
3. It opens `https://wa.me/220835871877` (the owner's Gambia +220 number) with the message pre-filled.
4. The visitor clicks **Send** inside WhatsApp — the message arrives in the owner's WhatsApp inbox instantly.

### WhatsApp message format

```
📬 *New Portfolio Message*

👤 *Name:* John Doe
📧 *Email:* john@example.com
📌 *Subject:* Project Inquiry

💬 *Message:*
Hi, I'd love to work with you...
```

### Key constants in Contact.tsx

| Constant | Value | Purpose |
|---|---|---|
| `CONTACT_EMAIL` | `fattyomar240@gmail.com` | Shown in the info card and email social link |
| `WHATSAPP_NUMBER` | `220835871877` | Owner's WhatsApp (Gambia +220 835871877) |

### Form UX behaviour

- While the form is being processed the WhatsApp tab opens and the form resets automatically.
- After submit, an in-page **"WhatsApp Opened! 🎉"** success state replaces the form.
- The visitor can click **"Send another message"** to return to the form.
- A honeypot `botcheck` field is included to reduce automated spam.

## Changes made — session log (2026-10-30)

| # | What changed | File |
|---|---|---|
| 1 | Diagnosed bugs in original FormSubmit form (`onSubmit` hidden-field mutation ran too late; `_replyto` always empty) | `Contact.tsx` |
| 2 | Identified that FormSubmit.co server was down (Cloudflare error 521) | — |
| 3 | Replaced FormSubmit with **Web3Forms** fetch-based submission (intermediate step) | `Contact.tsx` |
| 4 | Replaced Web3Forms with **WhatsApp deep-link** submission — no API key needed | `Contact.tsx` |
| 5 | Added loading spinner, success screen, and error banner states | `Contact.tsx` |
| 6 | Simplified to WhatsApp-only: removed async fetch, error state, and unused imports | `Contact.tsx` |
| 7 | Updated `PROJECT_OVERVIEW.md` to document all changes | `PROJECT_OVERVIEW.md` |

## Current content and integration notes

- The portfolio contains editable sample details such as location, social URLs, biography text, and project entries. Review these values before publishing.
- **Contact form**: uses WhatsApp deep-link — no backend required. Messages go to `+220835871877`.
- The social links for GitHub and LinkedIn in `Contact.tsx` still use placeholder values (`@yourusername`, `https://github.com`, `https://linkedin.com`). Update these with real profile URLs before publishing.
- The location field still shows `"Your City, Country"` — update it in the `INFO_ITEMS` array in `Contact.tsx`.
- The example project demo and code links currently use generic destinations such as `example.com` and `github.com`.
- The portrait and project images are loaded from external Pexels URLs, and the font is loaded from Google Fonts, so those assets require an internet connection.
- No backend API, persistent data store, authentication, or deployment configuration is defined in the reviewed source files.
