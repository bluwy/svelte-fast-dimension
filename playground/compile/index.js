import fs from 'node:fs/promises'
import MagicString from 'magic-string'
import { compile, preprocess } from 'svelte/compiler'
import { fastDimension } from 'svelte-fast-dimension'

/*
  Tip: Inspect sourcemap with https://evanw.github.io/source-map-visualization/
  Note: The sourcemap from svelte-fast-dimension doesn't map code too nicely since
    it uses `MagicString#overwrite`, but merging sourcemaps should still work.
*/

const code = `\
<script>
  let a, b, c, d
</script>

<main
  bind:clientWidth={a}
  bind:clientHeight={b}
  bind:offsetWidth={c}
  bind:offsetHeight={d}
>
  <h1>Stats</h1>
  <p>clientWidth: {a}px</p>
  <p>clientHeight: {b}px</p>
  <p>offsetWidth: {c}px</p>
  <p>offsetHeight: {d}px</p>
</main>
`

const processed = await preprocess(
  code,
  [
    fastDimension()
    // uselessPreprocessor(), //
  ],
  { filename: 'test.svelte' }
)
// console.log(processed)

await fs.writeFile(
  './preprocessed.svelte',
  processed.code + getMappingUrl({ ...processed.map, sourcesContent: [code] })
)

const result = compile(processed.code, {
  filename: 'test.svelte',
  sourcemap: processed.map
})
// console.log(result)

await fs.writeFile(
  './result.js',
  result.js.code + getMappingUrl({ ...result.js.map, sourcesContent: [code] })
)

function getMappingUrl(map) {
  if (typeof map !== 'string') {
    map = JSON.stringify(map)
  }
  return `\n//# sourceMappingURL=data:application/json;base64,${Buffer.from(
    map
  ).toString('base64')}`
}

function uselessPreprocessor() {
  return {
    async markup({ content }) {
      const map = new MagicString(content).generateMap()
      // await fs.writeFile('./useless.svelte', content + getMappingUrl(map))
      return {
        code: content,
        map
      }
    }
  }
}
