---
title: "Design for the Tenth Hour, Not the First Minute"
description: "Software that demos beautifully and software that is pleasant to use all day are pulling in opposite directions. If your users live in the tool, optimise for the tenth hour."
date: "2026-09-04"
author: "SillStack"
tags: ["Design", "UX", "Accessibility", "Internal Tools"]
category: "Engineering"
readTime: "6 min read"
featured: false
services: ["web-applications", "mobile-solutions"]
practices: ["design-and-experience", "product-engineering", "quality-and-testing"]
seoDescription: "Software that demos well and software that is pleasant to use all day pull in opposite directions. Design for the tenth hour."
---

There is a reliable tell for software designed to be bought rather than used: generous whitespace, large friendly illustrations, animated transitions between steps, and a workflow that takes eleven clicks.

It is lovely for ninety seconds. It is exhausting by Thursday.

Tools people live in have different requirements from tools people evaluate, and the two sets of requirements genuinely conflict.

## What the tenth hour rewards

**Density, within reason.** Someone who uses a screen forty times a day does not need it to breathe. They need to see more at once and scroll less. The airy layout that photographs well costs them a scroll on every single use.

**Keyboard paths.** Any action performed repeatedly should be reachable without the mouse. This is the single biggest speed difference between software people tolerate and software people like.

**Predictable placement.** The button stays where it was. Rearranging the interface to accommodate a new feature costs every existing user their muscle memory, which is a real and usually uncounted cost.

**No animation in the way.** A 300ms transition is delightful once and an obstacle by the fiftieth time. If something must animate, make it fast and interruptible.

**A forgiving undo.** People working quickly make mistakes. Undo is worth more than a confirmation dialogue, which trains people to click through without reading and then does not protect them.

## The error states are the product

Anyone can design the happy path. What people actually remember is what happened when the upload failed at ninety per cent, or when the form lost twenty minutes of typing.

So design them deliberately:

- **Empty states** that explain what goes here and how to start.
- **Loading** that distinguishes "working" from "stuck," because a spinner that could mean either is worse than nothing.
- **Errors** that say what happened and what to do, not a code.
- **Destructive actions** confirmed once, clearly, and reversible where possible.

Teams that skip these are not saving time. They are moving the cost to support.

## Accessibility is cheap in advance

WCAG 2.2 AA is not a separate project. Contrast, keyboard operability, focus order and sensible labels are nearly free when designed in and genuinely expensive to retrofit once every screen exists.

Check the numbers rather than trusting your eye. Contrast in particular is deceptive: plenty of pairings that look fine on a good monitor in a dark room fail measurably, and fail badly on a laptop in a bright kitchen or a phone outdoors.

The same fixes help everybody, too. Keyboard paths are an accessibility requirement and a power-user feature at once.

## Tokens, not screenshots

Colour, type and spacing should live as variables shared by the design files and the code. One definition, referenced in both places.

Without it, design and implementation drift within a quarter. Someone picks a nearly-matching grey, someone else adds a slightly different spacing value, and a year later there are eleven greys and nobody can say which is correct.

With shared tokens, a change lands in both places at once and the tenth screen matches the first without anybody policing it in review.

## Test with five real users

Five people from the actual user group, watched doing real tasks, finds more in an afternoon than a fortnight of internal debate.

Not a survey. Watching. There's a difference and it matters. The gap between what people say they do and what they actually do is where the design problems live. It is also the step teams skip most consistently, because it takes a day and it is slightly uncomfortable watching someone struggle with something you made.

That discomfort is the data.

---

**Does your team need training to use your own tool?** [Tell us what they work around](/contact). We will come back with a scope, a price and a date.
