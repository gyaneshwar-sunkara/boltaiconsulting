---
title: "Multi-Location Is a Permissions Problem Wearing an Inventory Costume"
description: "Adding multi-site support with a location column works until one person holds different authority at two sites. Then it quietly leaks data."
date: "2026-09-15"
author: "SillStack"
tags: ["Multi-location", "Permissions", "Architecture", "Restaurants"]
category: "Data & Integration"
readTime: "7 min read"
featured: false
services: ["web-applications", "systems-integration"]
practices: ["security-and-access", "business-systems", "product-engineering"]
seoTitle: "Multi-Location Permissions"
---

A restaurant group with four sites asks for inventory software. The obvious design is a `locationId` column on every table and a filter in every query. It demos beautifully.

It also breaks the first time reality shows up.

## Where the column model fails

**Somebody manages two sites at different levels.** A manager who runs site one and covers site two on weekends. Full authority at one, limited at the other. A single global role cannot express that. Neither can a column.

**Head office needs read everywhere, write nowhere.** A finance user should see every location's numbers and change none of them. With a global admin role, they can change all of them. With a location-scoped role, they can see one.

**Someone gets promoted.** Their authority changes at one site and not others. Now you are maintaining a matrix, and the matrix lives in whatever the application code happens to do.

**One query forgets the filter.** This is the real one. In a `locationId` model, correctness depends on every developer remembering a `WHERE` clause on every query forever. That is not a design, it is a hope. The day someone forgets, a user sees another site's data and nobody notices, because nothing errors.

## What actually works

Two things, together.

### Resolve the role per request

Not a role on the user. An *effective role*, computed for this user at the location being accessed, on each request. A guard runs before the handler, resolves what this person is allowed to do here, and the handler works with that.

This means the two-sites-different-authority case is representable without a special case, and a promotion is a row change rather than a code change.

The obvious objection is cost, since that's a lookup on every request. So cache it. On [InvtoryX](/work/invtoryx) the resolution is Redis-cached with sensible invalidation, so it costs effectively nothing per request and is still authoritative.

### Enforce isolation at the database

Row-level security, so the database itself refuses to return rows from a location the current context is not entitled to. A forgotten `WHERE` clause then returns nothing, rather than returning somebody else's data.

This is the difference between a system that is correct because everybody remembered and a system that is correct because it cannot do the wrong thing. Discipline fails eventually. Constraints do not.

## Test what a role cannot do

Most permission test suites assert that an admin can do admin things. That is the easy half and it catches almost nothing.

The valuable tests assert the negative: this role *cannot* read that, cannot write this, cannot see that location. Write one per role per boundary. It's tedious, and it's the only thing standing between you and a silent data leak, because permission bugs never throw an error. They quietly return the wrong rows to somebody who does not realise they should not be seeing them.

On InvtoryX every role is covered by integration tests asserting its limits. Not because it is fun, but because in a multi-tenant system this is the failure that ends a contract.

## The wider point

This pattern is not specific to restaurants or to inventory. It is the shape of every system where authority varies by context: multi-branch retail, clinics, franchises, field service, property management, any group with sites.

If you are evaluating software for a multi-site operation, there is one question worth asking the vendor: *can a user have different permissions at different locations?* If the answer involves hesitation, or "you'd have two accounts," you are looking at a location column and you will hit its limits within the year.

---

**Running several sites on software built for one?** [Tell us how many sites you run](/contact) and who needs access to what. We will tell you whether this is a configuration problem or a rebuild.
