---
title: "Structured Data Is How You Get Quoted by ChatGPT"
description: "Ranking rewards authority. Being cited by an assistant rewards being parseable and complete. They are different jobs, and most sites are only doing one of them."
date: "2026-09-03"
author: "SillStack"
tags: ["GEO", "SEO", "Structured Data", "Answer Engines"]
category: "Search & Marketing"
readTime: "7 min read"
featured: true
services: ["search-visibility"]
practices: ["search-and-growth", "growth-and-lifecycle", "design-and-experience"]
seoTitle: "Structured Data and AI Search"
---

A growing share of buyers never see a results page. They describe the problem to an assistant, get three recommendations, and act on one of them.

That is a different retrieval process from ranking, and optimising for it is a different job. Being on page one does not help if the model that answered the question never fetched your page or could not parse it when it did.

## Three things that decide whether you get cited

### Can it read your page without JavaScript?

This is the first and most common failure. A model fetching your URL does not run your JavaScript and will not wait for hydration. If your content arrives client-side, the retrieved page is an empty shell.

Test it in thirty seconds: disable JavaScript in your browser and load your site. What is left is roughly what a retrieval system sees.

A related and sneakier version: scroll-reveal animations implemented with inline `opacity: 0` that only lifts after hydration. The HTML contains the text, technically, marked as invisible. We found fifty-seven such elements on this very site during a rebuild and moved the whole system to CSS, because content hidden from a parser is content that does not exist.

### Does the markup say what the page is?

Schema.org structured data tells a machine what it is looking at rather than making it infer. An `Organization`, a `Service` describing what you actually provide, a `FAQPage`, a `BlogPosting` with an author and date, a `BreadcrumbList` giving the page its position.

This is not a ranking trick. It is the difference between a system that can confidently extract a fact from your page and one that has to guess, and guessing systems prefer sources that do not require guessing.

### Are the crawlers allowed in?

Check your `robots.txt` right now. A lot of default configurations block the answer-engine crawlers, either deliberately during an earlier policy conversation or accidentally by copying a file from somewhere.

The ones that matter today: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `ClaudeBot`, `Claude-User`, `Google-Extended`, `CCBot`.

There is a legitimate debate about training data, and publishers with a genuine interest in restricting it should. But for most businesses, blocking these is switching off a sales channel to make a point nobody will notice.

## Write pages that can be quoted

Retrieval pulls passages. A passage that fully answers a question is usable. A passage that gestures at an answer and asks for an email is not.

That leads to some concrete guidance:

- **One page, one question, answered completely.** Depth beats breadth here.
- **Do not gate the answer.** A model cannot fill in a form, and a page that withholds its substance gets skipped.
- **Be specific.** Numbers, ranges, named constraints. "We work with businesses of all sizes" is unquotable. "Four weeks from signed specification to live, for groups running two to ten locations" is a fact a model can repeat.
- **Put the answer near the top.** Then elaborate.

## Both channels, honestly measured

None of this replaces technical SEO. Crawlability, site architecture, Core Web Vitals and internal linking still matter, and they happen to be the same foundations that make a site retrievable.

What is different is how you measure. Rankings are well instrumented; answer-engine citations are not, yet. The practical approach is to ask the assistants the questions your buyers ask and record whether you appear. It is manual and it is real data, which beats a metric nobody has defined properly.

Anyone claiming a mature measurement stack for this in 2026 is overstating it, and we would rather say that than sell certainty that does not exist.

## Check your own site first

Three things, ten minutes:

1. Disable JavaScript and load your homepage. Is the content there?
2. Open `yoursite.com/robots.txt`. Is `GPTBot` allowed?
3. Run a page through a structured data validator. Is there any schema at all?

Most sites fail at least one. Agencies selling search visibility fail them at a rate that should worry their clients, so run those three checks on whoever you are considering. Run them on this site too.

---

**Want to know how you look to an answer engine?** [Tell us your domain](/contact) and we'll run the checks.
