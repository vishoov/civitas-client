# Civitas Client — Checkpoint List

Where the project stands: the UI shell is built (landing page, login/signup, report detail,
admin verification queue, navbar, footer) with all data hardcoded and no backend.
Everything renders. This list is what stands between "renders" and "runs smoothly"
**at the current scope** — no new features.

---

## 1. Blockers — visibly broken

- [ ] **Dead nav link.** Footer "Dashboard" points to `/admin`, but the route is `/admin/reports`
      → clicking it renders a blank page. `src/component/Footer.jsx:78` vs `src/App.jsx:26`.
- [ ] **No catch-all route.** Any unknown URL shows navbar + footer over empty space.
      Add `<Route path="*" element={<NotFound/>} />` in `src/App.jsx`.
- [ ] **`npm run lint` fails.** `react-refresh/only-export-components` at
      `src/Auth/AuthContext.jsx:16` — `useAuth` is exported from the same file as a component.
      Move the hook to its own file, or disable the rule for that line.
- [ ] **Admin dashboard overflows horizontally.** `src/component/adminDashboard.jsx:132` uses
      `w-270 h-150` — that's a fixed 67.5rem × 37.5rem box (confirmed in `dist/assets/*.css`:
      `.w-270{width:calc(var(--spacing) * 270)}`). Outer `p-20` compounds it.
      Swap for `w-full max-w-6xl` + `min-h-*` and responsive padding.

## 2. Rough edges — works, but feels unfinished

- [ ] **No scroll restoration.** Route changes keep the previous scroll position; React Router v7
      does not reset it, and `scroll-behavior: smooth` (`src/index.css:65`) makes the drift obvious.
      Add a `ScrollToTop` effect on `pathname`.
- [ ] **"Forgot password?" goes to `/signup`.** `src/Components/login.jsx:126`.
- [ ] **Placeholder footer links navigate home.** "Help centre", "Contact us", "FAQs" and all three
      legal links are `<Link to="/">` — they silently bounce the user to the landing page.
      Make them inert or point them somewhere real.
- [ ] **Page title still says `civitas-client`.** `index.html:7`.
- [ ] **Report page.** `src/component/reportPage.jsx` — `<img>` has no `alt` (line 66), and the card is
      `mt-40` + fixed `w-100`, so it's off-centre and not responsive.
- [ ] **Status vocabulary disagrees across screens.** Home shows "In progress / Acknowledged / Resolved";
      admin shows "pending / verified / resolved / rejected". `docs/Frontend.md` §1 rule 4 calls for a
      single `<StatusBadge/>` as the only place a status maps to a label or colour.

## 3. Structural debt — pay before the codebase grows

- [ ] **Two component folders, different casing.** `src/component/` (navbar, Footer, reportPage,
      adminDashboard) and `src/Components/` (login, SignUp, AuthLayout, Protected).
      Works on macOS because the filesystem is case-insensitive; breaks on Linux CI. Merge into one.
- [ ] **Icons duplicated four times.** `iconBase`, `focusRing`, `PinIcon`, `ArrowIcon`, `CheckIcon`
      are re-declared in `pages/Home.jsx`, `component/navbar.jsx`, `component/Footer.jsx` and
      `Components/AuthLayout.jsx` — the last already exports its copies. Extract one shared module.
- [ ] **Dead files.** `src/App.css` (empty, never imported); unused `src/assets/react.svg`,
      `vite.svg`, `hero.png`.
- [ ] **`StrictMode` is commented out.** `src/main.jsx:1` — re-enable to surface effect bugs early.
- [ ] **No `api/` layer.** Every screen holds its own hardcoded array. `docs/Frontend.md` §2 prescribes
      `api/` + `hooks/` with no `fetch()` outside that folder — worth scaffolding before the backend lands.

## 4. Known and accepted — not to-dos

- **Auth is a deliberate stub.** `src/Auth/AuthContext.jsx` hardcodes `value = false`, `AuthProtected`
  is a provider rather than a guard, and `src/Components/Protected.jsx` is never imported — so no route
  is actually protected and the login/signup forms only simulate success with a `setTimeout`.
  Intentional at this stage; left alone.
