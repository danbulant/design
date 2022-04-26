---
title: Quick comparison of Simple Storage Service
date: 2022-04-26
author: Daniel Bulant
authorIcon: /logo.png
categories: [programming, storage, comparison, s3]
description: There are all those ad-filled long articles comparing certain things (in this case, simple storage services), usually auto generated. So here's a note for my future self in a format I like now.
---

## Wasabi

***6$/TB/month***

No API charge/egress.

## DigitalOcean

***20$/TB/month***

4TB outbound transfer included.

Likely 0 API charge.

## Storj.io

***4$/TB/month***

> *Pro Accounts: Additional per-segment fee of $0.0000088 applies.

Not 100% sure what they mean per segment?

7$/TB/month outbound.

Really slow uploads, downloads usable, but I'd still recommend putting it behind Cloudflare or similar proxy if you're storing mostly small user uploads.
