# Project Brief — Science Lab

## One-line idea

A Persian, right-to-left digital science notebook that helps Iranian eighth-grade students review lessons, learn key vocabulary, practice questions, and track their progress.

## Project description

Science Lab is a responsive educational web application built around two chapters of the Iranian Grade 8 Science curriculum:

- Chapter 1: «مخلوط و جداسازی مواد» (Mixtures and Separation of Materials)
- Chapter 2: «تغییرهای شیمیایی در خدمت زندگی» (Chemical Changes in Everyday Life)

Instead of presenting lesson content as a long static page, the app organizes it into readable sections, highlights important terms, provides short comprehension checks and multiple-choice practice, includes a glossary, and saves progress locally in the browser.

## Intended audience

- Primary: Grade 8 students studying in Persian
- Secondary: Teachers or families who want a simple digital revision aid

## Learning goals

Students should be able to:
- explain the difference between pure substances and mixtures;
- recognize homogeneous and heterogeneous mixtures;
- choose a separation method based on physical properties;
- distinguish physical changes from chemical changes;
- identify possible signs of a chemical reaction and understand everyday examples.

These are intended learning goals for the current implementation, not a claim that every textbook activity or learning objective has already been covered.

## Main user journey

1. Open the home page and choose a chapter.
2. Read a lesson section and review highlighted terms.
3. Answer a quick check or use the practice page.
4. Review the glossary when a term is unfamiliar.
5. Check the progress dashboard.

## Product principles

- Persian-first content and RTL layout
- Clear, calm, notebook-inspired visual design
- Small, focused learning sections instead of dense text
- Usable on desktop and mobile
- No account required for the current local-progress feature
- Textbook-aligned content, with accuracy claims made only after a documented source audit

## Current implementation

- Next.js App Router, React, and TypeScript
- Typed lesson data in src/content/lessons.ts
- Reusable desktop and mobile navigation
- Chapter pages, practice quiz, glossary, and progress page
- Browser-local progress storage

## Out of scope for this version

- Full coverage of all 15 Grade 8 science chapters
- User accounts, server-side storage, and cross-device sync
- Teacher administration tools
- Claims of full textbook alignment before the content audit is complete

## Suggested future improvements

1. Complete and document the page-by-page textbook audit.
2. Run lint, TypeScript, and production build checks.
3. Add accessible status announcements and keyboard testing to all interactive quiz states.
4. Test the deployed app on common mobile and desktop screen sizes.
5. Add more chapters only after the same source-verification process is applied.

## Source policy

The designated reference is the project's 20-page scan named OLOUM.pdf. It is not currently included in this repository. Do not claim the current content is fully verified against that source until the audit in TEXTBOOK_CONTENT_AUDIT.md is completed.
