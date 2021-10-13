<script>
	let clientWidth, foo, w, h, w2, h2;
</script>

<div bind:clientWidth />
<div bind:clientWidth={foo} />
<div bind:clientWidth bind:clientHeight={w} />
<div bind:clientWidth={w} bind:clientHeight={h} bind:offsetWidth={w2} bind:offsetHeight={h2} />
<div data-foo="bar" bind:clientWidth={foo} />
