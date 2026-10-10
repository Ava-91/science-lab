# AI implementation brief — Science Lab

You are the lead frontend engineer and product designer. Continue and improve the existing Science Lab repository into a complete, polished, responsive educational website. The repository already contains a substantial Next.js app, routes, components, styles, and lesson data. Do not blindly replace it with a new scaffold or overwrite working features. Inspect the current code first, preserve useful work, fix defects, and implement missing requirements.

## 1. Product

Create **آزمایشگاه علوم** (Science Lab), a Persian-language learning platform for Iranian eighth-grade students. The first release covers these two chapters of the official Grade 8 experimental science textbook:

1. **فصل ۱: مخلوط و جداسازی مواد**
2. **فصل ۲: تغییرهای شیمیایی در خدمت زندگی**

The project should be structured so more chapters can be added later without rebuilding the architecture.

Audience: students around 13–14 years old. The experience should feel clear, trustworthy, encouraging, modern, and academically credible—not childish, not corporate-dashboard-like, and not an AI-generated neon-gradient template.

## 2. Mandatory first task: inspect the supplied textbook PDF and verify the content

The project owner says they have a PDF containing the full textbook content for chapters 1 and 2, handwritten notes, and typed questions. **If that PDF is attached to this coding session, inspect that exact file first.** Do not ask the owner to repeat information already present in the attachment.

Identify the edition/year from the cover or publication details. Treat the PDF's printed textbook content as the primary reference for the lesson structure. Treat handwritten notes and typed questions as supplementary owner-provided study material: distinguish them from official textbook content, check their accuracy, and do not automatically assume every handwritten answer is correct.

If no PDF is attached or accessible in the coding environment, clearly say that you cannot see it and ask the owner to upload it. Do not claim to have inspected a missing file. Continue useful UI and engineering work while content verification waits.

Official portal for edition/source cross-checking: https://chap.sch.ir/. Use it to verify the textbook edition where possible. Do not assume the target edition is ۱۴۰۵–۱۴۰۶ unless the supplied PDF or official source confirms it. Never invent a direct PDF URL or claim that a third-party copy is official.

Inspect the PDF pages relevant to both chapters, including headings, diagrams, experiments, activities, tables, handwritten notes, typed questions, and printed page numbers. Create or update `src/content/source-notes.md` with the actual edition, source, verified page ranges, and any remaining uncertainty. Keep textbook page references in lesson data where practical.

Compare the current `src/content/lessons.ts` against the PDF. Correct omissions, inaccuracies, invented details, question answer keys, and chapter/section structure. Use clear, original, student-friendly Persian explanations rather than copying long passages. Do not reproduce whole pages or long sections of textbook prose, and do not wholesale copy textbook illustrations. Prefer original CSS/SVG diagrams and newly written examples. Clearly label any enrichment material that is not in the book. Build quizzes from verified content and the supplied questions only after checking them.

## 3. Technology and implementation

- Use the current stable Next.js App Router, TypeScript, and Tailwind CSS already suitable for this repository.
- Use Server Components by default; add Client Components only where interactivity needs them.
- Keep dependencies small and justify any additional library.
- No database, accounts, sign-in, backend, API keys, or paid services in v1.
- Store simple preferences/progress locally when useful, with safe browser-only access and sensible behavior if localStorage is unavailable.
- Make the project deployable on Vercel.
- Use semantic HTML, reusable components, typed lesson/quiz data, and clear separation between content and presentation.
- Use a consistent icon set (e.g. lucide-react if added) rather than emoji as the primary interface icons.
- Do not use placeholder links, dead buttons, fake search, or nonfunctional controls. Every visible control must work or be explicitly labelled as not yet available.

## 4. Absolutely mandatory Persian RTL

This is a **Persian-first RTL application**, not an LTR application with right-aligned text.

Set document language and direction globally (`lang="fa"`, `dir="rtl"`). Use logical CSS properties such as `margin-inline`, `padding-inline`, `inset-inline-start`, and `border-inline-start` instead of assuming left/right. Ensure the following all work naturally in RTL:

- Header, page grids, cards, breadcrumbs, side content, buttons, icons, labels, inputs, progress bars, quizzes, dialogs, and pagination.
- Reading order and keyboard focus order.
- Numerals and mixed Persian/Latin strings (for example chemical formulas, English scientific terms, and units). Isolate Latin snippets with `dir="ltr"` or `<bdi>` where appropriate so punctuation does not jump around.
- Use **Vazirmatn as the primary UI font** throughout the application, with a robust Persian-friendly fallback stack. Prefer Next.js font optimization or a reliable self-hosted setup, and ensure the font is included in production builds rather than relying on a fragile external CSS import.
- Correct Persian typography, line height, text wrapping, and spacing.
- No accidental horizontal overflow at 320px width.

Choose a readable Persian font with a reliable fallback stack. If a remote font is used, include fallbacks and avoid making the page unusable when the font fails to load. Do not force every number into Persian digits when that makes formulas, measurements, or code harder to read.

## 5. Navigation — NO MOBILE HAMBURGER MENU

This requirement is strict:

**On mobile, do not create a hamburger icon, collapsed header menu, slide-out drawer, or hidden navigation panel.**

Instead, create a **fixed bottom navigation bar** visible at the bottom of the viewport on mobile. It should have clear icon + short Persian label items, such as:
- خانه
- فصل‌ها
- تمرین
- پیشرفت

Use a safe-area-aware bottom offset/padding (e.g. `env(safe-area-inset-bottom)`), a visible active state, accessible labels, and enough spacing for comfortable tapping. Ensure content cannot be obscured by the bar: add appropriate bottom padding to the page. It must remain usable on small phones and not cover quiz buttons, dialogs, or form fields when the on-screen keyboard appears. Keep the number of destinations limited; do not cram in too many icons.

On desktop/tablet, use a conventional visible navigation/header appropriate to the wider layout. Do not show the mobile bottom bar at desktop sizes unless a deliberate responsive breakpoint requires it. A desktop navigation can never be used as an excuse to add a mobile hamburger.

Navigation must link to real pages or meaningful sections. For destinations that are not implemented yet, either omit them from primary navigation or create a useful, honest page.

## 6. Visual design

Design direction: **light academic textbook**, with warm off-white page background, white/surface cards, deep ink text, restrained navy/blue accents, fine borders, and generous whitespace. Use a limited palette and excellent contrast. Avoid:
- Pastel pink palettes, excessive neon, purple/blue AI gradients, glassmorphism everywhere, huge blurred blobs, excessive shadows, and overdecorated cards.
- Tiny body text, overly wide text columns, dense walls of text, or low-contrast muted text.
- Emoji-heavy interface and generic template aesthetics.

Create a recognizable science identity with subtle line illustrations, simple experiment diagrams, chapter-number motifs, and thoughtful micro-interactions. Keep animations restrained and respect `prefers-reduced-motion`. The site should still look good if all animations are disabled.

## 7. Pages and features

Implement a complete first version with these routes or equivalent well-structured pages:

### Home
- Clear Persian title and a concise explanation of the site.
- Two chapter cards showing chapter number, title, short accurate description, and progress/availability.
- Continue-learning entry point when local progress exists.
- Quick links to study, practice, and chapter selection.
- A simple, calm science-themed visual rather than a stock-photo hero.

### Chapter pages
Each chapter page should include:
- A chapter overview and learning goals.
- A readable table of contents or section list.
- Short sections with clear headings, explanations, and examples grounded in the official PDF.
- Original diagrams/illustrations where they aid understanding.
- Key-term glossary.
- A short recap / “نکته‌های مهم”.
- A few meaningful knowledge checks between sections.
- A source page reference or reference range for the relevant textbook material, where verified.

### Practice
- Functional multiple-choice quizzes based on the verified chapter content.
- Clear selection states, answer feedback, and brief explanations.
- Score summary and retry action.
- Mix questions across chapters or let the learner choose a chapter.
- Do not show the correct answer before the learner answers.
- Ensure keyboard operation and accessible announcements for feedback.

### Progress
- A useful progress view based on locally stored completed sections and quiz results.
- Explain that progress is saved on this device/browser only.
- Provide a working reset action with confirmation.
- Do not pretend progress syncs across devices.

### Search and usability
- If you add search, it must actually search chapter titles, sections, and glossary terms. Otherwise, do not show a fake search box.
- Provide clear empty states, loading/error states if needed, and a not-found page.
- Include a visible “بازگشت به فصل‌ها” or equivalent route where appropriate.
- Use breadcrumbs on desktop or chapter pages where useful, without cluttering mobile screens.

## 8. Educational quality and content

- Use clear, natural Persian suitable for an eighth grader. Avoid stiff machine-translated phrasing.
- Teach, don't just summarize: define concepts, show a relatable example, explain common misconceptions, and then check understanding.
- Use short paragraphs, lists, comparison tables, and diagrams where helpful.
- Build quiz questions only from content actually verified in the textbook or clearly labelled extension material.
- Include explanatory feedback for both correct and incorrect answers.
- Avoid unsupported claims, fabricated textbook page numbers, invented experiments, and ambiguous answer keys.
- Do not simply paste the entire textbook into the app.
- Do not use copyrighted textbook images as decoration. Prefer original explanatory graphics.
- If content needs verification, mark it honestly in source notes rather than presenting guesses as official.

## 9. Accessibility and responsive behavior

- Test at widths of 320px, 375px, 768px, 1024px, and desktop.
- Keyboard navigation, visible focus, semantic landmarks, labels, sufficient contrast, and reduced motion.
- Buttons/tap targets should be comfortably sized (roughly 44px minimum where practical).
- Never rely on color alone to indicate correctness or progress.
- Fixed bottom mobile navigation must not hide content and must respect safe areas.
- Avoid layout shifts, unnecessary animations, and horizontal scrolling.
- Use appropriate heading hierarchy and descriptive link text.

## 10. Engineering quality

- Inspect the existing repository before changing files. It already contains the homepage, chapter routes, practice and progress pages, navigation, lesson data, and substantial CSS. Preserve useful existing files and configuration; improve and complete the current implementation instead of rebuilding blindly.
- Implement the whole project, not just a plan. Do not stop after creating the homepage.
- Keep lesson data separate from components, and define reusable types for chapters, sections, glossary entries, and quiz questions.
- Use stable, meaningful filenames and avoid one enormous component.
- Add a useful README with setup instructions, project structure, source policy, and deployment steps.
- Add a source note identifying the exact textbook edition/PDF URL and the pages checked, if verified.
- Run the available lint, type-check, and production build commands. Fix errors instead of claiming they passed when not run.
- Check that every navigation link and button works.
- Ensure no secrets, tokens, or local machine paths are committed.

## 11. Completion checklist

Before finishing, report:
1. What pages and features were implemented.
2. Which official PDF edition was located and inspected, its exact source URL, and which page ranges support each chapter—only if verified.
3. Any content that remains unverified.
4. Commands actually run and their real results.
5. Any remaining limitations.

Start by inspecting the current repository and checking whether the owner's PDF is attached and readable. Verify the lessons against that file before presenting them as textbook-accurate. Implement and test the missing work, use Vazirmatn, and preserve the no-hamburger mobile bottom-navigation requirement. Do not ask for approval between ordinary implementation steps; make sensible decisions consistent with this brief.