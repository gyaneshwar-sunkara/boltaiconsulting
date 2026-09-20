---
title: "Your Cloud Bill Went Up Forty Per Cent and Nobody Knows Why"
description: "Cloud spend rarely grows because of one decision. It grows because of a dozen small ones nobody wrote down. Here is how to find them, in order of how much they are costing you."
date: "2026-09-12"
author: "SillStack"
tags: ["Cloud", "Cost", "Infrastructure", "DevOps"]
category: "Cloud & Security"
readTime: "7 min read"
featured: false
services: ["cloud-and-devops", "managed-support"]
practices: ["cloud-and-delivery", "platform-engineering"]
seoTitle: "Why Your Cloud Bill Grew"
seoDescription: "Cloud spend creeps through a dozen small decisions nobody wrote down. How to find them, in order of what they are costing you."
---

Cloud bills do not usually jump. They creep, which is worse, because there is never a moment where somebody says "that is too much". There is only a slow slope, and a quarterly review where somebody finally opens the invoice.

The good news is that spend is almost always concentrated. Three or four line items typically account for most of the growth. The work is finding them, and they are usually not what people assume.

## Read the bill properly first

Not the total. The itemised breakdown, grouped by service and then by resource.

Most teams have never done this. They have looked at the total, felt uncomfortable, and moved on to a conversation about whether to switch providers. Switching providers to fix a cost problem you have not diagnosed is how you spend three months to arrive at a similar bill on different infrastructure.

## The usual suspects, in rough order

**Data transfer.** Frequently the largest surprise. Egress between regions, between availability zones, or out to the internet. It is priced per gigabyte, it never appears in anybody's mental model, and a chatty service that talks across a zone boundary can generate a genuinely startling number.

**Storage that nothing deletes.** Logs, backups, old snapshots, build artefacts, that S3 bucket from a 2024 migration. Storage is cheap per gigabyte, which is exactly why nobody sets a lifecycle policy, and cheap multiplied by three years is not cheap.

**Instances sized for a spike that happened once.** Somebody scaled up during an incident and never scaled back. This is extremely common and one of the quickest wins available.

**Idle non-production environments.** Staging, QA and demo running twenty-four hours a day for a team that works eight. Shutting them outside working hours is often a straightforward saving of two-thirds on those environments.

**Managed services chosen for convenience.** A managed queue, a managed search cluster, a managed cache, each reasonable in isolation. Collectively they can outweigh the compute they support.

## The expensive mistake: scaling instead of fixing

When something is slow, the fastest available action is a bigger instance. It works, it takes ten minutes, and it converts an engineering problem into a recurring monthly charge.

Most performance problems at small and medium scale are not capacity problems. They are a missing index, an N+1 query, a synchronous call that should be a background job, or a cache that was never added. Those have fixed costs. Bigger instances have costs that recur forever and grow with your traffic.

Reading a query plan is less pleasant than clicking a size dropdown. It is also usually the difference between a one-off afternoon and a permanent line item.

## Make it hard to drift back

- **Budget alerts** at a threshold, routed to a person rather than an inbox nobody reads.
- **Tag everything** by environment and service, so the bill can be attributed. Untagged spend is unattributable spend, and unattributable spend never gets fixed.
- **Lifecycle policies** on every storage bucket, decided when the bucket is created.
- **Infrastructure in code**, so a change is reviewable. Most cost creep arrives through console clicks nobody saw.

That last one is the structural fix. A resource created by clicking is invisible to everyone except the person who created it and the invoice.

## What good looks like afterwards

You should be able to answer three questions in under a minute: what are we spending, which service is it going to, and what changed since last month.

If any of those needs an investigation, that is the real finding. Not the number itself.

---

**Bill growing and no explanation?** [Tell us roughly what you're running](/contact) and we'll tell you where to look first.
