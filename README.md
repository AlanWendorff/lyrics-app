# We got lyrics frontend

Technologies: <br/>
<img src="https://img.shields.io/badge/-React-20232A?logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/-Vite.js-6c1991?logo=vite&logoColor=white"/>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white"/></a>
<a href="https://sass-lang.com/"><img src="https://img.shields.io/badge/-Sass-CC6699?logo=Sass&logoColor=white"/></a>
<a href="https://www.framer.com/"><img src="https://img.shields.io/badge/-Framer%20Motion-6c1991?logo=framer"/></a>
<a href="https://storybook.js.org/"><img src="https://img.shields.io/badge/-Storybook-FF4785?logo=Storybook&logoColor=white"/></a>

---


### Web preview:

![we got lyrics - preview](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/c54f5a4c-b467-4851-ba1a-d9e7b3f23656)
![we got lyrics - zustand](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/ea92d319-6a48-433d-a508-df9d308fd5fd)
![We Got Lyrics - Storybook](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/45fd4713-5e59-4f3f-8591-f72790f7c833)
![we got lyrics - color scheme](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/6d03acd2-a3a3-4243-bc10-92ca84c79584)
![we got lyrics - pwa](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/dd235a25-8cda-4b92-a2d4-2da4dd857fdf)
![we got lyrics - architecture cover](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/edc316a2-0e91-463f-829a-a3f9251bda56)
![we got lyrics - folder tree](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/b1bdbd14-fbf0-4b3b-8338-25c3e45f12ee)
![we got lyrics - feature](https://github.com/AlanWendorff/we-got-lyrics-frontend/assets/62715512/7f93b0b1-735e-4221-8ed3-7cf73a7454ac)

[Check it out](https://we-got-lyrics.vercel.app/)

---

**Project structure description:** This project follows an approach of 2 yarn workspaces. Into  ```src``` directory you will find  [```core```](https://github.com/AlanWendorff/we-got-lyrics-frontend/tree/develop/src/core) and [```views```](https://github.com/AlanWendorff/we-got-lyrics-frontend/tree/develop/src/views) directories.

[```core```](https://github.com/AlanWendorff/we-got-lyrics-frontend/tree/develop/src/core) : Holds everything concerned to business logic.
<br/>
[```views```](https://github.com/AlanWendorff/we-got-lyrics-frontend/tree/develop/src/views): As the name implies, this directory holds everything concerned to Frameworks or Libraries to build user interfaces.

The modularity of the project has the advantage of being able to consume ```src/core``` from any framework or library. This allows to have many frameworks coexisting in the same project.

## Getting Started

**Advice:** Since the project consists of 2 yarn workspaces, ```node_modules``` must be installed in all of them.

Install dependencies on the root project directory <br/>
Install dependencies into **Framework/library root dir**  [```src/views/react-client```](https://github.com/AlanWendorff/we-got-lyrics-frontend/tree/develop/src/views/react-client)

```bash
npm install
# or
yarn
# or
pnpm install
```
To run the development server:

Positioned into **Framework/library root dir** [```src/views/react-client```](https://github.com/AlanWendorff/we-got-lyrics-frontend/tree/develop/src/views/react-client)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
