# svelte-fast-dimension

Fast [dimension bindings](https://svelte.dev/tutorial/dimensions) using ResizeObserver.

**Why?** Svelte currently uses an iframe technique to measure dimensions so it works in older browsers. However, creating multiple iframes has a big performance impact and sometimes [quirkiness](https://github.com/sveltejs/svelte/issues/4776). If your target browsers support [ResizeObserver](https://caniuse.com/resizeobserver), this can significantly improve dimension binding performance.

## Installation

```bash
npm install --save-dev svelte-fast-dimension
```

## Usage

```js
// svelte.config.js
import { fastDimension } from 'svelte-fast-dimension'

export default {
  preprocess: [fastDimension()]
}
```

Use dimension bindings as usual, it will use ResizeObservers under-the-hood:

```html
<script>
  let a, b, c, d
</script>

<div
  bind:clientWidth="{a}"
  bind:clientHeight="{b}"
  bind:offsetWidth="{c}"
  bind:offsetHeight="{d}"
/>
```

## Recipes

### Vite

`svelte-fast-dimension` injects an import from `svelte-fast-dimension/action` when preprocessing. This won't be detected during Vite's prebundling phase, and will cause on-the-fly prebundling which slows startup time. To fix this, add `svelte-fast-dimension/action` to [optimizeDeps.include](https://vitejs.dev/config/dep-optimization-options.html#optimizedeps-include).

## Development

- `pnpm i` to install dependencies
- `pnpm dev` to run development build
- `pnpm test` to run tests
- `pnpm build` to run build

## License

MIT
