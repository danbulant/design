---
title: Quick comparison of pricing of Simple Storage Services
date: 2022-05-16
dateUpdated: 2025-03-29
author: Daniel Bulant
authorIcon: /logo.png
categories: [programming, storage, comparison, s3]
description: There are all those ad-filled long articles comparing certain things (in this case, simple storage services, or S3), usually auto generated. So here's a note for my future self in a format I like now.
---

<script>
    import Compare from "./_compare/Compare.svelte";
</script>

I'm not sponsored or endorsed by any of the mentioned companies/products below, nor do I earn any commission when you get something from them.  
If you want to help me, say something nice in the comments (or create some discussion there).  
If you start using any of these after you read this post, you're obligated to say which one are you using (and preferably why).

Out of the below, I only used `storj.io`. Others are just quick info based on their pricing pages.

There's also a simplified comparison tool at the bottom.

`egress` means outbound transfers. Some services have a monthly minimum fee, from what I checked it's 1TB or less. Some services may also have a minimum billable size (Wasabi 4KB, AWS 128KB).

The services are in no particular order (I tried a bit by popularity, but no exact metrics were used for sorting).

## AWS S3 + Azure + Google Cloud

Depends on region and on API requests.  
Top 3 most expensive services.  
If you need 100% reliability and 'the thing that everyone uses', go with this one (or if it's company policy).  
If you want to save, or don't mind using 'smaller' hosts, try one of the below (I'd recommend Cloudflare or DigitalOcean from reliability/usage perspective).

## Cloudflare R2

I'm using their other products (workers, this page itself is hosted on pages), but I have yet to fully try the new R2.

| Category | Free | Paid |
| -------- | ---- | ---- |
| Storage | 10GB/month | $15/TB/month |
| class A ops | 1 million requests/month | $4.5/ million requests |
| class B ops | 10 million requests/month | $0.36/ million requests |

Class A has all uploads and bulk operations (`ListBuckets`, `PutBucket`, `ListObjects`, `PutObject`, `CopyObject`, `CompleteMultipartUpload`, `CreateMultipartUpload`, `UploadPart`, `UploadPartCopy`).  
Class B contains get operations (`HeadBucket`, `HeadObject`, `GetObject`).  
Delete operations are free (`DeleteObject`, `DeleteBucket`, `DeleteMultipartUpload`).  

[Home page of Cloudflare](https://cloudflare.com) | [Pricing for R2](https://developers.cloudflare.com/r2/platform/pricing/)

## Wasabi

***$6.99/TB/month***

No API charge/egress. Minimum fee of 1TB storage.

As mentioned by @spiffytech (via utteranc.es, see the bottom of the page), Wasabi always bills for a minimum of 90 days, even if you delete the files sooner.  
If that's of a concern, try adjusting the slider in the "additional options" at the bottom graph. When you replace a file during those 90 days, it will still be billed (as if you deleted the file and created a new one).

Has a policy that egress shouldn't be higher than the stored amount. Consider using CDN or a cache layer.

[Home page](https://wasabi.com) | [Pricing page](https://wasabi.com/cloud-storage-pricing/)

## Backblaze B2

| Category | Free | Paid |
| -------- | ---- | ---- |
| Storage | 10GB | $6/TB/month |
| Egress | 1GB/day | $10/TB/month |
| Class A ops | $\infty$ | - |
| Class B ops | 2500/day | $4 / 10 million |
| Class C ops | 2500/day | $4 / 1 million |

Free egress when using one of the `[Bandwidth alliance](https://www.cloudflare.com/bandwidth-alliance/)' services - for example when using free Cloudflare proxy (which is free even for small businesses, unless you're moving tens/hundreds of terabytes of data each day).

<details>
    <summary>Details</summary>

    ### Class A
    
    Uploads, deletes (of objects and buckets), aborts (of multipart uploads).

    ### Class B

    Downloads (and getting metadata of objects). This doesn't count as egress, so it's still paid even when over 'Bandwidth alliance'.

    ### Class C

    Copy, Create bucket, CORS bucket management, bucket information, listing.
</details>

[Home page](https://backblaze.com "favicon=https://backblaze.com/favicon.ico") | [Pricing page](https://www.backblaze.com/b2/cloud-storage-pricing.html "favicon=https://backblaze.com/favicon.ico")

## DigitalOcean Spaces

| Category | Base | Paid |
| ----- | --- | --- |
| Storage | 250GB | $20/TB/month |
| Egress | 1TB | 10$/TB/month |

Base plan is 5$/month.

<details>
    <summary>Details</summary>
    Egress is kinda funky, but essentially it's free when transfering to droplets (VMs) in the same region, otherwise it's paid.

    Digital Ocean also has some kind of CDN for free bundled, and when using CDN only egress from Spaces to CDN is counted.

    To find pricing for Spaces, I had to open up `pricing` page from their homepage, scroll down, click `spaces` card, click `learn more` link in the description, scroll down, click `product docs`, and then it showed the pricing itself.

    They have rate limits for API requests in place (see [Pricing page](https://docs.digitalocean.com/products/spaces)). Of those the most notable one
    is that you can only do 5 `PUT` or `COPY` requests in 5 minutse for any object (file) in Spaces.  
    As a side note, they use non-standard `503 Slow Down` (normally `Service Unavailable`) error code instead of the more common `429 Too Many Requests` (part of RFC 6585).
</details>

[Home page](https://digitalocean.com) | [Pricing page](https://docs.digitalocean.com/products/spaces)

## Storj.io

| Category | Free | Paid |
| -------- | ---- | ---- |
| Storage | 150GB | $4/TB/month |
| Outbound | 150GB | 7$/TB/month |

> *Pro Accounts: Additional per-segment fee of $0.0000088 applies.


<details>
    <summary>Details</summary>

    When uploading via CLI/libraries, their software splits the files into segments, each of which is stored on multiple machines at once for redundancy. S3 gateway does that for you, and I don't know how exactly the file is split into segments. Segment price is not part of the comparison at the end.
  
    Really slow uploads (when using the S3 gateway, it's possible if you use the CLI/libraries that it's faster), downloads usable, but I'd still recommend putting it behind Cloudflare or similar proxy if you're storing mostly small user uploads.  
    It should be more secure that the others, in that if you don't use the S3 gateway but rather their open-source CLI/libraries, it encrypts the file locally with the specified key, and uploads a part of the file to multiple machines, so none of the machines can read your file.  
    Also, they're not the one's running all of the machines on which files are stored - they pay members for their excess storage if they install Storj's daemon.  
    S3 gateway has server-side encryption.  

    They cannot retrieve the files if you lose the keys.
</details>

[Home page](https://storj.io) | [Pricing page](https://www.storj.io/pricing)

---

## Comparison

<Compare />