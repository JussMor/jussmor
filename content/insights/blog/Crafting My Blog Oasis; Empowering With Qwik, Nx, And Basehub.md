![](https://photos.jussmor.com/insights/blog/Crafting%20My%20Blog%20Oasis%20Empowering%20With%20Qwik%2C%20Nx%2C%20And%20Basehub/basehub-blog1.webp)

Oh yeah! Another blog about how to build a blog (redundancy). Boring? Maybe, or maybe not! I’m going to share my journey building my personal blog using NX (monorepo), Qwik for the frontend, and Basehub as our CMS (Content Management System). 

All of us know how hard this can be depending on the stack and the requirements you or your clients have. Let me start. 

## Basehub

The main problem that I found during my career developing fully customizable blogs quickly was finding a reliable CMS. The CMS should: 

- Be easy to use.
- Be customizable. 
- Have SEO features. 
- Support multimedia. 
- Manage users. 
- Control versions. 

I know that there are a lot of CMSs out there with these capabilities, but they don’t fully fulfill my wishes. Primarily, when I’m choosing a CMS, my perspective is that I’m looking for something extensible and able to add new features in the least time possible, and obviously writing the least code possible to see my results. 

Until here, it looks a bit like a dream from a developer's perspective, but this is not completely about us. It’s about the users of the CMS. The users, in this case, are our marketing team: 

- They must be able to move the content and place it anywhere in the UI with the least effort possible. 
- They must be able to track their changes in case something goes wrong and make a rollback. 
- They must have the security of knowing they have a system that can scale without extensive effort. 

So, what [**BaseHub**](https://basehub.com/) can do for us? To get all these advantages, let me show you what’s possible inside this platform: 

## Version Control Tracking

The feature that I love is the version control tracking, similar to Git. You can make your changes and, when ready, publish them. It’s literally a smooth experience to review content changes and perform rollbacks when needed. 

![](https://photos.jussmor.com/insights/blog/Crafting%20My%20Blog%20Oasis%20Empowering%20With%20Qwik%2C%20Nx%2C%20And%20Basehub/basehub-first.webp)

## Build Content Structures According To Your Needs

If you’ve used **Strapi** you’re familiar with the concept of Single Types and Collection Types. It is the same inside  **[BaseHub](https://basehub.com/)****.** The only difference is that each field created is treated as a block. So, we have: 

![](https://photos.jussmor.com/insights/blog/Crafting%20My%20Blog%20Oasis%20Empowering%20With%20Qwik%2C%20Nx%2C%20And%20Basehub/basehub-content.webp)

- **Components**: It’s an independent and reusable structure that can be used multiple times to avoid repetition. 
- **Collections**: Similar to a Collection Type in Strapi, used to create repetitive structures that can be displayed as a list in the UI. 
- **Instance**: The structure of an instance is tied to the main component. In this case, SEO is an instance of the SEO component. You can edit the content but not the structure of the instance. 
- **Documents**: Similar to single types in Strapi, it is ideal for building pages like a Homepage, About Page, etc. 

The components can be reorganized with a smooth drag and drop. I’m not going to speak about the AI features because you should try them yourself; they’re simply amazing. 
## Easy Development 

[**BaseHub**](https://basehub.com/)  gives us the power to develop pages and retrieve data using the [**FETCH API**](https://basehub.com/docs/api-reference/query-api) [](https://basehub.com/docs/api-reference/query-api). However, from my point of view, it is not ideal because they provide us with their own **[Basehub SDK](https://basehub.com/docs/api-reference/basehub-sdk)**, which is super easy to use. 

Just execute: 

```javascript
npm i basehub
```

Next, follow the instructions provided in  [**BaseHub SDK Docs**](https://basehub.com/docs/api-reference/basehub-sdk)**.** If you want to learn more, see the real implementation, or if you have doubts about how to apply filters, visit: [**My Repository**](https://github.com/JussMor/jussmor)
## Qwik And NX Monorepo

First of all, why a monorepo? 

A monorepo is ideal if you want to continue building new side projects because you can reuse components and build new projects with less effort. However, it was not easy to find information about how to integrate these two technologies. 

[**Qwik**](https://qwik.dev/) is a relatively young framework with a growing community. I’m sure that Qwik is going to have an incredible future because the concept of resumability is impressive, and the benefits it offers are fantastic. 

[**Nx Monorepo**](https://nx.dev/) , on the other hand, offers an extensive array of tools that can speed up your development setup. You can set up an entire project in a few clicks, and the best part is that it works seamlessly inside VSCode. 
## How To Start:

First, install this package in your existing project o generate a new one: 

```javascript
npm install -D qwik-nx
```

Then, to generate nx-proyect with The Qwik Framework execute: 

```javascript
npx create-nx-workspace@latest org-workspace --preset=qwik-nx
```

Next, generate an application: 

```javascript
nx generate qwik-nx:app
```

If you want to generate an library: 

```javascript
nx generate qwik-nx:lib
```

Now, you can run your Qwik app with the Nx using: 

```javascript
nx run-command project-name 

Example:
nx serve website.ui  // To run development server
```

Now, if wanna add more features like setup tailwindscss, configure a deployment in Cloudflare the generators can be found here: [Generators](https://www.jussmor.com/insights/blog/crafting-my-blog-oasis-empowering-with-qwik-nx-and-basehub/packages/qwik-nx/generators.json)

To use a automatic generator just execute: 

```javascript
nx generate qwik-nx:{generator-name}
```

## The Challenge 

Currently [**BaseHub**](https://basehub.com/) only provides a Rich Text Editor that works with React.js, but it’s not a problem. I updated the library to work natively inside [**Qwik**](https://qwik.dev/). I’m not going to publish the library because I made some modifications according to my needs, but if you want to experiment, you can use the code that you can find here: [**RichText**](https://github.com/JussMor/jussmor/tree/main/libs/ui/src/richtext)**.**

The Rich Text Editor provided by BaseHub is extensible, which is impressive because you can work with custom components that you can generate inside the platform. The only limit I’ve found so far has been my imagination. 
## Conclusion

Building a personal blog with NX monorepo, Qwik, and BaseHub CMS has been rewarding. BaseHub offers user-friendly features like version control and customizable content structures. Qwik, integrated with NX, provides efficient development tools and component reusability. Despite challenges integrating BaseHub's Rich Text Editor with Qwik, the project's success showcases the potential of this tech stack for creating dynamic websites.