# bga_reversi_svelte
'Reversi' Tutorial for [Board Game Arena](http://en.boardgamearena.com/) using
[Svelte](https://svelte.dev/)+[Vite](https://vite.dev/)+[TypeScript](https://www.typescriptlang.org/) for frontend

Backend content is similar to tutorial at https://en.boardgamearena.com/doc/tutorial_reversi.

Frontend content uses a [minimalist root code](./frontend/tutorialreversisvelte.js) and
all the frontend app is developed as [Svelte components](./frontend/lib).

The Svelte components are packaged into a single
[AMD module](https://en.wikipedia.org/wiki/Asynchronous_module_definition) using [Vite](./config/vite.config.ts).

## Usage

Run `npm run build` to build all things into an output folder named `remote` and ready to be uploaded to BGA.

Run `npm run dev` to launch a local Svelte app that uses the game frontend components.
