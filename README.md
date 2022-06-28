# Vue Reddit Client

This is a Vue3 project using the Reddit API to build a web application that loads Reddit posts.

It is modeled after <a href="https://www.youtube.com/watch?v=hAIWMGx4AL8" target="_blank">CodingGarden's</a> Twitch stream.

Some note-worthy differences from the stream:

- The stream was done in November 2020 when Vue 3 was still very new and all supporting libraries were in beta. This project uses Vue 3.2.x, which makes use of `script setup` differently than it is handled in this stream.
- The `SubReddit.vue` component is written in JSX in the stream. It is just written in JavaScript in this application.
- It defaults to `r/kittens` instead of `r/aww` because kittens are cuter.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
