---
title: "Why Your Agency's Tech Stack Shouldn't Be Yours by Default"
description: "Every firm has a preferred stack and most of the reasons are honest. How to tell when the preference is serving your project and when it is serving theirs."
date: "2024-11-08"
author: "SillStack"
tags: ["Architecture", "Procurement", "Technology Choice", "Due Diligence"]
category: "Engineering"
readTime: "8 min read"
featured: false
services: ["product-discovery", "legacy-modernisation"]
practices: ["product-engineering", "platform-engineering"]
seoTitle: "Whose Tech Stack Is It"
---

Every development firm has a stack it prefers, including this one. That is not a scandal and a firm that claims otherwise is either inexperienced or not being straight with you.

The question worth asking is narrower: **is the preference being applied to your project, or is your project being applied to the preference?**

Those look identical in a proposal. They diverge sharply in month four.

## The honest reasons a firm has a default

Worth stating plainly, because the cynical read is not usually the right one.

A team that has shipped forty projects in one stack is genuinely faster and genuinely safer in it than in something they learned last month. They know its failure modes. They have the deployment pipeline, the monitoring, the libraries they trust, the pattern for the thing that always turns out to be harder than expected.

Reuse compounds that. A firm with a maintained platform — authentication, permissions, billing, notifications, audit logging — starts your project at the part that is specific to you. That is real value and it is most of why a short delivery window is possible at all. Ours is written up in [the Sill case study](/work/sill-platform), and we will tell you plainly that it is a TypeScript platform, because that constrains what we are good for.

So a default is not a red flag. A default that never bends is.

## Where it goes wrong

The failure has a consistent shape.

A requirement exists that the chosen stack handles awkwardly. Real-time inventory across dozens of sites, say, or heavy scheduled processing, or something with hard offline requirements. It gets worked around rather than designed for. A second runtime appears alongside the first to handle the part the original could not. Now there are two deployment pipelines, two dependency sets, and an integration between them that was never in anybody's plan.

None of that is visible when you sign. It arrives in month four as a change request, priced as new work, and described as something that could not have been foreseen.

It could have been. The awkwardness was predictable from the requirements, and the requirements existed before the stack was chosen.

## The four questions that expose it

**Which requirement forced this choice?**

The single most useful question in the whole selection. A good answer names a constraint: this has to work with no signal, this has to handle this volume, the compliance regime restricts the options, your team already runs this. A weak answer describes a property of the technology — it is modern, it is fast, it scales — without connecting it to anything about you.

**What would have made you choose differently?**

A firm with real judgement can answer this immediately and specifically. "If you needed native platform features on day one we would not use React Native." "If this had to run on your own hardware in a factory we would not put it on serverless." A firm that cannot name a case where its default is wrong has not thought about it as a decision.

**Who can maintain this after you?**

The question people regret not asking. How many developers within reach of your business know this stack? What does hiring for it look like? If the answer involves a niche framework and a small community, you have bought a dependency on this specific firm, whether or not anybody intended that.

**What happens if we want to leave in two years?**

Ownership of the code is table stakes. The real answer is about whether the code is *transferable*: standard frameworks, conventional structure, documented, without a proprietary layer in the middle that only they understand.

## The proprietary framework problem

Some firms build their work on an internal framework they wrote and do not publish.

There is a legitimate version. A maintained platform of well-separated components on top of standard technology, which you could in principle carry on without them. A shared foundation is how a small team ships more than its size suggests, and the honest test is whether the underlying code is conventional and whether you could hire somebody to work on it from the open market.

The other version is a custom framework that replaces the standard one. Your application is written against their abstractions rather than against anything a new developer would recognise. Leaving means a rewrite. Some firms are explicit about this and price accordingly. Others are not.

Ask directly: if we took this code to another firm tomorrow, what would they need to learn that is not publicly documented? The answer, and how comfortable the firm is giving it, tells you most of what you need.

## When the constraint really does decide

There is a version of this where the firm's preference is irrelevant because the requirements have already narrowed the field.

Take a product handling protected health information. A team arrives having decided on a particular backend-as-a-service, and it is a reasonable choice on its own terms — fast, well documented, it would work. What decides it is not preference. It is that the platform has to be covered by a business associate agreement, that the video layer has to be too, and that encryption at rest has to be demonstrable to an auditor rather than assumed. That reduces the options to a specific list before anyone writes a line of code.

What usually survives from the original request is more than clients expect. If the team knows React, the front end stays React. What changes is underneath, and it changes because of a compliance requirement rather than taste.

That is the pattern to look for in any recommendation you are handed: can the firm point at the requirement that forced it?

## Boring is usually correct

One bias worth holding, and it cuts against the interesting answer.

Widely-used, well-supported technology with a large hiring pool beats elegant technology almost every time for business software. Not because the elegant option is worse at the thing it does. Because your system will be maintained for years by people who are not in the room now, and every unusual choice is a tax on all of them.

The exciting choice is enjoyable for the firm that makes it and expensive for whoever inherits it. That trade is fine when you are the one who will inherit it. It is not fine when somebody else is making it on your behalf.

## What good looks like

A firm that tells you what it is good at and what it is not. That names the constraint behind each recommendation. That can describe a project it turned down because the requirements pointed somewhere else. That gives you the code in a form somebody else could pick up.

We are a TypeScript shop with a platform underneath, and that is exactly why we are the wrong firm for some projects. If you need a different architecture, a different language, or a hosting arrangement we do not run, you would be paying us to learn on your money — and we would rather say that on the first call than discover it together in month three.

---

**Being sold a stack you are unsure about?** [Tell us what you are running today](/contact) and what you are being offered. We'll give you a straight read on both.
