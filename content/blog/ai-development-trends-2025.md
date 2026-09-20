---
title: "AI Development Trends in 2025: What's Actually Working"
description: "Six things AI is genuinely good at inside production software, two that are still demos, and the test that separates them before you commit a budget."
date: "2024-11-17"
author: "SillStack"
tags: ["AI", "Trends", "Software Development", "Engineering Practice"]
category: "AI & Development"
readTime: "8 min read"
featured: true
services: ["ai-integration"]
practices: ["ai-automation", "product-engineering"]
seoTitle: "AI Development Trends"
---

The gap between what AI can do in a demo and what it can do in a product somebody depends on is wider than the marketing suggests. Not because the models are weak. Because a demo gets to pick its inputs and a product does not.

What follows is the version we would give a client on a call: what we reach for, what we have watched fail, and the one question that sorts the two.

## The test

Before any of the specifics, this is the thing worth internalising.

**Can the user tell when it is wrong?**

Every AI feature that survives contact with real users answers yes. Every one that gets quietly switched off answers no. It really is that blunt. A model that is right ninety per cent of the time is enormously useful when the other ten per cent is visible, and actively dangerous when it isn't, because people stop checking after about a week and then the errors compound in silence.

Hold that up against anything you are being sold.

## Retrieval, not recall

The single biggest shift in how competent teams build with language models: stop asking the model to know things.

The pattern is straightforward. A question comes in. You search your own content for the passages that bear on it. You hand those passages to the model and ask it to answer using them, citing which passage it used. The model does the phrasing. Your search does the knowing.

This works because it satisfies the test. If the retrieved passage was wrong, the citation shows it and somebody can check. It also fails in a useful direction: when nothing relevant comes back, a well-built system says so rather than inventing something plausible.

The work is not the prompt. It is in chunking your documents sensibly, choosing an embedding approach, and then actually evaluating whether the right passage comes back for a realistic set of questions. That evaluation is the step teams skip, and skipping it is why so many internal knowledge assistants are quietly abandoned three months after launch.

## Extraction with a threshold

Reading something unstructured and returning structured fields: a receipt, an invoice, a form, an email. Models are genuinely good at this now.

What makes it safe is the threshold. Anything the model is not confident about goes to a person instead of straight into the database. We use exactly this in [Larder](/work/larder) for receipt capture — photograph a receipt, get stock movements, with anything uncertain held for review.

Without a threshold you have a system that is right most of the time and silently wrong the rest, which is worse than no automation at all, because now nobody is checking and the errors have an air of authority.

## Code assistance, where the decision is already made

Once you know what you want — this endpoint, these fields, this validation — generating it is faster than it was three years ago. Test scaffolding too. And getting oriented in an unfamiliar codebase, which on modernisation work is the biggest practical gain we see.

Where it stops helping is the part before that: deciding what to build. A model will implement the wrong thing quickly and with total confidence, and the expensive failures in software have always been specification failures rather than typing failures.

We went into the economics of this separately in [what AI actually changes about the cost of building software](/blog/how-ai-reduces-software-development-costs).

## Features in the flow, not a chatbot in the corner

A chatbot is optional. Users have to decide to open it, and most never do. It competes with the task they came to do.

The same capability placed inside the workflow behaves completely differently. A "generate description" button in the product editor gets used, because the person is already writing a description. Natural-language search gets used because everybody uses search. A summary at the top of a long document gets read because it is in the way.

Nothing about the model changes between those two. What changes is that the feature stops asking to be chosen.

If a proposal's centrepiece is a chat window, ask what happens to the value if nobody opens it.

## Agents, carefully

An agent — a model that plans, calls tools and loops until it thinks it is finished — is real and it is early.

Single-task versions work now. Pull these figures out of this document set. Summarise this thread. Draft the reply for a person to send. Narrow scope, bounded tools, a human at the end.

Multi-step autonomous systems that chain a dozen decisions together are still mostly demos. The failure mode is compounding: a small error at step two becomes a confident wrong conclusion at step nine, and nothing in between flagged it. If you are building one, the useful discipline is checkpointing — make each step's output inspectable, and make the loop stoppable.

## Local models, for a narrow set of reasons

Running a smaller model on your own infrastructure makes sense in three situations: the data legally cannot leave, the volume is high enough that per-token pricing dominates your costs, or you need latency that a network round trip cannot give you.

Outside those, hosted models are better and cheaper than the engineering time you would spend. Smaller open models have improved a great deal, but "improved a great deal" is not the same as "matches the frontier", and on messy real-world inputs the gap still shows.

The honest version of this decision is arithmetic, not ideology. Work out your monthly token spend, then compare it against the cost of somebody maintaining an inference stack.

## Two things still not working

**Fully automated testing.** Generating test cases around code you have written, yes. Deciding which behaviours are worth asserting, no, and that judgement is most of what makes [a test suite worth having](/blog/the-test-suite-that-earns-its-keep). A suite of generated tests that assert whatever the code currently does will happily lock in a bug.

**Unsupervised anything that touches money or permissions.** The failure modes are silent and the blast radius is large. Draft, suggest, flag for review — fine. Execute without a person, not yet.

## What we would actually do

If you are considering a first AI feature, pick the one where a user would immediately notice a wrong answer, and where a wrong answer costs an eyebrow rather than money. Ship that, watch what people actually correct, and let the correction log tell you whether the thing is improving.

That is unglamorous advice. It is also the difference between a feature that is still switched on next year and one that quietly stopped being used in March.

---

**Want to add AI to your product?** [Tell us what you are hoping it will do](/contact) and we'll tell you honestly whether it is the right tool for it.
