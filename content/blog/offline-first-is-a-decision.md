---
title: "Offline-First Is Not a Feature, It Is a Decision You Make on Day One"
description: "Software used in a stockroom, a basement or behind a fridge will lose its connection. Retrofitting offline support is one of the most expensive changes in mobile development."
date: "2026-09-08"
author: "SillStack"
tags: ["Mobile", "Offline", "Architecture", "Retail"]
category: "Engineering"
readTime: "7 min read"
featured: false
services: ["mobile-solutions", "ecommerce-and-pos"]
practices: ["devices-and-edge", "product-engineering", "data-and-sync"]
seoTitle: "Offline-First Mobile Apps"
seoDescription: "Software used in a stockroom or basement will lose its connection. Retrofitting offline support is among the costliest changes in mobile."
---

Software gets built in offices with good wifi and used in places that do not have it. Stockrooms, basements, walk-in fridges, warehouses with thick walls, a counter at the back of a shop where the signal has always been bad.

If your users work in those places, the network is not a reliable dependency, and designing as though it is produces software that fails exactly when someone is busiest.

## Why retrofitting is so expensive

An online-first application assumes the server is authoritative and reachable. Every action is a request. The UI waits for a response. State lives remotely.

Adding offline support to that is not a feature. It is a change to where truth lives. You'll need a local store, a queue of pending operations, conflict resolution, and a UI that can represent "this has happened locally but not yet remotely." That is most of the application's data layer.

Building it that way from the start costs somewhat more than the naive version. Adding it in year two costs a rewrite of the layer everything else sits on.

## What offline-first actually means

**The local store is authoritative while offline.** The device can read and write on its own, with nobody else's permission. Not a read-only cache: a real store the application works against.

**Operations queue as intent.** Not "the new value is 47" but "decrement by 3." When two devices act while disconnected, intents can both be applied. Absolute values cannot; the last one to sync silently erases the other.

This distinction is the single most important design decision in the whole area, and it is easy to get wrong because storing values feels simpler.

**Conflicts have a written policy.** Decided in advance: last-write-wins, or a merge rule, or escalate to a human. Undefined means whatever the sync code happens to do, which nobody chose and nobody can explain later.

**The UI tells the truth.** Show what is pending. People trust software that says "3 changes waiting to sync" far more than software that pretends everything is fine and then quietly reverts something an hour later.

## Where we learned it

[Larder](/work/larder) is a household inventory system, which sounds domestic and is actually a distributed systems problem. Two people putting shopping away at the same time, one phone with no signal behind the fridge, both editing the same quantities.

Movements rather than counts, queued locally, reconciled with an explicit policy. The same shape turns up in [Eshop](/work/eshop-pos-ecommerce), where a till has to keep trading through an internet outage and reconcile afterwards, because a cloud-only till means somebody else's outage becomes your closed shop.

Different industries, identical problem.

## Test it properly

Emulators do not reproduce the failures that matter. Test on the real devices, in the real building, and specifically test the awkward cases:

- Network drops halfway through a sync.
- Two devices edit the same record while both offline.
- A device is offline for three days and then comes back.
- The app is force-quit with operations still queued.
- The device clock is wrong. It happens more than you would think, and it breaks anything relying on timestamps for ordering.

## When you do not need it

Be fair about this. If your users are at desks on reliable connections, offline-first is cost without benefit. An honest loading state and good error handling are enough.

The question is not whether connectivity is *sometimes* poor. It is whether someone will be standing in front of a customer, or halfway through a stock count, when it fails. If yes, decide it on day one.

---

**Building for somewhere with bad signal?** [Tell us where the software gets used](/contact) — the warehouse, the van, the kitchen — and we'll tell you whether offline-first is worth what it costs.
