CV Build Workflow
=================

Source file:  cv/Andrea-Tosato-CV.md
Output file:  public/Andrea-Tosato-CV.pdf

One-time setup (Windows)
------------------------
Install Pandoc and a LaTeX distribution. Run these in PowerShell:

    winget install --id JohnMacFarlane.Pandoc
    winget install --id MiKTeX.MiKTeX

After installing MiKTeX, open the MiKTeX Console once and let it finish
its initial setup. MiKTeX will auto-download any LaTeX packages Pandoc
needs on the first build.

Alternative: install both from their websites:
  - https://pandoc.org/installing.html
  - https://miktex.org/download

Building the CV
---------------
From the project root:

    npm run cv

This generates public/Andrea-Tosato-CV.pdf from the Markdown source.

Updating the CV
---------------
Edit cv/Andrea-Tosato-CV.md, then run npm run cv.
Remember to update the date in the header-includes (rhead) when making
changes. The current date appears in the top-right corner of every page.
