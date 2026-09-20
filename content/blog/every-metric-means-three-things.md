---
title: "Every Metric Means Three Things, and That Is Why Your Dashboards Disagree"
description: "Two reports, two answers, both technically correct. The problem is almost never the data. It is that nobody wrote down what the words mean."
date: "2026-09-11"
author: "SillStack"
tags: ["Analytics", "Data", "Reporting", "Metrics"]
category: "Data & Integration"
readTime: "6 min read"
featured: false
services: ["data-and-analytics"]
practices: ["analytics-and-insight", "data-and-sync"]
seoTitle: "Why Dashboards Disagree"
---

Somebody asks how many active customers there are. Sales says 1,204. Finance says 1,061. Support says 1,330. All three pulled from real systems and none of them made a mistake.

Sales counted anyone with an open opportunity or a login in ninety days. Finance counted anyone who was invoiced last month. Support counted anyone with an account that is not closed.

The data is fine. The word is the problem.

## Definitions are the actual deliverable

The instinct when reports disagree is to go looking for a data quality issue. Occasionally there is one. Far more often, each team encoded a reasonable definition into their own query and nobody ever compared them, because the queries live in three different tools and nobody reads other people's SQL for fun.

The fix is unglamorous: write the definitions down, once, in a place both humans and queries read from.

- **Active customer** means what, exactly? Invoiced in the period? Logged in? Not cancelled?
- **Revenue.** Booked, recognised, collected? Gross or net of refunds?
- **Churn.** By customer count or by value? Measured when they cancel, or when the term ends?

None of these has a universally right answer. They have a *right answer for your business*, and the value comes from picking one and putting it somewhere queries can inherit it.

## Put the definitions in version control

A metrics layer is just this idea made concrete: metric definitions expressed as code, checked into the repository, reviewed in pull requests like anything else.

Two things fall out of that.

**Changes become visible.** If somebody redefines churn, it shows up in a diff and somebody approves it. Compare that to the usual situation, where a definition changes because one analyst edited one dashboard and the number quietly shifts.

**Every tool agrees.** The dashboard, the scheduled report and the ad-hoc query all resolve the same definition, because there is only one.

## Keep reporting off the production tables

The second common failure is operational: analytical queries running against the same tables serving customers. Month-end reporting slows the application down, and everyone learns to dread the close.

Reporting should read from a replica or a separate model. This is not an optimisation to do later; it is the first structural decision, and it is cheap at the start and awkward to retrofit.

## Treat data quality as tests

Data pipelines deserve assertions the same way code does.

- **Freshness.** This table should have data from the last 24 hours.
- **Volume.** This load should be within a sensible range of yesterday's.
- **Nulls.** This column should never be empty.
- **Uniqueness.** This key should not repeat.

When one fails, the pipeline stops rather than publishing. Silently wrong data is considerably worse than missing data, because a dashboard with a plausible-looking wrong number gets acted on, and nobody questions it until a decision has already been made.

## Fewer dashboards, actually opened

Most organisations have far more dashboards than anybody looks at. Every one is maintenance, and a stale dashboard is an active liability because someone will eventually read it and believe it.

Build for the decision. Ask what somebody does differently based on this number. If there's no answer, don't build it, and delete the ones already there that nobody opens. Four dashboards in weekly use beat forty nobody trusts.

## Where to start

Pick the one number that causes the most arguments. Write down its definition. Get three people to agree to it. Put it in version control.

That is usually a day of work, and it is the day that makes everything after it possible.

---

**Got a report that starts arguments?** [Tell us which number is disputed](/contact) and who disputes it. Agreeing the definition is usually the first half of the work.
