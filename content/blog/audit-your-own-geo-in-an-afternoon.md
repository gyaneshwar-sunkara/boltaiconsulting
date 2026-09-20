---
title: "How to Audit Your Own AI Search Visibility in an Afternoon"
description: "Before paying anyone for GEO, run the check yourself. Six questions to ask the assistants about your own market, and how to read what comes back."
date: "2026-09-19"
author: "SillStack"
tags: ["GEO", "SEO", "AI", "Search & Marketing"]
category: "Search & Marketing"
readTime: "8 min read"
featured: false
services: ["search-visibility"]
practices: ["search-and-growth", "growth-and-lifecycle"]
seoTitle: "Audit Your Own GEO"
seoDescription: "Before paying for GEO, run the check yourself: six questions to ask AI assistants about your market, and how to read the answers that come back."
---

Generative engine optimisation is being sold hard at the moment, usually without anyone showing you the current state of your own visibility first. That is the wrong way round, and it is easy to fix, because the measurement tool is free and you already know how to use it.

You can do most of this in an afternoon. If the results are fine, you've saved yourself a retainer. If they aren't, you'll at least know what you're buying.

## Before you start: what you are measuring

Search ranking and being cited by an assistant are different jobs. Ranking rewards authority and links. Being cited rewards being *parseable and complete*: having the specific fact the model needs, in a form it can extract with confidence, on a page it is allowed to read. A site can rank well and be invisible to assistants, and the reverse happens too.

We covered why in [what GEO actually is](/blog/what-is-geo-generative-engine-optimization). This post is the measurement.

## The six questions

Use at least two assistants (ChatGPT plus one of Perplexity, Claude or Google's AI mode), because they retrieve differently and a result in one is not a result in all. Use a fresh chat each time so nothing carries over, and turn off any personalisation or memory you can.

Ask them in your customer's words, not your marketing's.

**1. The direct one.** "What does [your company name] do?"

This is the baseline. If the answer is wrong, outdated, or confidently describes a different company with a similar name, nothing else matters until that is fixed.

**2. The category one.** "Who are the best [what you do] companies in [your city or region]?"

Whether you are named at all, and who is named instead. Write down the competitors that appear. That list is more useful than your own result.

**3. The problem one.** "I run a [your customer's business]. [Describe the problem you solve]. What are my options?"

This is the query that actually converts, and it is the one most businesses never test. Nobody types "enterprise integration solutions provider". They describe their situation.

**4. The comparison one.** "How does [you] compare to [a competitor the assistant named in question 2]?"

Watch what facts it has about each of you. Asymmetry here is the clearest possible diagnosis: whatever it knows about them and not about you is a page you have not written.

**5. The specific one.** "How much does [your specific service] cost?" or "How long does [your specific service] take?"

Assistants answer these constantly. If your numbers are not on a page in a form that can be extracted, somebody else's numbers become the answer, and you get compared against them without being present.

**6. The disqualifying one.** "When should I *not* hire a [your category]?"

Rarely tested and revealing. You want to appear in answers where you are the right fit and be absent where you are not. A mention in the wrong context costs you a call you were never going to win.

## How to read what comes back

Record, for each question and each assistant: were you named, in what position, and was the substance correct. Do not score it out of ten. The useful output is a table of hits, misses and factual errors.

Then look for the patterns.

**Named but wrong** is the most urgent and the easiest to fix. The assistant has found something, an old page or a stale directory listing or a business profile nobody has updated, and is repeating it. Find the source and correct it.

**Not named at all, competitors named** usually means one of three things. Your site is thin on the specific thing being asked about. Your pages state benefits rather than facts, so there is nothing extractable. Or you are blocking the crawlers, which happens far more often than people expect: a default robots file, a bot-filtering rule on the CDN, or a firewall setting somebody enabled for security reasons and never revisited.

**Named in the direct question only** means you are a known entity but not an answer to any real problem. That is a content gap, not a technical one.

## The three technical checks worth doing the same afternoon

**Can the assistants read your site at all?** Open `yoursite.com/robots.txt` in a browser. Look for `Disallow` under `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `CCBot`. A lot of platforms and agencies block these by default, sometimes without mentioning it. There are legitimate reasons to block them. Wanting to be recommended by them is not compatible with it.

Also check your CDN or WAF separately. A permissive robots.txt in front of a bot-management rule that returns 403 to anything unfamiliar is a common and completely invisible failure.

**Does your key content survive with JavaScript off?** Disable JavaScript in your browser and load your service or pricing page. If the page is blank or the substance is missing, retrieval systems are likely seeing the same thing. Your rendered HTML is what gets read.

**Is there structured data?** Run your main pages through Google's Rich Results Test or Schema.org's validator. You are looking for `Organization`, `Service`, `FAQPage` and, on articles, `Article` or `BlogPosting`. Structured data is a machine-readable statement of the facts rather than prose a model has to interpret. There is more on this in [structured data is how you get quoted](/blog/structured-data-is-how-you-get-quoted).

## What to do with the results

Fix in this order, because it is the order of cost:

1. **Unblock the crawlers**, if they are blocked. Free, immediate, and nothing else works until it is done.
2. **Correct the wrong facts** at their source. Your own pages first, then directory listings and profiles.
3. **Write the missing page**, singular. Take the one query from question 3 that matters most commercially and write the page that answers it completely: the problem in the customer's words, what the options are including the ones that are not you, what it costs, how long it takes, and when it is the wrong choice. One genuinely complete page outperforms six thin ones.
4. **Add structured data**, which is a day of work and mostly mechanical.

Then wait. Re-run the same six questions in six to eight weeks, with the same wording, and compare. Retrieval indexes update on their own schedule and nothing about this is instant.

## What nobody can sell you

A guaranteed mention. There is no submission form, no ranking factor to buy, and anybody offering placement in an assistant's answers is describing something that does not exist.

What can be done is real but unglamorous: be readable, be complete, be specific, be correct, and be allowed in. That's the whole of it, and you have just measured where you stand on all five.

---

**Want a second pair of eyes on the results?** [Tell us your domain and your market](/contact) and we will run the questions ourselves and send you what the assistants actually say, at no charge.
