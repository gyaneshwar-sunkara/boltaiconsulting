---
title: "Seven Ways Software Projects Go Wrong"
description: "The failure patterns that turn a three-month project into a fourteen-month one, what each one costs, and the cheap check that catches it early."
date: "2024-11-15"
author: "SillStack"
tags: ["Risk", "Software Development", "Project Management", "Procurement"]
category: "Business & Strategy"
readTime: "9 min read"
featured: false
services: ["product-discovery", "web-applications"]
practices: ["product-strategy", "product-engineering"]
seoTitle: "Why Projects Go Wrong"
---

Software projects rarely fail suddenly. They fail slowly, in a way everybody can see and nobody quite names, and by the time the conversation happens the expensive decisions are eighteen months old.

These are the seven patterns we see most. None is exotic. Each has a cheap check that catches it early, which is the only part that matters, because all of them are nearly free to fix in week one and brutal to fix in month six.

## 1. Building what was asked for instead of what is needed

Somebody describes a feature. It gets built exactly as described. It does not get used.

The gap is almost always that the request was a *solution* and nobody went back to the *problem*. "We need a dashboard with configurable widgets" is a solution. The problem underneath it might be that one person cannot answer one question on a Monday morning, and a single report would have done it.

This produces the most expensive artefact in business software: the elaborate reporting module nobody opens. Ask afterwards what people actually wanted and a surprising share of the answer is some version of "let me export it so I can look at it in a spreadsheet".

**The check:** for every significant feature, write down what somebody will do differently because it exists. If there is no answer, you have found a feature to cut. The Standish Group's much-cited study of delivered software put the share of features that are rarely or never used at around two-thirds; your product is probably not the exception.

## 2. Nobody can make a decision

The most common cause of delay on a software project is not engineering. It is waiting.

An engineer hits an ambiguity in week two — what should happen when the approver is also the requester? — and asks. The question goes to a project manager, who takes it to a steering group, which meets fortnightly. Three weeks pass. Meanwhile the engineer has either guessed or moved to other work and lost context.

Multiply that by the twenty ambiguities in any real build and you have your overrun, without anybody having written a single line of bad code.

**The check:** name one person who can decide without convening anybody, and give them the authority in writing. If no such person exists, that is the finding, and it is worth knowing before you start rather than in month three.

## 3. Architecting for a scale you will never see

Microservices with no users. An orchestration layer for a service that gets forty requests an hour. Multi-region replication before a single region has been stressed.

Every one of those choices is defensible in isolation and together they produce a system that costs several times more to build and considerably more to change, because every alteration has to be made in five places instead of one.

The cruel part is the second-order cost. Complexity slows you down exactly when you most need to move, which is the first year, when you are still finding out whether anyone wants the thing.

**The check:** ask what load the design assumes, then ask what load you have. If those numbers are two orders of magnitude apart, you are paying for a problem you do not have. Build for the scale you can see, and re-architect when the numbers force you to. That moment is a good problem to have and most products never reach it.

## 4. Scope that grows one reasonable request at a time

Nobody adds thirty features on purpose. They add one, eleven times, and each one is individually sensible and agreed in a meeting where saying no would have been awkward.

A storefront scoped as cart, checkout and admin arrives at launch with wishlists, reviews, loyalty points, subscriptions, gift cards and multi-currency. The launch is a year late, the budget has roughly tripled, and the most common piece of customer feedback is that it has become hard to buy something.

**The check:** a written out-of-scope list, agreed at the start, and a rule that every addition is re-quoted in writing with its effect on the date before work begins. Not to stop changes — you will need some — but to make their cost visible at the moment of asking rather than at the end.

## 5. Technical debt treated as a personality flaw

"We will clean it up later" is not a lie. It is a genuine intention that collides with a deadline every single sprint.

What it looks like from the business side is odd: year one is fast, year two is slower and nobody can say why, and by year three the estimate for a small change is a week and the team is not exaggerating. Eventually somebody proposes a rewrite, which is the most expensive project a business can undertake and has the worst completion rate of any kind of software work.

**The check:** ask how long a one-line change takes to reach production, end to end. That number is your debt level, expressed honestly. If it is measured in days, you have a problem that is still cheap.

## 6. The word "simple"

A business asks for a "simple intake form". Engineering hears a form that adapts to the answers and builds a multi-step wizard with conditional logic and validation. The business meant one page, six fields and a submit button.

Nobody was careless. "Simple" carried completely different meanings on each side of the conversation and neither side had any reason to suspect it.

Every project has a few of these words. *Real-time. Reporting. Integration. User.* They all sound unambiguous and none of them are.

**The check:** a mockup in the first week, however rough. Not a description of the screen, the screen. Five minutes of looking at a picture resolves misunderstandings that survive an hour of talking.

## 7. Choosing technology for the wrong reason

A stack gets picked because it is interesting, or because a big company uses it, or because it will read well when raising money. Those are all real motivations and none of them is about your project.

The consequences arrive later: a small hiring pool, thin library support, documentation gaps, and a maintenance burden that lands on whoever inherits the system. The clever choice is enjoyable for the people who made it and expensive for everybody after them.

**The check:** ask which requirement forced the choice. A good answer names a constraint — this has to work offline, this has to handle this throughput, the team already knows this. A bad answer describes a preference. More on this in [why your agency's tech stack should not be yours by default](/blog/why-tech-stack-flexibility-matters).

## What these have in common

Six of the seven are decided before anyone writes code, and all seven are cheap to catch in week one.

That is the whole argument for spending a week on scope before building anything. Not as process for its own sake. Because a week of uncomfortable questions at the start is the only intervention that reliably beats six months of expensive discovery at the end.

---

**Recognise any of these?** [Tell us which ones](/contact) and we'll give you an honest read on how expensive it is likely to get.
