---
title: "Idempotency: The One Word That Stops You Charging Someone Twice"
description: "The most common serious bug in payment code is not fraud or a failed gateway. It is a retry that creates a second charge, and it is entirely preventable."
date: "2026-09-10"
author: "SillStack"
tags: ["Payments", "Integration", "Reliability", "Architecture"]
category: "Data & Integration"
readTime: "6 min read"
featured: false
services: ["systems-integration", "ecommerce-and-pos", "web-applications"]
practices: ["payments-and-commerce", "systems-integration", "data-and-sync"]
seoTitle: "Idempotency in Payments"
---

A customer clicks pay. The request goes out. The network stalls. The browser retries, or the customer clicks again because nothing happened, or the queue redelivers the message because it never saw an acknowledgement.

Two charges. One customer. A support ticket, a refund, and a small permanent dent in how much that person trusts you.

This is the most common serious defect in payment code, and it has a well-understood fix that takes about an afternoon.

## What idempotent means

An operation is idempotent if performing it twice has the same effect as performing it once.

Reading is naturally idempotent. Setting a value to `true` is idempotent. Incrementing a counter is not. Creating a charge is very much not.

The goal is to make the not-idempotent operations behave as if they were.

## How it works in practice

Generate a key for the operation before sending it, derived from something stable. An order ID, a cart identifier, a UUID created when the checkout began. Not a timestamp, and not a random value generated at send time, because a retry would generate a different one and defeat the whole thing.

Send the key with the request. The receiving side:

1. Checks whether it has seen the key.
2. If yes, returns the original result without doing anything.
3. If no, performs the operation, records the key with the result, and returns it.

Every major payment processor supports this directly, usually as an `Idempotency-Key` header. Use it. It is free and it eliminates the entire class of failure.

For your own internal operations, you implement the same pattern: a table of processed keys with a unique constraint, and the database enforces correctness rather than the application remembering to.

## The webhook is the source of truth

The companion mistake is confirming an order based on the browser redirect after payment.

Users close tabs. Networks drop. Phones lock. The redirect is a convenience for the user, not a reliable signal of what happened. If your order state depends on the customer's browser successfully returning to your site, some percentage of paid orders will never be marked as paid.

Confirm server side, from the processor's webhook. Verify the signature. Make the handler idempotent, because processors deliberately redeliver webhooks and expect you to cope.

## Reconcile daily, not monthly

Even with all of that, do a scheduled comparison between your ledger and the processor's records, every day.

A discrepancy found the next morning still has a traceable cause: you know which deploy went out, what the traffic looked like, which records were involved. The same discrepancy found at quarter end is archaeology, and the person doing it will not enjoy it.

Daily reconciliation that reports specific mismatched transactions by reference, not a count, is a day of work and it's the difference between catching a problem and discovering one.

## Never hold card data

Worth stating because it still comes up. Card numbers should never touch your servers. Hosted fields in the browser, tokenisation at the processor, a token in your database.

This is not only about compliance scope, though it collapses that too. It is that storing card data is a liability with no corresponding upside. There is nothing you can do with a stored card number that you cannot do with a token.

## A quick self-check

Three questions worth asking about your own checkout:

1. If the same request arrives twice, does it charge twice?
2. If the customer closes the tab immediately after paying, does the order get marked paid?
3. If your ledger and the processor disagree tomorrow, how would you find out?

If any answer is uncomfortable, that is a day of work rather than a project.

---

**Want someone to look at your payment path?** [Tell us which integration worries you](/contact) and we will look at what happens when it retries.
