# svelte-fast-dimension

[![npm version](https://img.shields.io/npm/v/svelte-fast-dimension)](https://www.npmjs.com/package/svelte-fast-dimension)
[![CI](https://github.com/bluwy/svelte-fast-dimension/actions/workflows/ci.yml/badge.svg)](https://github.com/bluwy/svelte-fast-dimension/actions/workflows/ci.yml)

Fast dimension bindings for Svelte, using ResizeObservers.

## Installation

```bash
npm install --save-dev svelte-fast-dimension
```

## Usage

```js
// svelte.config.js
import { fastDimension } from 'svelte-fast-dimension';

export default {
	preprocess: [fastDimension()]
};
```

## Recipes

### Using with svelte-preprocess

Due to how Svelte applies preprocessors, using this with `svelte-preprocess` needs a bit more work to make sure we run this preprocessor **only after** `svelte-preprocess` finishes. There's [an RFC](https://github.com/sveltejs/rfcs/pull/56) to make this process clearer soon.

At the meantime, you can try one of these libraries:

- [svelte-sequential-preprocessor](https://github.com/pchynoweth/svelte-sequential-preprocessor)
- [svelte-as-markup-preprocessor](https://github.com/firefish5000/svelte-as-markup-preprocessor)
- [My custom gist](https://gist.github.com/bluwy/5fc6f97768b7f065df4e2dbb1366db4c)

### Vite

`svelte-fast-dimension` injects an import from `svelte-fast-dimension/action` when preprocessing. This won't be detected during Vite's prebundling phase, and will cause on-the-fly prebundling which slows startup time. To remedy this, add `svelte-fast-dimension/action` to [optimizeDeps.include](https://vitejs.dev/config/#optimizedeps-include).

## Packages

| Package                                                 | Changelog                                                |
| ------------------------------------------------------- | -------------------------------------------------------- |
| [svelte-fast-dimension](packages/svelte-fast-dimension) | [Changelog](packages/svelte-fast-dimension/CHANGELOG.md) |

## Development

- `pnpm i` to install dependencies
- `pnpm dev` to run development build
- `pnpm test` to run tests
- `pnpm build` to run build

## License

[MIT](./LICENSE)
