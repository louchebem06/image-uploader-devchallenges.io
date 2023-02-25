<script lang="ts">
  import Uploader from "$lib/Uploader.svelte";
  import Loader from "$lib/Loader.svelte";
  import Success from "$lib/Success.svelte";
</script>

<svelte:head>
	<title>Image Uploader</title>
</svelte:head>

<div class="mainDiv">
	<Uploader />
	<Loader />
	<Success />
</div>

<style>
	.mainDiv {
		width: calc(402px - 31px);
		padding: 31px;
		background: #FFFFFF;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 12px;
	}
</style>
