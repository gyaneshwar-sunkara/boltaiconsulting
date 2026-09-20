---
title: "Building an MVP That Is Actually Minimum and Actually Viable"
description: "Most MVPs fail one half of the name. How to find the single assumption worth testing, and the four cheaper things to try before you build software."
date: "2024-11-12"
author: "SillStack"
tags: ["MVP", "Startups", "Product Development", "Scope"]
category: "Business & Strategy"
readTime: "8 min read"
featured: false
services: ["product-discovery", "web-applications"]
practices: ["product-strategy", "product-engineering"]
seoTitle: "Building a Useful MVP"
---

The term has been diluted into uselessness. To one founder an MVP is a barely-working prototype they are embarrassed to show anyone. To another it is a full product with a smaller marketing budget. Both spend months building the wrong thing, in opposite directions.

The original idea was narrower and better: the smallest thing that tests whether your riskiest assumption is true.

Everything useful follows from taking that definition seriously, starting with the uncomfortable part — most MVPs fail because nobody identified the assumption.

## Name the assumption first

Every new product rests on a stack of beliefs. One of them is load-bearing and the rest are details.

For a marketplace it is usually supply: will enough sellers list before there are buyers? For a workflow tool it is usually behaviour change: will people abandon the spreadsheet they have used for six years? For anything sold to enterprises it is usually procurement: will somebody with a budget sign, or does everyone say they love it and nobody buys?

Write down the one belief that, if false, makes the whole thing pointless. Then ask a blunt question: **what is the cheapest way to find out?**

Almost never is the answer "build the product". That is what makes this worth doing before anybody writes code.

## Four things that are cheaper than software

Work down this list. Stop when you have your answer.

**A page and some traffic.** Describe the product as if it exists, put it somewhere people who have the problem will see it, and count who asks for it. A weak result here costs you a fortnight and a small budget. The same weak result discovered after a build costs you a year.

The useful move when the page underperforms is to change *how you describe it* and run again before you change the thing itself. Positioning fails far more often than concepts do, and it is much cheaper to fix.

**Doing it by hand.** If the eventual product matches suppliers, or generates a report, or routes a request, do that manually for ten customers. You will find out whether anyone wants it and — more valuably — exactly which decisions the software will have to make, which is most of a specification.

This feels like cheating. It is not. It is the highest-information week available to you, and several well-known companies ran this way for considerably longer than they admit.

**Selling it before it exists.** For anything with a real price, take the conversation to the point of a signature. Not a survey. A letter of intent, a deposit, a purchase order. Enthusiasm is free and abundant; commitment is neither, and only one of them predicts revenue.

**Using something that already exists.** Sometimes the honest answer is a product you could buy this afternoon, or a spreadsheet and a scheduled export. Finding that out costs an afternoon and saves the entire budget. We would rather tell a client this on the first call than take the work.

## If you do need to build

Then keep the definition. Smallest thing that tests the assumption.

**One user, one path, one outcome.** Pick the single most important user, the single most important thing they do, and the single result that tells you whether it worked. Everything else waits. If you cannot describe the product in one sentence, it is not minimum.

**No settings.** Configuration is how teams avoid making decisions. Every option you add is a decision you have deferred, doubled in cost, and handed to a user who knows less about your product than you do. Pick the default. You can add the option later if people ask, and mostly they will not.

**No admin panel, at first.** You are the admin. Run queries directly, edit records by hand, do it manually. An admin interface is a real product with real screens and it is entirely for internal convenience at a stage where you have almost no internal.

**Boring infrastructure.** One application, one database, a managed host. Not microservices, not a queue you do not need, not multi-region anything. The scale problems you are designing around are problems you would be fortunate to have, and every one of those choices slows down the changes you will definitely need to make.

**Manual where automated is hard.** If a step is genuinely difficult to automate and happens four times a day, do it by hand for now. Automate when it hurts.

## The part everyone skips

Decide *before you launch* what result would make you stop.

Write down the number. Not "we'll see how it goes". A specific threshold: this many signups, this many activated, this many who come back in week two, this many who pay.

The reason to do it in advance is that afterwards you will not be able to. Every ambiguous result can be explained: the timing was off, the traffic was poor quality, the onboarding needed work. All of those are sometimes true, which is exactly why they are such effective ways to avoid a conclusion. A threshold set beforehand is the only honest test you will get.

And genuinely commit to the stop. The whole point of doing something small is being willing to throw it away. If you are not willing, you did not build an MVP, you built version one of something you were going to build regardless.

## What people get wrong in both directions

**Too minimum** looks like: it does not work reliably, it is confusing, it is missing the one thing that would make it usable at all. Then a poor result tells you nothing, because you have tested your execution rather than your idea. Minimum means fewer features, not worse ones. The handful of things it does should work properly.

**Too viable** looks like: six months, a full feature set, a settings page, an admin console, three integrations. By the time it ships you have spent the money that would have funded the pivot. This is the more common and more expensive failure, and it usually comes from a genuine-sounding argument about competitors or investors or first impressions.

The honest version of that argument: if your product's advantage requires six months of features to demonstrate, the assumption you should be testing is whether that advantage matters to anyone.

## What we would do

If you came to us with an idea, the first conversation would be about which assumption is load-bearing and whether software is the cheapest way to test it. Sometimes it is not, and we would say so.

When it is, the scope we would argue for is smaller than the one you arrived with — usually a good deal smaller, and usually including something you were sure was essential. That conversation is uncomfortable and it is the most valuable part of the engagement, because the cost of cutting a feature in week one is a conversation and the cost of cutting it in month four is everything you spent building it.

---

**Not sure what you are actually testing?** [Tell us what you are trying to prove](/contact) and we'll help you cut the scope down to the version that proves it.
