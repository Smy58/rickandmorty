<template>
	<div class="load-block">
		<div class="loader"></div>
	</div>
</template>

<script>
export default {
	name: "LoadBlock"
}
</script>

<style lang="scss">
	.load-block {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;

		background: #000000a2;
	}

	/* HTML: <div class="loader"></div> */
	.loader {
	width: 50px;
	height: 50px;
	aspect-ratio: 1;
	border-radius: 50%;
	border: 8px solid #ffffff;
	animation:
		l20-1 0.8s infinite linear alternate,
		l20-2 1.6s infinite linear;
	}
	@keyframes l20-1{
	0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
	12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
	25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
	50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
	62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
	75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
	100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
	}
	@keyframes l20-2{ 
	0%    {transform:scaleY(1)  rotate(0deg)}
	49.99%{transform:scaleY(1)  rotate(135deg)}
	50%   {transform:scaleY(-1) rotate(0deg)}
	100%  {transform:scaleY(-1) rotate(-135deg)}
	}
</style>