<script lang="ts">
	let input: any;

	function dropHandler(event: any) {
		event.preventDefault();
		if (event.dataTransfer.files.length != 1) {
			alert("Only one file");
			return ;
		}
		if (event.dataTransfer.files[0].type != "image/jpeg"
			&& event.dataTransfer.files[0].type != "image/jpg"
			&& event.dataTransfer.files[0].type != "image/png")
		{
			alert("Format not authorize");
			return ;
		}
		const file = event.dataTransfer.files[0];
		//input.value = file.name;
		console.log(file.name);
	}

	function dragOverHandler(event: any) {
		event.preventDefault();
	}

	function getInput() {
		input.click();
	}
</script>

<input bind:this={input} type="file" accept="image/jpeg, image/png, image/jpg" />

<h1>Upload your image</h1>
<p>File should be Jpeg, Png,...</p>

<div
	class="dropDiv"
	on:drop={dropHandler}
	on:dragover={dragOverHandler}
>
	<img src="/image.svg" alt="" />
	<p>Drag & Drop your image here</p>
</div>

<h2>Or</h2>

<div class="containerButton">
	<button on:click={getInput}>Choose a file</button>
</div>

<style>
	h1, h2, p, button {
		text-align: center;
		font-style: normal;
		font-weight: 500;
		letter-spacing: -0.035em;
	}

	h1 {
		font-size: 18px;
		line-height: 27px;
		color: #4F4F4F;
	}

	h2 {
		font-size: 12px;
		line-height: 18px;
		color: #BDBDBD;
		margin-top: 19px;
		margin-bottom: 22px;
	}

	p {
		font-size: 10px;
		line-height: 15px;
		color: #828282;
		margin-top: 15px;
	}

	.dropDiv {
		width: 100%;
		background-color: #F6F8FB;
		border: 1px dashed #97BEF4;
		border-radius: 12px;
		margin-top: 30px;
	}

	.dropDiv img {
		width: 115px;
		margin: auto;
		display: block;
		margin-top: 35.84px;
	}

	.dropDiv p {
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: -0.035em;
		color: #BDBDBD;
		margin-top: 38px;
		margin-bottom: 40px;
	}
</style>
