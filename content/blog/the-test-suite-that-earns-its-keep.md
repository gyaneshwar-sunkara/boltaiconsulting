---
title: "The Test Suite That Earns Its Keep"
description: "Coverage percentage is easy to raise and easy to game. Here is where tests actually pay for themselves, and why nobody on your team wants to deploy on a Friday."
date: "2026-09-05"
author: "SillStack"
tags: ["Testing", "Quality", "Engineering Practice"]
category: "How We Work"
readTime: "6 min read"
featured: false
services: ["web-applications", "managed-support"]
practices: ["quality-and-testing", "product-engineering", "cloud-and-delivery"]
seoTitle: "Test Suites Worth Having"
---

If nobody on your team wants to deploy on a Friday, that reluctance is accurate information. It means they do not believe the software is safe to change, and they are usually right.

A test suite exists to make change safe. Most of them do not, because they were built to raise a number rather than to catch the failures that matter.

## Coverage is a bad target

Ninety per cent coverage across code that mostly formats dates tells you very little. Forty per cent coverage concentrated on billing, permissions and the checkout path tells you a lot.

Coverage is easy to inflate. A few tests over trivial getters will move it, and the number then provides false comfort. Worse, teams chasing it write tests that assert implementation details rather than behaviour, which makes refactoring harder rather than safer. A suite that breaks every time you rename something is a tax, not an asset. You'll stop trusting it, then stop running it.

Test where a failure costs money or costs trust. That list is usually short and everyone on the team can name it.

## Every bug earns a test

This is the single habit with the best return.

When something breaks, reproduce it as a failing test *first*, then fix it. The test now guards that behaviour permanently.

Do this consistently and the suite grows in exactly the places that have proven fragile, which is a far better allocation than anything anyone would plan up front. Your codebase tells you where it is weak; you just have to write it down when it does.

The alternative is the familiar cycle where a bug is fixed, the fix is not protected, and the same issue reappears two releases later because somebody refactored around it.

## A few end-to-end tests, not many

End-to-end tests are slow and more brittle than unit tests, and they catch things nothing else can: the integration between pieces that each work perfectly alone.

The resolution is to be selective. Pick the handful of journeys that must never break: sign up, log in, the core action, checkout. Run them on every commit in a real browser. Do not attempt to cover every path this way; you will get a suite so slow and flaky that people start ignoring failures, which is worse than having no tests at all, because now failure is normalised.

## Load test before, not after

Establishing how the system behaves at your actual peak is roughly a day's work beforehand.

Discovering it live on launch morning is a full incident with customers watching and everybody guessing. Same information, radically different circumstances.

You don't need a sophisticated setup. A realistic profile of your expected peak, run against staging, will find the obvious problems: the query that degrades non-linearly, the connection pool that is too small, the endpoint nobody cached.

## The pipeline has to enforce it

Standards that rely on people remembering decay within a quarter. Not from carelessness. From deadlines.

Typecheck, lint, tests and build all green, or the merge is blocked. Not a convention. A rule the pipeline enforces, with no override that becomes routine.

Once that exists, the suite stays trustworthy, and a trustworthy suite is the thing that makes Friday deploys unremarkable.

## What to do with an existing codebase

Retrofitting coverage everywhere at once is rarely worth the money. Covering the fragile parts almost always is.

Start with the paths that have broken before. Your incident history is the prioritised list. Add a test with every bug fix from now on. Within a few months the coverage sits exactly where the risk is, without anybody having run a coverage-improvement project.

---

**Afraid to deploy?** [Tell us what usually breaks](/contact) and how you find out. That is normally enough to say where the first tests belong.
