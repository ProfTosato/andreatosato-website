# SEO and Academic Indexing Setup

## What Was Added

### 1. Sitemap Generator
- **File**: `astro.config.mjs` and `package.json`
- **What it does**: Automatically generates a sitemap.xml file when you build your website
- **Location**: The sitemap will be available at `https://www.andreatosato.com/sitemap-index.xml`
- **How to use**: When you run `npm run build`, Astro will automatically create the sitemap

### 2. Robots.txt
- **File**: `public/robots.txt`
- **What it does**: Tells search engines they can crawl all your content
- **Special feature**: Includes specific permission for Google Scholar bot
- **Location**: Available at `https://www.andreatosato.com/robots.txt`

### 3. Meta Tags on Every Article/Essay Page
Each article and essay page includes:

#### Google Scholar Tags
- citation_title
- citation_author (for each author)
- citation_publication_date
- citation_journal_title
- citation_volume
- citation_pdf_url
- citation_abstract
- citation_keywords
- citation_language

#### Dublin Core Tags (for academic repositories)
- DC.title, DC.creator, DC.subject, DC.description, DC.publisher, DC.date, DC.type, DC.format, DC.language

#### Schema.org Structured Data
- ScholarlyArticle type with full metadata

#### Standard SEO Tags
- Description, keywords, author, canonical URLs

#### Social Media Tags
- Open Graph (Facebook, LinkedIn)
- Twitter Cards

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the website**:
   ```bash
   npm run build
   ```
   This will generate the sitemap automatically.

3. **After deployment**:
   - Submit your sitemap to Google Search Console: https://search.google.com/search-console
   - The sitemap URL will be: https://www.andreatosato.com/sitemap-index.xml

## Google Scholar Indexing

Important notes about Google Scholar:
- Google Scholar primarily indexes articles from established academic repositories and journal websites
- Your personal website will be crawled, but inclusion is not automatic
- To improve indexing chances:
  1. Ensure each article links to its official published version
  2. Keep PDF URLs working and accessible
  3. Maintain consistent author names across all publications
  4. Submit your profile to Google Scholar (https://scholar.google.com/citations)

## Verifying SEO Setup

After deployment, test your setup:
1. Check robots.txt: visit yoursite.com/robots.txt
2. Check sitemap: visit yoursite.com/sitemap-index.xml
3. Use Google's Rich Results Test: https://search.google.com/test/rich-results
4. Submit to Google Search Console for monitoring

## Future Enhancements

Consider adding:
- Google Analytics for traffic monitoring
- ORCID integration for academic identity
- Link to institutional repository versions of articles
