---
title: "How to Replace a Legacy System Without a Bad Weekend"
description: "Big-bang rewrites fail at a famous rate. The alternative is slower on paper, far more likely to finish, and keeps the business trading the whole way through."
date: "2026-09-14"
author: "SillStack"
tags: ["Modernisation", "Legacy", "Migration", "Architecture"]
category: "How We Work"
readTime: "8 min read"
featured: true
services: ["legacy-modernisation", "product-discovery"]
practices: ["modernisation-and-migration", "systems-integration", "product-strategy"]
seoTitle: "Legacy System Migration"
---

Everybody knows the story. A company decides the old system has to go, commissions a clean rebuild, and eighteen months later has two systems, one of which nobody uses and both of which need maintaining.

The rewrite is not a bad idea because engineers are bad at estimating. It is a bad idea because of a structural problem: during a rewrite the business cannot stop, so features keep landing in the old system, so the new one is chasing a target that keeps moving. The finish line recedes at roughly the speed you approach it.

## The alternative: move in pieces

Put a routing layer in front of the old system. Every request passes through it. Initially it routes everything to the old system, and nothing changes for anybody. Which is the point: the *mechanism* for moving functionality now exists and has been proven while the stakes are zero.

Then move one slice. Route just that slice to the new system. If it misbehaves, route it back. Then the next slice.

This is usually called the strangler pattern, after a vine that grows around a tree and gradually replaces it. The name is unappealing and the property is excellent: **at no point is there a moment where everything changes at once.**

## What makes it work

### The old system is the specification

Its behaviour is the requirement. Including the bugs, because after five years somebody has built a process around every one of them. "We'll fix that while we rewrite it" is how a modernisation turns into a change management project nobody scoped.

Document the behaviour first. Decide what to change deliberately and separately.

### Run both and compare automatically

For each slice, have both systems process the same input and compare the outputs. Not by hand. A job that reports disagreements.

This turns the cutover decision from a matter of confidence into a matter of evidence. When outputs have agreed for a few weeks, moving traffic is uneventful. That is what you want. Nobody should feel brave on cutover day.

### Every cutover has an off switch

Written down before the day. Rehearsed. Owned by a named person, with an agreed signal that triggers it.

The failure mode here is predictable: something looks slightly wrong, there is a debate about whether it is serious, the debate takes forty minutes, and by then rolling back is worse than going forward. Decide the trigger in advance, when nobody is under pressure.

### Phases ship something usable

Each phase delivers working functionality rather than progress toward a distant finish. If the programme gets paused for budget, and some do, you are left with something valuable rather than a half-migrated mess.

## What it costs

Be honest about this: incremental migration takes longer than a rewrite *looks like it will take* on paper. You maintain a routing layer. You run two systems for a while. There is real overhead.

What you buy is the thing that matters: it finishes. And you keep shipping features throughout, which for most businesses is not optional. A six-month feature freeze is rarely survivable commercially.

## When a rewrite really is right

It does happen.

- The system is genuinely small, and a rewrite is weeks rather than quarters.
- The business domain changed so much that the old behaviour is not the requirement any more.
- The old system is already not being used for the thing you are replacing.

In those cases say so. What is not a good reason is that the old code is unpleasant to read. Unpleasant code that encodes five years of business rules is worth more than clean code that does not.

## Start with an assessment

Before any of this, read the system properly: what it does, what it costs to keep, what is genuinely risky about touching it, and what would happen if it stopped.

That assessment is useful whether or not you proceed. Sometimes the conclusion is that the system needs three fixes and a maintenance plan rather than a replacement, and that is a better outcome than a programme you did not need. Any firm unwilling to reach that conclusion is not giving you an assessment, they are giving you a proposal.

---

**Have a system nobody wants to touch?** [Tell us what it does](/contact) and what would break if it stopped. We'll come back with an honest read.
