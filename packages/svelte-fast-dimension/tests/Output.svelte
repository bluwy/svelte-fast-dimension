<script>import { resize as ___resize } from "svelte-fast-dimension/action";
	let clientWidth, foo, w, h, w2, h2;
</script>

<div use:___resize on:fd:resize={(e) => { clientWidth = e.target.clientWidth }}  />
<div use:___resize on:fd:resize={(e) => { foo = e.target.clientWidth }}  />
<div use:___resize on:fd:resize={(e) => { clientWidth = e.target.clientWidth; w = e.target.clientHeight }}   />
<div use:___resize on:fd:resize={(e) => { w = e.target.clientWidth; w = e.target.clientHeight; w = e.target.offsetWidth; w = e.target.offsetHeight }}     />
