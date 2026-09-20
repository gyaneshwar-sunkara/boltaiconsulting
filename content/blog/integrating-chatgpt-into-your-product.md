---
title: "Integrating an LLM into Your Product Without Regretting It"
description: "The two integration patterns that survive real users, what the API actually costs at volume, and the five failures that catch most teams in the first month."
date: "2024-11-18"
author: "SillStack"
tags: ["LLM", "AI Integration", "Architecture", "Product Development"]
category: "AI & Development"
readTime: "11 min read"
featured: true
services: ["ai-integration"]
practices: ["ai-automation", "product-engineering"]
seoTitle: "Integrating LLMs Into Products"
---

Adding a language model to a product is easy. Adding one that is still switched on a year later is a different exercise, and the difference is decided almost entirely by decisions made before anybody writes a prompt.

This is the practical version: what to build, what it costs, and the failures that show up in month one.

## Start with the only question that matters

**Can the user tell when the output is wrong?**

Features that survive answer yes. Features that get quietly disabled answer no.

A model that is right nine times in ten is genuinely valuable when the tenth is visible — somebody notices, corrects it, moves on. The same accuracy is dangerous when the tenth is invisible, because people stop checking after a week or so and the errors accumulate with an air of authority.

Run every idea past that before costing anything.

## The two patterns worth building

### Retrieval over content you own

Do not ask the model to know things. Search your own material for the passages relevant to the question, hand those to the model, and ask it to answer from them with a citation back to the source.

This satisfies the test directly. When the retrieved passage is wrong, the citation exposes it. When nothing relevant comes back, a well-built system says so rather than inventing something.

The engineering is not in the prompt. It is in chunking documents at sensible boundaries, choosing and tuning an embedding approach, and then genuinely evaluating whether the right passage comes back for a realistic set of questions. Build an evaluation set of fifty real questions with known correct sources before you build the interface. Teams skip this, and it is the single best predictor of whether the thing is still in use next year.

### Extraction with a confidence threshold

The model reads something unstructured — a receipt, an invoice, a form, an inbound email — and returns structured fields. Anything below a confidence threshold goes to a review queue rather than into the database.

The threshold is the design. We use this in [Larder](/work/larder) for receipt capture: photograph a receipt, get stock movements, with anything uncertain held for a person. Without the threshold you have a system that is right most of the time and silently wrong the rest, which is worse than no automation at all.

Three things make it work: a threshold tuned against real examples rather than guessed, a review queue somebody actually works, and a record of every correction so you can tell whether accuracy is moving.

### What does not hold up

A general chat window bolted onto a product, asked to answer anything, with no retrieval and no verification path. It demos beautifully. It is abandoned within a quarter, because the first confidently wrong answer costs more trust than a hundred correct ones earn.

If a proposal's centrepiece is a chat box, ask what the feature is worth if nobody opens it. Most AI features work far better placed inside the workflow — a "summarise this" button where the document already is, rather than an assistant waiting to be consulted.

## What it actually costs

Pricing changes constantly, so work in shape rather than in numbers.

You pay per token, in and out, and output typically costs several times input. A token is roughly three-quarters of a word. The practical consequence is that **your cost is driven by input volume, not by how clever the feature is.**

That catches people. A support assistant that stuffs twenty retrieved passages plus a long system prompt into every request is paying for all of it on every single call, however short the answer.

Estimate like this: average input tokens per request, times requests per month, plus output tokens times requests. Do it for your realistic volume and again for ten times that. If the second number is alarming, you have learned something now rather than after launch.

Three levers, in order of effect:

**Retrieve less.** Five well-chosen passages beat twenty mediocre ones on both cost and quality. Better search is cheaper than more context.

**Cache.** A surprising share of requests in most products are near-duplicates. Cache on a normalised form of the input, with a sensible expiry. This is often the largest single saving available and it is not sophisticated.

**Use a smaller model for the easy work.** Classification, routing, short extraction and summarisation rarely need the frontier model. Reserve it for the requests that are genuinely hard. Route by request type, not by hope.

## Architecture: the parts people leave out

The naive integration calls the provider from your application and returns the result. It works until it does not. Four things belong in the design from the start.

**Your own abstraction over the provider.** One internal interface, one place that knows about the vendor's SDK. Providers change pricing, deprecate models and have outages. If the vendor's client is called from thirty files, all of those are your problem on the day something changes.

**Streaming.** Responses take seconds. Streaming turns "is this broken?" into "it is working", and it is a small amount of work for a large perceptual difference. If a request is genuinely slow, stream it or move it to a job with a notification — do not leave a spinner running for fifteen seconds.

**Timeouts, retries and a fallback.** Providers have bad days. Set an aggressive timeout, retry with backoff and jitter, and decide in advance what the product does when the model is unavailable. "The page errors" is a decision; make it deliberately rather than by omission.

**Logging of prompts, responses and cost, per request.** You cannot improve what you cannot see, and you cannot debug a complaint about a wrong answer without the input that produced it. Log the model version too, because behaviour changes between versions and you will want to know which one produced something.

## Prompts: less mystique than advertised

Most of the gains are unremarkable.

Say what the model is and who it is for. Give it the context explicitly rather than assuming. State the output format precisely, and if you need structured output, use the provider's structured output or function-calling support rather than asking politely for JSON and parsing hopefully. Tell it what to do when it does not know — an explicit instruction to say so is more effective than most people expect.

Two or three examples of good output beat several paragraphs of description.

And treat prompts as code. Version them, keep them in the repository, and re-run your evaluation set when you change one. A prompt tweak that fixes the case in front of you and breaks four others is the most common self-inflicted wound in this work, and without an evaluation set you will not even know it happened.

## The five failures, in the order they arrive

**Confident invention.** The model produces something plausible and wrong. Mitigation: retrieval with citations, an explicit instruction to decline when unsupported, and a visible path for the user to check. Do not try to prompt your way out of this — it is an architecture problem.

**Inconsistency.** The same input gives different answers on different days. Lower the temperature for anything that should be deterministic, pin the model version explicitly, and hold the prompt stable. Providers update models; if you have not pinned, your behaviour changes without a deploy.

**Cost running away.** Usually one of three things: an unbounded retry loop, a feature that turned out to be far more popular than forecast, or a growing context window nobody noticed. Set a hard spend alert on day one, before launch, not after the first surprising invoice.

**Slowness.** Long prompts and large outputs are slow. Stream, cache, use a smaller model where it suffices, and move anything genuinely long-running into a background job.

**Context limits.** Long conversations and large documents overflow the window. Summarise older turns rather than truncating them, chunk documents deliberately, and retrieve the relevant part instead of sending everything and hoping.

## Before you ship

- The evaluation set exists and the feature passes it.
- A spend alert is configured and someone receives it.
- Prompts, responses, model version and cost are logged per request.
- There is a defined behaviour when the provider is down.
- A person can see what the model got wrong, and correct it.
- You know what the feature costs at ten times current volume.
- Somebody owns the review queue, by name.

If you cannot tick the first and the last, the feature is not ready regardless of how well it demos.

## What we would tell you on a call

Pick the narrowest useful thing. Ship it where a wrong answer is immediately visible and costs an eyebrow rather than money. Log everything. Watch what people actually correct for a month, and let that tell you whether to expand.

The most common mistake is not technical. It is starting with the most impressive feature instead of the most verifiable one.

---

**Thinking about adding one?** [Tell us what you want the model to do](/contact) and we'll tell you whether it is a good fit before anyone writes a prompt.
