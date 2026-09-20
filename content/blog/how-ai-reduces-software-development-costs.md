---
title: "What AI Actually Changes About the Cost of Building Software"
description: "AI is a real lever on development cost, but not the one most vendors claim. Here is which parts of a build it moves, which it does not, and why."
date: "2024-11-20"
author: "SillStack"
tags: ["AI Development", "Cost", "Estimation", "Engineering Practice"]
category: "AI & Development"
readTime: "8 min read"
featured: true
services: ["ai-integration", "product-discovery"]
practices: ["ai-automation", "product-engineering"]
seoTitle: "AI and Development Costs"
---

Every firm selling software development currently claims AI has made it dramatically cheaper. Very few of them will tell you which line of the estimate moved.

We use AI tooling daily and it has genuinely changed how we work. It has not changed the cost of a project by the multiples the marketing suggests. The reason is worth understanding before you price your next build, because the places it helps least are the places most of your money goes.

## Where the money in a project actually goes

Take a typical business application: a few user roles, a workflow, some reporting, an integration with something you already run. Broadly, the effort splits four ways.

**Deciding what to build.** Watching how the work happens today, finding the edge cases nobody mentions in a meeting, and writing down what the software will and will not do. On a well-run project this is a meaningful share of the total, and it is almost entirely conversation.

**Plumbing.** Accounts, roles and permissions, billing, notifications, an admin screen, audit logs, background jobs, deployment, monitoring. None of it is specific to your business and all of it has to exist.

**The part that is yours.** The workflow, the rules, the data model that matches how you actually operate. This is the work you are really paying for.

**Everything after the first release.** Bugs, the change you asked for in week six, the integration whose vendor altered it, the incident at 2am.

Ask which of those four AI compresses and the honest answer is: some of the third, a little of the fourth, and almost none of the first two.

## What AI genuinely does well

**Writing code you have described precisely.** Once a decision is made (this endpoint, these fields, this validation) a competent engineer with good tooling produces it faster than they did three years ago. That is real, and it compounds across a project.

**Tests.** AI is good at generating cases around a function you have written, including some you would not have thought of. It is much less good at knowing which behaviours are worth asserting in the first place, which is the part that determines whether [a test suite earns its keep](/blog/the-test-suite-that-earns-its-keep).

**Reading unfamiliar code.** Handed a legacy system with no documentation, an engineer gets oriented considerably faster than by reading it line by line. On modernisation work this is the biggest practical gain we see.

**Documentation and the first draft of anything.** Release notes, API docs, migration plans. A first draft in thirty seconds that needs ten minutes of correction still beats a blank page.

## What it does not do

**It does not know what you meant.** The expensive failures in software are not typing failures. They are a rule that was described one way in a meeting and works another way in practice, discovered in month three. AI will implement the wrong thing quickly and confidently.

**It does not make architectural decisions you can live with.** Whether stock is a count or a ledger, whether the point of sale owns the catalogue, whether an integration needs to be idempotent. Those are cheap to get right at the start and very expensive to reverse later. They come from having got them wrong before.

**It does not remove the review.** Generated code still has to be read by someone accountable for it. Where it is not, the time saved writing reappears later as time spent debugging, usually at a worse moment.

**It does not shorten a decision you have not made.** The most common cause of delay on a project is waiting for an answer. No model helps with that.

## The lever that actually moves the number

If you want a project to cost meaningfully less, the useful question is not which tools the team uses. It is how much of what you are paying for already exists.

Accounts, permissions, billing, notifications, admin, audit logging, multi-tenancy and background jobs appear on the estimate for every project, and they are near-identical from one business to the next. A firm that rebuilds them each time is charging you to solve a problem it solved last quarter. A firm that maintains them as a platform starts your project at the part that is actually yours.

That is the arithmetic behind our four-week quote, and it has nothing to do with AI. We set it out in [why we quote four weeks](/blog/why-we-quote-four-weeks), and what the platform actually contains is written up in [the Sill case study](/work/sill-platform).

AI sits on top of that as a real but second-order effect. It makes the remaining work faster. It doesn't make the remaining work unnecessary.

## How to read a vendor's AI claim

If a proposal leans on AI to justify its price or its timeline, three questions separate the substantive from the decorative.

**Which phase got shorter?** A specific answer, such as "we spend less time on boilerplate and test scaffolding", is checkable. "AI makes us faster across the board" is not a claim about anything.

**Who reviews what the model produces, and when?** If the answer is vague, you are being sold the speed without the check that makes the speed safe.

**What happens to the estimate if the tooling disappeared tomorrow?** A firm that can answer has an engineering practice with AI in it. A firm that cannot has a pricing story.

## Where we use it, plainly

We use AI assistants for code generation, test scaffolding, orienting in unfamiliar codebases and first-draft documentation. We build it into products where it does a job the user can verify: receipt extraction with confidence scoring and a review path for anything uncertain, described in [the Larder case study](/work/larder).

We do not use it to make architectural decisions, to decide what to build, or to skip review. And we do not price work on the assumption that it saves a fixed percentage, because across the projects we have run it does not save a consistent one.

## The short version

AI has made competent engineers meaningfully more productive at the parts of the job that were already mechanical. That is worth having. It is not worth a headline percentage, and a firm quoting you one has picked a number.

The larger saving available to you is not paying twice for the plumbing, and that one you can verify. Ask what the firm already has running before your project starts.

---

**Want an honest estimate?** [Tell us what you are trying to build](/contact) and we will come back with a scope, a price and a date.
