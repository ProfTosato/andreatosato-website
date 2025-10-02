# Andrea Tosato Academic Website

A minimalist, Scandinavian-style academic website built with Astro. Black and white color scheme with excellent legibility and full Google Scholar optimization.

## Structure

```
src/
  layouts/
    Layout.astro          - Main layout with navigation
    ArticleLayout.astro   - Layout for individual article pages
  pages/
    index.astro           - Homepage (scrollable with recent articles/essays)
    about-me.astro        - Full biography
    books.astro           - Books and monographs
    articles.astro        - All articles listed
    essays.astro          - All essays and book chapters
    teaching.astro        - Teaching information
    law-reform.astro      - Law reform activities
    invited-talks.astro   - Invited talks and media
    articles/
      *.astro             - Individual article detail pages
public/
  pdfs/                   - PDF files for download
```

## Setup

1. **Add your PDF files** to `public/pdfs/`:
   - `digital-assets-property-question.pdf`
   - `bankrupt-crypto-organizations.pdf`

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321

4. **Build for production**:
   ```bash
   npm run build
   ```

## Deploying to Netlify

1. Push all files to a GitHub repository
2. Connect GitHub to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

Your site will automatically rebuild whenever you push changes to GitHub.

## Google Scholar Optimization

Each article detail page includes:
- Google Scholar meta tags (citation_title, citation_author, citation_publication_date, etc.)
- Schema.org structured data
- Clean HTML for optimal crawler indexing
- Fast page loads

## Making Updates

To update content, simply tell Claude what you want to change. Claude will provide:
- The exact file to edit
- The specific code to replace
- Clear instructions

Then commit the changes to GitHub and your site updates automatically.

## Design

- Pure black (#000) text on white (#fff) background
- Font size: 17px base (excellent legibility)
- Minimalist Scandinavian/Japanese aesthetic
- Clean typography with generous spacing
- Fully responsive (desktop and mobile)

## Support

For questions or updates, describe what you need to Claude and you will receive step-by-step guidance.
