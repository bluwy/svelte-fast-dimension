<script>
	let clientWidth, foo, w, h, w2, h2;
</script>

<div bind:clientWidth />
<div bind:clientWidth={foo} />
<div bind:clientWidth bind:clientHeight={w} />
<div bind:clientWidth={w} bind:clientHeight={w} bind:offsetWidth={w} bind:offsetHeight={w} />
