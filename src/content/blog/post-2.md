---
title: Finding free hosting for static websites in 2025
excerpt: So many choices - GitHub Pages, Netlify, Cloudflare Pages, 
publishDate: 'Apr 3 2025'
tags:
  - Webdev
  - Astro
---
There are so many options for static website hosting nowadays. And I wanted to do it free and simple, with nothing sketchy involved. Years ago I hosted a static website on "000webhost" and it worked, but my website had a weird banner on the bottom, and every time I share my website link with somebody they would tell me it's blocked on their campus or office network.

Fortunately in 2025 there are so many other choices, backed by big companies with a reliable service.

## Netlify

Netlify is super easy to use. If you started the website with a theme, the theme owner will often add a deploy with Netlify button on the README page, and it takes minutes to spin up a functioning site with a subdomain on their domain. 

However I found a post on Reddit, that [someone was billed $104K bill by Netlify](https://www.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/?rdt=35066) because the bandwidth usage exceeded their start plan limit. Well, the developer was charged around $5K, as "generous discount that you only need to pay 5% of the bill." It turns out to be a DDoS attack on a mp3 file hosted on the site that caused this huge amount of bandwidth. I was only after "Reddit justice" that the CEO personally waived the bill, which I don't want to count on for not going bankrupt. The comments mentioned at that time, there were no ways to set cap for bandwidth on Netlify's UI. 

In 2025, Netlify does have a "completely free" tier on their pricing page, but it's confusing since the pricing is shown with the starter plan, which charges $55 per 100GB outside the bandwidth limit. By the way, that's ridiculously expensive, even for a freemium SaaS service. And the way they worded the free tier behavior on the Q&A and ToS are quite confusing. Another Netlify developer assured me that the free tier will just shut the website off after reaching the bandwidth limit, but it did feel sketchy. 

Netlify has rate limiting features that's only available for their higher tier plan. And it looks like people going over the plan limits were an essential source of their income. I still like how easy to use the service is, but I am too cautious to try my chances to not get billed a big amount.



## GitHub Pages

[Using GitHub Pages with Astro](https://docs.astro.build/en/guides/deploy/github/) was pretty straightforward. The slight annoyance for me was you can only create one repository named [github_handle].github.io that will be routed to the root of the GitHub site, any other repositories will need to be in a first level route. That is both good and bad. Good to showcase different web apps easily, bad that sometimes my repository is not named "elegantly" to be used as part of a route. Anyways, this is not a big complaint at all, I appreciate them offering a free service, and renaming GitHub repo is super straightforward. 

## Cloudflare Pages

I still need to investigate more on what Cloudflare does and how do they manage an income stream while offering so many free services left and right. Cloudflare Pages were recommended by many in the the Netlify fiasco Reddit thread, and it was very simple to setup (even slightly simpler than GitHub pages). They are generous and offers unlimited bandwidth (assuming not hosting a lot of media files), unlimited number of sites and unlimited static requests. I was able to connect with my domain name to Cloudflare Pages, but using a subdomain of `www` for now, as using the apex domain requires me to transfer DNS to Cloudflare, which I only want to do if it's really necessary. 

Another nice thing is Cloudflare offers analytics on the page visits, and turning a UI switch on is all that's needed.

Hope this blog helped you pick a static host for your website.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NTE1NTQwMjYsLTk0NDUzMTgwOV19
-->