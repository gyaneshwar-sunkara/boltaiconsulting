---
title: "What Actually Goes in a Software Specification"
description: "A specification you can quote against is not a wish list. Here is what a useful one contains, what it deliberately leaves out, and how to tell a weak one."
date: "2026-09-17"
author: "SillStack"
tags: ["Specification", "Product Development", "Procurement", "Fixed Price"]
category: "How We Work"
readTime: "8 min read"
featured: false
services: ["product-discovery", "web-applications"]
practices: ["product-strategy", "product-engineering"]
seoTitle: "What Goes in a Spec"
seoDescription: "A specification you can quote a fixed price against is not a wish list. What a useful one contains, what it leaves out, and how to spot a weak one."
---

Every firm that quotes fixed price says the same thing: the price holds against a written scope. Far fewer will show you what that document contains, which is unhelpful, because the document is the thing you are actually buying in week one.

Here is what is in ours, and more usefully, what has to be in any specification for a fixed number quoted against it to mean anything.

## The test a specification has to pass

A specification is good enough when two different engineering teams, handed only that document, would build substantially the same system.

That is a high bar and it is the right one. It rules out almost everything that gets called a spec: feature lists, user story backlogs, slide decks with screenshots, and the twelve-page document a business analyst produced that describes what the software is *for* without ever saying what it *does*.

If two teams would build different things, the gap between them is where your budget overrun lives. That gap has a price and you'll pay it.

## What has to be in it

### Every screen, named and described

Not wireframes necessarily, though they help. An enumerated list. This screen exists, it is reached from here, it shows these fields, a user with this role can do these three things on it and cannot do these two.

The enumeration is what makes it quotable. "An admin area" is not a number. "Nine screens, of which three are list-and-filter, four are forms and two are read-only reports" is.

### The rules, stated as rules

This is the part that gets skipped, and it is the part that costs money.

"Approve a purchase order" is not a rule. A rule is: a purchase order over $5,000 needs approval from a user with the manager role at the same location; between $1,000 and $5,000 it needs any manager; below $1,000 it auto-approves. Orders raised by a manager still need a second approver. A rejected order returns to draft and keeps its number.

Writing that down takes twenty minutes and a conversation with the person who actually does it. Not writing it down means an engineer invents a plausible version in month two, and you discover in month three that your business does it differently.

### What happens when things go wrong

Every system has a happy path and every specification describes it. The value is in the rest.

What happens when the integration is down when an order needs to sync? When two people edit the same record? When a payment succeeds at the gateway but the callback never arrives? When somebody uploads a file in the wrong format, or a 400MB one? When a user is deleted but their approvals are still in the chain?

You do not need an answer for every one of these. You need the important ones identified, because the difference between "queue it and retry with backoff" and "show an error" is a week of work and a decision only you can make.

### Roles and what each one cannot do

Permissions are specified backwards almost universally. People write down what each role can do, and the software ends up enforcing exactly that list while quietly allowing everything nobody thought about.

A useful spec states the negative. A location manager cannot see other locations' costs. A viewer cannot export. A supplier contact can see their own orders and nothing else, including through a direct URL.

We wrote about why this matters most in multi-site businesses in [multi-location is a permissions problem](/blog/multi-location-is-a-permissions-problem).

### The data you already have

Where it currently lives, what shape it is in, how much of it there is, and who decides what "correct" means. Migration is routinely the single most underestimated part of a build, because the existing data is always messier than anyone remembers and the cleanup is a business decision, not a technical one.

### What is explicitly out of scope

The most valuable page in the document.

Fixed price is only fair to both sides if both sides know where the line is. An explicit out-of-scope list (the mobile app, the second integration, the reporting module, the single sign-on) is not a firm protecting itself. It is the thing that makes a mid-project conversation about adding one of them a normal commercial discussion rather than an argument.

### Acceptance, in a form that can be checked

How you will know it is done. Not "works correctly" but a list of things a person can sit down and verify: this user can complete this task, this report matches this existing figure, this order appears in the point of sale within five minutes.

## What is deliberately not in it

**Implementation detail.** Which framework, which queue, which hosting. Those are our decisions to make and to be accountable for, and pinning them in a document signed in week one removes the ability to make a better choice in week three.

**Design polish.** The spec establishes what a screen contains and what it does. Exact spacing, colour and copy get settled while it is being built, because they are cheap to change then and expensive to argue about in advance.

**Everything you might eventually want.** A specification that covers the next three years is a specification nobody can price. Scope the version that goes live, list the rest as a known roadmap, and quote that separately when you get there.

## How to tell a weak specification

You are reading one if:

- It describes benefits rather than behaviour. "Streamlines the approval process" is marketing copy that has wandered into an engineering document.
- Numbers are absent. No counts of screens, roles, integrations, or records to migrate.
- It has no out-of-scope section.
- The word "etc." appears. Every "etc." is an unpriced decision that will be made by whoever is least equipped to make it, at the least convenient moment.
- Nobody who does the work daily has read it. A spec signed off only by management describes the process as management believes it happens, which is reliably not how it happens.

## What it costs to do properly

One to two weeks, and real attention from your side: a walkthrough of how the work actually happens, and a proper read of the document before you sign it. No code is written in that time, which some clients find uncomfortable.

The trade is that the number quoted against it holds, and that the arguments happen in week one when they cost a conversation rather than in month three when they cost a rebuild. Almost every project we have seen go badly was ambiguous long before it was late.

You should also keep the document whether or not you continue. A specification is portable: it is comparable against any other firm's quote precisely because they would be quoting the same thing. A firm that won't let you leave with it is telling you something.

---

**Not sure what you are actually asking for yet?** [Describe how the work happens today](/contact) and we will tell you whether a discovery week is worth it before you commit to a build.
