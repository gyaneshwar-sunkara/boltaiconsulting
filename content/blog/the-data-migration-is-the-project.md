---
title: "The Data Migration Is the Project"
description: "Replacing a system is mostly moving its data, and that part is a business decision rather than a technical one. Why migrations overrun, and how to scope one honestly."
date: "2026-09-20"
author: "SillStack"
tags: ["Data", "Migration", "Legacy", "Risk"]
category: "Data & Integration"
readTime: "7 min read"
featured: false
services: ["legacy-modernisation", "data-and-analytics", "systems-integration"]
practices: ["modernisation-and-migration", "data-and-sync"]
seoTitle: "Data Migration Is the Project"
seoDescription: "Replacing a system is mostly moving its data, and that is a business decision rather than a technical one. Why migrations overrun and how to scope one."
---

Ask what it takes to replace a fifteen-year-old system and most answers describe the new software. The screens, the workflow, the integrations. The migration appears near the end of the plan, usually as a single line, usually with a small number next to it.

It is regularly the largest single piece of work in the project, and it is the piece most likely to be underestimated by an order of magnitude. Not because moving data is technically hard, but because almost none of the decisions involved are technical.

## Why the estimate is always wrong

**Nobody has looked at the data.** They have looked at the *schema*, which describes what the old system permits, not what fifteen years of users actually put in it. The two diverge immediately. A field labelled `customer_type` with three documented values turns out to hold nine, four of which are misspellings and two of which encode something a former employee needed in 2019.

**The old system does not enforce what everyone believes it enforces.** Required fields that are empty on ten per cent of records. Dates in the future that should be impossible. Two customers who are obviously the same customer, with different spellings, both with open balances.

**Every anomaly is a question for the business.** This is the part that breaks schedules. An engineer can identify four hundred records where the tax code is missing. An engineer cannot decide what the tax code should have been. That decision needs somebody in finance who has other work, and there are usually a dozen such questions, each with its own waiting period.

**"Historic data" is not one thing.** Everyone agrees history should come across, right up to the point where somebody asks whether that includes cancelled orders from 2013, the notes field with twenty years of free text in it, and the attachments on a file share the old system links to but does not contain.

## What actually has to be decided

Before anyone writes a migration script, someone has to answer these. All of them are business questions.

**How far back?** Full history, a cut-off, or full history into an archive that is readable but not live? This single decision often moves the estimate more than anything else in the project.

**What does "correct" mean, and who decides?** For each entity (customers, products, orders, balances) one named person who can rule on ambiguity. Not a committee. The most common cause of a stalled migration is a question that has been open for three weeks because nobody is sure whose call it is.

**Clean before, during, or never?** Cleaning in the old system is usually cheapest and always least popular, because it is tedious work in software everybody is trying to escape. Cleaning during migration means encoding business judgement in a script. Not cleaning means you have moved the mess, and every report built on it inherits the mess.

**What has to reconcile, exactly?** Name the figures that must match on day one: total outstanding balance, stock value by location, order count for the last twelve months. Specific figures with specific expected values. "The data should be right" is not a check anyone can run.

**What happens to what does not come across?** Something always stays behind. Decide in advance whether the old system stays readable, whether there is an export in a format somebody can open in five years, and who is responsible for it.

## How to scope it so the number means something

**Profile the data first, as a separate paid piece of work.** A few days against a copy of the real database: row counts per table, null rates per column, distinct values in every field that is supposed to be an enumeration, duplicate detection on the entities that matter, date ranges and outliers. The output is a document listing every anomaly and the question it raises. That document is what makes a migration quotable. Without it, any number is a guess.

**Count the decisions, not just the records.** Ten million clean rows is a small job. Forty thousand rows with sixty open business questions is a large one. Estimates go wrong because they're built on the first number.

**Run it more than once.** A migration that has only ever run once has never run. Rehearse against production data, in full, on a schedule. We run them repeatedly and time each one, because "how long does the cutover take" is a question you want answered by a stopwatch rather than a guess. Each rehearsal surfaces anomalies the profile missed.

**Build the reconciliation before the cutover, not after.** This is the mistake we made on an integration and wrote up in [the Eshop case study](/work/eshop-pos-ecommerce): the reconciliation job shipped after launch, and its first run surfaced three weeks of accumulated drift that was recoverable but had been invisible the whole time. A day of work, at the wrong end of the project.

**Keep the old system readable for longer than feels necessary.** Read-only access for six months costs very little and removes the pressure that causes bad decisions during cutover. The questions that arrive in month three are the ones nobody could have anticipated.

## The parallel-running question

Running both systems at once is the safest cutover and the most expensive. Everything is entered twice, which staff dislike and which introduces its own discrepancies, and it needs a clear end date or it becomes permanent.

It is worth it when the cost of being wrong is high and immediate: anything touching money, stock or compliance. It is usually not worth it for reporting and internal tools, where a bad week is recoverable.

The middle path, and the one we reach for most often, is migrating in slices: one entity or one location at a time, each with its own reconciliation, each reversible on its own. Slower on paper, far more likely to finish, and the business keeps trading throughout. That argument in full is in [replacing a legacy system without a bad weekend](/blog/replace-a-legacy-system-without-a-bad-weekend).

## The short version

The new system is the part everyone can picture, and it is rarely the part that decides whether the project succeeds. Profile the data before anyone quotes it, name one person per entity who can make a ruling, decide what must reconcile before you start, and rehearse the whole thing against real data until the timing is boring.

A migration that's been rehearsed four times is an event. One that hasn't is a weekend nobody wants.

---

**Have a system you are planning to replace?** [Tell us what it does](/contact) and what would break if it stopped, and we will tell you honestly whether the data is the hard part.
