---
title: "The Same Number in Two Places"
description: "Your POS says one thing and your accounting package says another. Reconciling them is somebody's entire Monday. Here is why systems drift apart, and the boring job that keeps them together."
date: "2026-09-16"
author: "SillStack"
tags: ["Data", "Integration", "Reconciliation", "Operations"]
category: "Data & Integration"
readTime: "7 min read"
featured: true
services: ["data-and-analytics", "systems-integration"]
practices: ["data-and-sync", "systems-integration", "analytics-and-insight"]
seoDescription: "Your POS says one thing and accounting says another. Why systems drift apart, and the three habits that keep them together."
---

Ask a finance person what their least favourite recurring task is and a surprising number will describe the same thing: exporting a report from one system, exporting a report from another, and spending a morning working out why the two do not agree.

This is not a rare failure. It is the default state of any business running more than one system, and it happens for reasons that are entirely mundane.

## Why two systems drift

**Deletes are invisible.** System A sends system B a list of records. A record that was deleted in A simply does not appear in the next payload. B cannot tell the difference between "this was deleted" and "this was not included in the batch," so it keeps the stale row forever. Six months later, B has a few hundred records that A has never heard of.

**Retries create duplicates.** A network hiccup, a timeout, a queue redelivery. The request runs twice. If the receiving side treats every message as new, you get two of something. Usually it is an order, sometimes it is a payment.

**Partial failures are silent.** A batch of 500 records, 497 accepted and 3 rejected for a validation reason nobody is watching. The job reports success. The three missing records surface at quarter end.

**Nobody defined who wins.** Both systems can edit the same field. Both do. There is no written rule about which one is authoritative, so whichever wrote last wins, and "last" depends on network timing.

None of these is exotic. All four are preventable, and all four keep happening because the prevention is unglamorous.

## The three habits that prevent it

### Tombstone your deletes

When a record disappears from the source, that fact has to be transmittable. Either the source emits a deletion event, or the sync compares full key sets and treats absence as deletion. You have to pick one deliberately. A sync that cannot express "this is gone" will accumulate ghosts.

Most sync bugs, in our experience, are deletion bugs wearing a costume.

### Make every write idempotent

Every operation that changes state should carry a key derived from something stable in the source: an order ID, a transaction reference, a content hash. The receiving side records the key. If it sees it again, it does nothing and reports success.

This is a small amount of work and it eliminates an entire class of bug. A retried request that creates a second charge is a much worse day than a request that fails loudly.

### Reconcile on a schedule

This is the one people skip, and it is the one that pays.

A scheduled job compares both sides and produces a report naming the records that disagree. Not a count. A count tells you there is a problem and nothing about where. Names, so somebody can look.

It costs about a day to build. It turns "we discovered a six-week discrepancy during the audit" into "we got an email on Tuesday morning about four records." Those are very different conversations.

## Doing the rare thing: run both

When you are replacing or connecting anything financial, run both systems in parallel for at least one full cycle and compare the outputs automatically.

Parallel running feels wasteful. It is the cheapest insurance in this entire category. It converts a judgement call ("do we think the new system is right?") into a measurement you can point at. When the numbers have agreed for a month, switching over is uneventful. That is the goal. Cutover day should be boring.

## What this looks like in practice

On [Eshop](/work/eshop-pos-ecommerce), the POS owns the product catalogue and overwrites on every sync. The merchant wants better photographs and longer descriptions. Store both in the same row and the next sync destroys the merchant's work.

The fix was splitting ownership at the field level: POS-owned columns the sync controls completely, merchant-owned columns it never touches, merged when read. That lets the sync stay aggressive and simple, which is exactly what you want a sync to be. It is not clever. It is just decided in advance rather than discovered in production.

## The uncomfortable summary

Integration problems are rarely technical problems. They are decisions nobody made.

Who owns this field. What happens on a delete. What we do when the same record changes on both sides in the same minute. Write those down in week one and the code is straightforward. Skip them and you will spend the next two years finding out what the code decided on your behalf.

---

**Two systems that disagree?** [Tell us which two](/contact) and what the handoff looks like today. We will come back with a scope, a price and a date.
