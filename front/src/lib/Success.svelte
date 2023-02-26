<script lang="ts">
	export let src: string;
	let input: any;

	function copy() {
		navigator.clipboard.writeText(input.value);
	}
</script>

<span class="material-symbols-outlined">
	check
</span>	

<h1>Uploaded Successfully!</h1>

<img {src} alt="" />

<div class="copy">
	<input bind:this={input} value={src} type="text" disabled/>
	<button on:click={copy}>Copy Link</button>
</div>

<style>
	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		text-align: center;
		letter-spacing: -0.035em;
		color: #4F4F4F;
	}

	img {
		display: block;
		width: 100%;
		min-height: 200px;
		border-radius: 12px;
		object-fit: cover;
		margin: 26px 0;
	}

	.copy {
		background: #F6F8FB;
		border: 1px solid #E0E0E0;
		border-radius: 8px;
		height: 34px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px
	}

	.copy input {
		overflow: hidden;
		font-style: normal;
		font-weight: 500;
		font-size: 8px;
		line-height: 12px;
		text-align: center;
		letter-spacing: -0.035em;
		color: #4F4F4F;
		width: 100%;
		border: none;
		background-color: transparent;
		padding-left: 10px;
	}

	button {
		flex-shrink: 0;
		margin-right: 1px;
	}

	span {
		background: #219653;
		color: white;
		width: 35px;
		height: 35px;
		border-radius: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		font-size: 35px;
		margin: 10px auto;
	}
</style>
