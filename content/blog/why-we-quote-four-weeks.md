---
title: "Why We Quote Four Weeks When Everyone Else Says Three Months"
description: "It isn't that we work faster or cut corners. Most of a software quote is rebuilding plumbing that has nothing to do with your business. Here's the actual arithmetic."
date: "2026-09-01"
author: "SillStack"
tags: ["Process", "Pricing", "Software Development", "Delivery"]
category: "How We Work"
readTime: "6 min read"
featured: true
services: ["web-applications", "product-discovery"]
practices: ["platform-engineering", "product-engineering", "product-strategy"]
seoTitle: "Why We Quote Four Weeks"
seoDescription: "Most of a software quote is rebuilding plumbing that has nothing to do with your business. Here is the arithmetic behind a four-week estimate."
---

Every prospect asks the same question, usually about ten minutes into the first call: *if this takes everyone else three months, what are you skipping?*

Fair question. Here is the honest answer, with the arithmetic.

## What's actually in a three-month quote

Ask an agency to build you a customer portal. Roughly what gets built:

- User accounts, signup, login, password reset, email verification
- Roles and permissions: who can see what
- Billing, subscriptions, invoices, failed-payment handling
- Notifications, email delivery, templates
- An admin area so *you* can manage all of the above
- Audit logging, because eventually someone asks who changed what
- Background jobs for anything that can't happen in a web request
- **And then: the thing you actually asked for**

Count the list. Seven items of plumbing, one item of product.

Here is the part that should annoy you: those seven are **identical in almost every project**. Your login page is not meaningfully different from anyone else's login page. Your permissions model has the same shape as a thousand others. Your invoice emails are invoice emails.

Yet in a traditional engagement, you pay to build every one of them from scratch, as if nobody had ever done it before.

## Why firms do it that way

Not usually malice. Mostly structure.

**Billable hours reward volume.** If you charge for time, rebuilding plumbing is not a problem to solve. It's revenue. There is no incentive to arrive with it already built.

**Teams change between projects.** Six people who have never worked together can't reuse anything, because there is nothing shared to reuse.

**Reuse gets confused with cutting corners.** Because it often is. Copy-pasting last client's repo into this client's repo produces exactly the fragile mess everyone fears, and that experience makes firms wary of the whole idea.

## What we do instead

We built the plumbing once, properly, and we run it in production.

It is called **Sill**, and it is the layer every engagement we take on is built on. Accounts, permissions, billing, notifications, admin, audit logging, multi-tenancy, background jobs. All of it built, hardened, and handling real users and real money on live projects today.

The distinction that matters: **it is one living codebase, not a copy per client.** When we find a bug in the permissions layer, we fix it once, and every project on Sill gets the fix, including ones that shipped last year. That only works because we depend on it ourselves. Every live project sits on the same code, so it gets maintained the way anything you depend on gets maintained.

So when a project starts, roughly sixty per cent of it already exists and already works. The four weeks go to the forty per cent that is genuinely yours.

## Where the four weeks actually go

**Week one: scope.** Access to your systems, a walkthrough of how the work happens today, and a written specification you sign off. No code yet. This week exists so weeks two through four don't contain surprises.

**Week two: build.** Core functionality. On Friday you see it working, with your real data in it. Not a slide deck. Not a percentage complete. Software you can click.

**Week three: build.** The second half: reporting, edge cases, the workflows that only show up once you have used the thing. Second Friday demo.

**Week four: ship.** Live, watched closely, then rolled out. Training for your team in the same week, and documentation written for people rather than for engineers.

## What four weeks does not mean

**It does not mean four weeks of your time.** It means four weeks of ours. You are looking at perhaps three hours a week: a demo and a handful of decisions.

**It does not mean everything ships in four weeks.** Some projects are genuinely bigger. When that is true we say so on the first call and quote what it actually is. What we will not do is quote four weeks and then discover month two.

**It does not mean unlimited scope.** Fixed price requires fixed scope. Changes get quoted before we build them, never after. If the thing you want is not in the spec, it is not in the price, and you find that out before it costs you anything.

## The honest trade-off

You are building on a platform we chose. If you want a completely different architecture, a different language, a hosting arrangement we don't support, then we are the wrong firm. We would rather tell you that on the first call.

For most businesses, that trade is overwhelmingly worth it. You are not paying us to have opinions about your login page. You are paying us for the part that is actually your business.

That is the whole trick. There isn't a second one.

---

**Want the four-week version of your project scoped?** [One call, thirty minutes](/contact), and you'll leave with a number and a date whether or not you work with us.
