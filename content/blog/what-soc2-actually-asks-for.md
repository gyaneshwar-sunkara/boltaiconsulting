---
title: "What SOC 2 Actually Asks For, and What No Engineering Firm Can Sell You"
description: "A customer sends a security questionnaire and suddenly compliance is urgent. Here is what the controls actually are, and where the line sits between preparation and certification."
date: "2026-09-06"
author: "SillStack"
tags: ["Security", "Compliance", "SOC 2", "Access Control"]
category: "Cloud & Security"
readTime: "7 min read"
featured: false
services: ["cloud-and-devops", "managed-support", "web-applications"]
practices: ["security-and-access", "cloud-and-delivery", "managed-services"]
seoTitle: "What SOC 2 Asks For"
seoDescription: "The controls an auditor actually checks, and the line between what an engineering firm can build and what only a licensed auditor can issue."
---

Let us start with the part some firms are vague about: **no engineering company can make you SOC 2 certified.** Certification comes from a licensed auditor. Anyone implying otherwise is either confused or hoping you are.

What an engineering firm can do is build and document the controls so that the audit is a review rather than a rebuild. That is most of the work and most of the cost, but it is not the certificate.

## What the controls actually are

Stripped of the framework language, an auditor is asking a handful of practical questions.

**Who can access what, and who decided?** Role-based access, granted deliberately, reviewed periodically. The failure state is the one most companies are in: everybody is an administrator because it was easier at five people.

**Can you prove what happened?** Audit logs covering access, changes, exports and permission grants. Append-only, retained, searchable. The test is whether you can answer "who changed this record, and when" without a database archaeology session.

**Do people lose access when they leave?** Provisioning driven by the HR system rather than by somebody remembering a checklist. Manual offboarding is the most common way a company keeps granting access to people who left months ago.

**Is data encrypted, in transit and at rest?** Usually straightforward on modern managed infrastructure, but it has to be demonstrable rather than assumed.

**Do you know when something goes wrong?** Monitoring and alerting with a defined response, and a record of incidents and what changed as a result.

**Are changes controlled?** Code review, a pipeline that gates merges, and a deployment record. Not bureaucracy: evidence that changes are reviewed before they reach production.

**Is there a written policy?** This is the part engineers dislike and auditors care about. Access policy, incident response, vendor management, business continuity.

## Where the line sits

Worth being precise about the division, because ambiguity here causes real problems late in a process.

**An engineering firm can:** implement access control and tenant isolation, build audit logging, set up monitoring and alerting, wire provisioning to your HR system, configure encryption and secrets management, document the technical controls, and remediate findings.

**An engineering firm cannot:** issue the certificate, act as your auditor, perform the penetration test it then remediates, or own your organisational policies. Those belong to a licensed auditor, an independent testing firm, and your own leadership respectively.

Any firm blurring that line is a bad sign, not a convenient one.

## Build it in rather than retrofitting

Access control is the clearest example of something that is cheap when designed in and expensive afterwards.

**Deny by default.** Nothing reachable until access is explicitly granted. The opposite default is how data reaches people who were never malicious about it.

**Enforce at the database.** Row-level security means a forgotten filter in application code still cannot return another tenant's rows. Correctness by constraint rather than by everyone remembering forever.

**Test what roles cannot do.** Assertions for the negative case. Permission bugs are completely silent until they're a headline, because nothing errors. The wrong rows just come back.

Retrofitting these into a live multi-tenant system is among the least pleasant projects in software. Deciding them on day one costs a week.

## If a questionnaire just landed

Practical order of operations:

1. **Answer honestly.** A "not yet, here is our timeline" is survivable. A claim that turns out to be false during diligence is not.
2. **Fix access control first.** It is the most commonly asked about and the most commonly absent.
3. **Turn on audit logging.** You cannot retroactively log last quarter, so the sooner it starts the sooner you have history.
4. **Write the policies.** Tedious, quick, and genuinely required.
5. **Then engage an auditor.** After the controls exist, not before.

The companies that find this painful are the ones that engage an auditor first and discover the gap at the worst possible moment.

---

**Questionnaire due next week?** [Tell us what it's asking](/contact) and we'll give you an honest read on the gap.
