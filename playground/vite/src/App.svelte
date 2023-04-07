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

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
