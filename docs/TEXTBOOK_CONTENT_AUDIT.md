# Textbook Content Audit — Science Lab

## Status

**Not yet complete — do not describe the current lessons as fully verified against the textbook.**

The repository's existing source notes state that a 20-page scan named OLOUM.pdf is the designated source of truth, covering printed pages 1–8 for Chapter 1 and pages 9–20 for Chapter 2. However, the scan was not available for direct inspection during this documentation update, and the existing notes explicitly say a complete page-by-page comparison remains outstanding.

This report is a review plan and status record, not a certification of textbook accuracy.

## Source to use

- Reference file: OLOUM.pdf (the exact scan designated by the project owner)
- Chapter 1: printed pages 1–8, «مخلوط و جداسازی مواد»
- Chapter 2: printed pages 9–20, «تغییرهای شیمیایی در خدمت زندگی»
- Official textbook portal for publication metadata: https://chap.sch.ir/

The source scan reportedly includes printed content plus colored handwritten annotations. Printed content and handwritten additions must be distinguished; handwritten answers must not automatically be treated as correct.

## Audit procedure

For each printed page in the source:

- [ ] Record its printed page number and chapter/section.
- [ ] List every learning objective, key concept, definition, example, experiment, activity, table, figure, and question.
- [ ] Map each item to its implementation in src/content/lessons.ts or the relevant page/component.
- [ ] Mark each item as covered, partially covered, missing, or intentionally excluded (with a reason).
- [ ] Rewrite in original student-friendly language rather than copying long passages.
- [ ] Check every quiz answer and explanation independently against the source and scientific reasoning.
- [ ] Review handwritten notes separately from printed textbook content.
- [ ] Check terminology, chapter order, examples, and any page references.
- [ ] Record unresolved ambiguities instead of presenting uncertain answers as definite.
- [ ] Have a second reviewer check ambiguous or high-impact items when possible.

## Current code areas to audit

- src/content/lessons.ts: lesson sections, examples, quick checks, glossary, quizzes, answers, explanations, and chapter goals
- src/app/chapters/[slug]/page.tsx: rendering and highlighting of lesson content
- src/app/practice/page.tsx: quiz behavior, scoring, and feedback
- src/content/source-notes.md: source assumptions and editorial policy

## Coverage inventory (initial code inspection only)

This inventory describes topics currently present in the lesson data. It does **not** prove complete alignment with the textbook.

### Chapter 1 — Mixtures and separation

- Pure substances and mixtures
- Homogeneous and heterogeneous mixtures
- Physical separation methods, including filtration, evaporation/crystallization, separating funnel, and distillation
- Solutions, solvent and solute
- Examples and multiple-choice questions

### Chapter 2 — Chemical changes in everyday life

- Physical versus chemical changes
- Possible signs of chemical reactions
- Combustion and the conditions needed for fire
- Useful and harmful chemical changes, including cooking and rusting
- Examples and multiple-choice questions

Compare this inventory against every source page before deciding whether coverage is complete. Do not infer that a topic is absent from the textbook merely because it is absent from this inventory.

## Completion criteria

Change the status to **Complete — reviewed against the designated source** only when all of the following are true:

1. The exact OLOUM.pdf reference has been available and reviewed visually.
2. Every printed page in both chapter ranges has a coverage record.
3. All source activities, figures, experiments, tables, and questions have been accounted for.
4. Quiz answer keys and explanations have been checked.
5. Differences, omissions, and intentional additions are documented.
6. Any unresolved issue is clearly listed and not falsely presented as verified.
7. A final review date and reviewer are recorded.

## Final audit record

- Status: **Pending**
- Source file inspected during this documentation update: **No**
- Page-by-page comparison completed: **No**
- Quiz answer key independently verified against the source: **Not yet confirmed**
- Reviewer: Not recorded
- Review date: Not recorded
- Known limitation: The designated source scan is not currently available in the working context.

## How to finish the audit

Make the exact reference scan available to the reviewer, complete the page-by-page procedure above, fix content gaps in src/content/lessons.ts, rerun the technical checks, and then update this report with the actual findings. Do not upload the textbook scan to a public repository unless permission to redistribute it is confirmed.
