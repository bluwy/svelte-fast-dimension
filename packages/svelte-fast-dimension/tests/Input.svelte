<script>
	let clientWidth, foo, w, h, w2, h2;
	let index = 0;
	let myObject = { b: 0, c: { d: [] } };
	let myArray = [{ width: 0 }, { height: 1 }];
</script>

<div bind:clientWidth />
<div bind:clientWidth={foo} />
<div bind:clientWidth bind:clientHeight={w} />
<div bind:clientWidth={w} bind:clientHeight={h} bind:offsetWidth={w2} bind:offsetHeight={h2} />
<div data-foo="bar" bind:clientWidth={foo} />
<div bind:clientWidth={myObject.width} />
<div bind:clientWidth={myArray[0].b} bind:clientHeight={myArray[1].height} />
<div bind:clientWidth={myArray[index]} />
