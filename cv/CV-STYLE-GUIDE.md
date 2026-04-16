# CV Style Guide

This document defines every formatting rule for `Andrea-Tosato-CV.md`. Follow these rules exactly when adding or editing entries.

---

## 1. Build Pipeline

- **Source:** `cv/Andrea-Tosato-CV.md` (Pandoc Markdown with raw LaTeX)
- **Style file:** `cv/cvstyle.sty` (custom LaTeX commands)
- **Build command:** run from the `cv/` directory:
  ```
  pandoc Andrea-Tosato-CV.md -o ../public/Andrea-Tosato-CV.pdf --pdf-engine=xelatex
  ```
  Or from the project root: `npm run cv`
- **Engine:** XeLaTeX (required for Garamond font loading via fontspec)
- **Output:** `public/Andrea-Tosato-CV.pdf`

---

## 2. Font

- **Garamond** is the sole typeface, used in regular, bold, and italic weights.
- Body text is 11pt.
- Section headings are 13pt bold.
- The name block is 16pt bold.
- Small caps lowercase portions render at 9pt (see Section 5).

---

## 3. Custom LaTeX Commands

These commands are defined in the YAML header or `cvstyle.sty`:

| Command | Purpose | Example |
|---|---|---|
| `\cvsection{TITLE}` | Section heading with horizontal rule underneath | `\cvsection{ACADEMIC POSITIONS}` |
| `\cventry` | Vertical space before a new entry within a section | Place before each institution, award, talk, etc. |
| `\cvpub` | Vertical space before a new publication entry | Place before each article or essay |
| `\begin{cvindent}...\end{cvindent}` | Indented block (0.5in left margin); wrapped lines stay aligned | Used for roles/courses under institutions and degrees under universities |
| `\jnl{...}` | Wrapper for journal/book names in small caps | `\jnl{Y\s{ale} L.J.}` |
| `\s{...}` | Renders lowercase text as uppercase at reduced size (small caps) | `\s{ale}` renders as small-cap ALE |

---

## 4. Section Structure

Each major section uses `\cvsection{TITLE}`. The first entry after a section heading uses `\noindent`. Subsequent entries use `\cventry` for spacing.

**Academic Positions and Education** use `\begin{cvindent}...\end{cvindent}` for the indented content (role, dates, courses, thesis) under each institution:

```latex
\cventry\textbf{University Name}, City, Country.
\begin{cvindent}
\textit{Role Title} (Start -- End)\\
Courses Taught: Course 1, Course 2, Course 3
\end{cvindent}
```

**Publications** (articles, essays) use `\cvpub` between entries. Sub-items (awards, citations, features) use `\begin{itemize}...\end{itemize}`.

**Presentations** use `\cventry` between entries. The venue is bold, the talk title is in curly LaTeX quotes:

```latex
\cventry\textbf{Venue Name, City.} ``Talk Title'' (Year)
```

**Awards** use `\cventry` between entries. The awarding institution is bold:

```latex
\cventry\textbf{Institution.} Award description (Year)
```

---

## 5. Small Caps (Bluebook Conventions)

Journal names and book titles in publication entries must use proper small caps per Bluebook citation format (Rule 2.1(a)).

**Rule:** Uppercase letters remain at full body size (11pt). Lowercase letters render as uppercase letterforms at a reduced size (9pt). This is achieved using the `\jnl{}` wrapper with `\s{}` marking the lowercase portions.

**How to mark up a journal name:**

1. Write the journal abbreviation exactly as it appears in the Bluebook (Table T6/T13).
2. Wrap the entire name in `\jnl{...}`.
3. Wrap each run of lowercase letters in `\s{...}`.
4. Leave uppercase letters, periods, ampersands, digits, and spaces unwrapped.

**Examples:**

| Bluebook Form | Markup |
|---|---|
| Yale L.J. | `\jnl{Y\s{ale} L.J.}` |
| N.C. L. Rev. | `\jnl{N.C. L. R\s{ev}.}` |
| Fla. L. Rev. | `\jnl{F\s{la}. L. R\s{ev}.}` |
| U. Pa. L. Rev. | `\jnl{U. P\s{a}. L. R\s{ev}.}` |
| Ariz. St. L.J. | `\jnl{A\s{riz}. S\s{t}. L.J.}` |
| Hastings L.J. | `\jnl{H\s{astings} L.J.}` |
| Oxford Journal of Legal Studies | `\jnl{O\s{xford} J\s{ournal of} L\s{egal} S\s{tudies}}` |
| B.U. L. Rev. | `\jnl{B.U. L. R\s{ev}.}` |

**Bluebook spacing rules (Rule 6.1):**

- Close up adjacent single-capital abbreviations: `L.J.` not `L. J.`
- Keep spaces between multi-letter abbreviations and single-letter ones: `Yale L.J.` (space between Yale and L.J.)
- Keep spaces between all distinct abbreviated words: `N.C. L. Rev.` (spaces between N.C., L., and Rev.)

---

## 6. Hyperlinks

Articles and essays that have dedicated pages on andreatosato.com are hyperlinked. The link wraps the italic title text:

```latex
\href{https://www.andreatosato.com/articles/slug}{\textit{Article Title}}
```

**Link color:** Dark blue (RGB 0, 60, 120). This is applied automatically via a redefined `\href` command in the YAML header. No manual color markup is needed.

**Which entries get links:**

- Every article with a page under `/articles/[slug]`
- Every essay with a page under `/essays/[slug]`
- Entries without dedicated website pages (older essays, book chapters, book reviews, Italian publications) do NOT get hyperlinked; use plain `\textit{Title}` instead.

**Contact links** (email, Twitter, SSRN, Personal Website) in the header block also use `\href`.

---

## 7. Publication Entry Format

### Articles

```latex
\cvpub\href{URL}{\textit{Title}}, Volume \jnl{J\s{ournal} A\s{bbr}.} (Year) (with Co-Author Name)
```

If no dedicated page exists, omit the `\href` and use just `\textit{Title}`.

If the article has awards, citations, or features, add them immediately after in an itemize block:

```latex
\begin{itemize}
\item Awarded the [Award Name]
\item Cited by [Entity], \textit{Report Title} (Year)
\item Featured in [Publication], Date
\end{itemize}
```

### Essays

Same format as articles, but link to `/essays/[slug]` where a page exists.

### Book Chapters

Title in italics, book title in `\jnl{...}` small caps:

```latex
\cvpub\textit{Chapter Title}, in \jnl{B\s{ook} T\s{itle}} Page (Editor ed. Year) (with Co-Author)
```

### Book Reviews

```latex
\cvpub Author Name, \textit{Book Title}: Book Review, Volume \jnl{J\s{ournal} N\s{ame}} Page (Year)
```

---

## 8. Adding a New Entry

### New Article or Essay

1. Add the entry in reverse-chronological order in the appropriate section.
2. Use `\cvpub` before the entry (or `\noindent` if it is the first in a section).
3. Format the title in italics, the journal in `\jnl{...}` small caps with `\s{...}` for lowercase.
4. If the article has a page on andreatosato.com, wrap the title in `\href{URL}{...}`.
5. Add any awards/citations/features as itemize sub-items.

### New Presentation

1. Add in reverse-chronological order.
2. Use `\cventry` before the entry.
3. Bold the venue. Use LaTeX curly quotes for the talk title.

### New Award

1. Add in reverse-chronological order.
2. Use `\cventry` before the entry.
3. Bold the institution name.

### New Academic Position or Education Entry

1. Add in reverse-chronological order.
2. Use `\cventry` before the entry.
3. Bold the institution. Use `\begin{cvindent}...\end{cvindent}` for indented sub-content.
4. Italicize the role title.

---

## 9. Date Header

The date in the top-right corner of every page is set in the YAML frontmatter:

```yaml
\rhead{\small\textit{April 2026}}
```

Update this line whenever the CV is revised.

---

## 10. Ordering

All sections use **reverse-chronological order** (most recent first). Within a given year, order by significance or date of publication/event.

---

## 11. Content Rules

These rules are absolute and apply to all CV updates:

- **Never invent or fabricate** any publication, award, role, co-author, journal name, or date.
- **Never change existing content** (titles, dates, co-authors, journal names) without explicit instruction from the professor.
- **Never delete entries** without explicit instruction.
- **Preserve all existing URL slugs** in hyperlinks exactly as they are.
- All bibliographic data must be verifiable from the professor's instructions or the existing codebase.
