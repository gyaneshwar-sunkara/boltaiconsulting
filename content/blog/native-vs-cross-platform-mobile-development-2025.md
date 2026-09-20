---
title: "Native vs Cross-Platform Mobile Development in 2025"
description: "React Native, Flutter or native iOS and Android. What each one actually costs you, and the handful of cases where the answer is not close."
date: "2024-11-19"
author: "SillStack"
tags: ["Mobile Development", "React Native", "Flutter", "Architecture"]
category: "Engineering"
readTime: "9 min read"
featured: true
services: ["mobile-solutions"]
practices: ["product-engineering", "devices-and-edge"]
seoTitle: "Native vs Cross-Platform"
---

This decision gets argued as though it were about technology. It is mostly about economics, and the economics are not subtle: one codebase costs meaningfully less to build and considerably less to maintain than two.

That settles it for most business software. The interesting part is the set of cases where it does not, which is smaller than native advocates claim and larger than cross-platform advocates admit.

## What you are actually choosing between

**Native** means Swift for iOS and Kotlin for Android. Two codebases, two sets of platform expertise, two of every bug fix, two release processes. In exchange you get everything the platform can do, on the day it ships, with no layer in between.

**React Native** compiles to real native UI components driven by JavaScript. The screens your user touches are genuine platform widgets. Written in TypeScript, which matters more than it sounds: if you have a web team, they can work on it.

**Flutter** renders its own widgets to a canvas rather than using the platform's. That buys pixel-identical output everywhere and complete control over animation. It costs you Dart, a language your team almost certainly does not know and cannot easily hire for, and interfaces that can feel subtly unlike either platform.

## The cost difference, honestly

Two codebases means roughly two of everything that touches the interface. Not exactly double — the backend is shared, the design work is shared, the product thinking is shared — but the client-side build and, more importantly, every subsequent change.

Maintenance is where it really shows. A security patch in a native app means fixing it twice, testing it twice, and shipping it twice. Over three years of ordinary feature work that difference dwarfs the initial build gap.

The gap also widens with the number of screens rather than with technical sophistication. A simple app with sixty screens punishes you far more for going native than a clever app with eight.

## When native is genuinely worth it

Five cases. If you are not in one of them, the decision is probably already made.

**Sustained heavy graphics.** Games, real-time video effects, AR. Anything holding a consistent high frame rate while doing serious work per frame. Cross-platform frameworks have improved a great deal here and still lose under sustained load.

**Day-one platform features.** If your product's value depends on adopting a new OS capability the week it is announced, you want direct access. Cross-platform support for new APIs arrives on someone else's schedule, typically a few months later. For most apps that delay is irrelevant. For a handful it is the entire product.

**Deep system integration.** Complex widgets, watch apps, CarPlay and Android Auto, background processing with unusual requirements, tight hardware access. Possible cross-platform, often through a native module you end up writing anyway — at which point you have both problems.

**Extreme performance sensitivity in the interface itself.** Very large lists with complex cells, heavy real-time rendering. Achievable cross-platform with care; native gives you more headroom before care becomes necessary.

**An existing native team.** If you already employ strong iOS and Android engineers, the cost equation changes completely. Do not throw away expertise to save a theoretical amount.

## When cross-platform is obviously right

Almost everything else, and specifically anything shaped like a business application.

Internal tools, field service apps, ordering and booking, dashboards, anything where the app is a well-designed interface over an API. The interface work is forms, lists, navigation and state — the parts cross-platform frameworks handle indistinguishably from native.

It is also right when the deadline is external rather than chosen. A season, a trade show, a contract start date. Two staggered native releases cannot compress the way a single shared codebase can, and that constraint decides more of these arguments than any technical consideration.

And it is right when your team is a web team. Handing React Native to engineers who already write TypeScript and React is a small step. Hiring two mobile specialists is not.

## React Native or Flutter

If cross-platform is the answer, this is the next question, and for most businesses it is not close.

**Choose React Native** if you have web engineers, if you want to share validation or types or logic with a web application, or if you expect to need native modules — the ecosystem for dropping into Swift or Kotlin is more mature and better trodden.

**Choose Flutter** if the interface is highly custom and you want it pixel-identical across platforms, if animation is a core part of the product, or if you are targeting embedded and desktop surfaces alongside mobile.

We build in React Native with Expo, and the reason is hiring rather than benchmarks. Our platform is TypeScript end to end, so a mobile app shares types, validation and client code with the web application in front of the same API. That is a real and continuous saving, and it is a preference we will tell you about openly — see [why your agency's stack should not be yours by default](/blog/why-tech-stack-flexibility-matters).

## The thing that actually decides most projects

Not performance. Offline.

Software used in a stockroom, a walk-in fridge, a van or a basement will lose its connection, and that is a data architecture decision rather than a framework one. Both React Native and Flutter can do it well. Native can do it well. What none of them do is make it cheap to add later.

Retrofitting offline support means changing where truth lives in your application: a local store, a queue of pending operations, a conflict policy, and an interface that can represent "this has happened here but not yet there". That is most of the data layer, which is why it is one of the most expensive changes you can make to a shipped app.

Decide it before you pick a framework, not after. We wrote it up properly in [offline-first is a decision you make on day one](/blog/offline-first-is-a-decision).

## What nobody mentions in the comparison

**App store review is outside everybody's control.** It is usually days and occasionally longer, and no framework choice affects it. Any timeline that does not account for it is optimistic on both paths. It is why we quote mobile at four to six weeks where web is four.

**Both stores will eventually reject something.** Plan for one rejection cycle. It is normal, it is survivable, and it is only a crisis when the launch date has no slack in it.

**"Write once, run anywhere" was never true.** Expect ten to twenty per cent platform-specific work in a real cross-platform app: permissions, notifications, navigation conventions, the back button, and the places where the two platforms simply expect different behaviour. Budgeting for zero is the most common way these projects slip.

## The short version

Default to cross-platform, and specifically to React Native if you have any web engineering at all. Go native when you are in one of the five cases above, and be honest about whether you actually are — the temptation to believe your app is performance-critical is strong and usually wrong.

Then spend the argument you saved on the decision that matters more, which is what happens when the device has no signal.

---

**Not sure which way your app falls?** [Tell us what it has to do](/contact) and where it gets used, and we'll tell you which of the three the answer actually is.
