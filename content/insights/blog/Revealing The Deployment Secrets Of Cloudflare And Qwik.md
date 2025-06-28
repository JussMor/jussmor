![](https://photos.jussmor.com/insights/blog/Revealing%20The%20Deployment%20Secrets%20Of%20Cloudflare%20And%20Qwik/deployment.webp)

React, Next.js, Astro, and SvelteKit are powerful frameworks, and there are a lot of resources available on the internet. However, new powerful frameworks often emerge with new capabilities, and it can be challenging to find useful resources when working with these new tools. In this video, we explore the deployment of the Qwik framework to Cloudflare. I hope you enjoy this tutorial.

![](https://www.youtube.com/embed/XnjuMKKCRJA)
[Watch Video](https://www.youtube.com/embed/XnjuMKKCRJA)

## Qwik Setup

### Qwik Install

```javascript
npx create-nx-workspace@latest cloudflare-qwik-deployment --preset=qwik-nx
```

After running this command, the terminal will display some options: 

1. The CI/CD integration setup, if that is your case. 
2. Choose your preferred style system (CSS, SCSS, etc.). 
3. The app name.
## Cloudflare Setup 

### Cloudflare Deployment Setup With NX

```javascript
nx generate qwik-nx:clouflare-pages-integration --project  cloudflare-qwik-deployment
```

This command auto-generates **the Adapter folder** with all the necessary changes to apply the Cloudflare Pages Adapter for a smooth deployment on the Cloudflare network. 

## Cloudflare Deployment 

## Steps:

1. Go to Cloudflare 
2. Navigate to Pages, then Deployment, and connect your repository. 
3. Click "Next" to apply the build settings. 

## Build Settings 

```shell
Build command:  npx nx build-cloudflare website.ui
```

```text
Build output directory: dist/apps/website.ui/client
```

```text
Root directory: cloudflare-qwik-deployment
```

Cloudflare offers some pre-set presets for well-known frameworks. If you are not using a monorepo, it is not necessary to set up the Root Directory option.