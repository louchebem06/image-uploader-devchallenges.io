<script lang="ts">
	import {PUBLIC_HOST_BACK} from '$env/static/public';

	export let files: any;
	export let end: boolean;
	export let url: string;

	let data = new FormData()
	data.append('file', files[0]);

	fetch(`${PUBLIC_HOST_BACK}/api/upload`,
		{
			method: 'POST',
			body: data
		})
		.then(async (response: any) => {
			console.log(await response);
			let json = await response.json();
			if (json.statusCode == 200) {
				url = `${PUBLIC_HOST_BACK}${json.message}`;
				end = true;
			} else {
				alert("Error fetch");
				files = undefined;
			}
		})
		.catch(async (e: any) => {
			alert("Error catch");
			files = undefined;
		})
</script>

<h1>Uploading...</h1>

<div class="progress">
	<div class="progress1">
	</div>
</div>

<style>
	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		letter-spacing: -0.035em;
		color: #4F4F4F;
	}

	.progress {
		margin-top: 31px;
		width: 100%;
		height: 6px;
		background: #F2F2F2;
		border-radius: 8px;
		position: relative;
		margin-bottom: 7px;
	}

	.progress1 {
		background: #2F80ED;
		border-radius: 8px;
		width: 100px;
		height: 6px;
		animation: linear 1s infinite alternate move;
		position: absolute;
		top: 0;
		left: 0;
	}

	@keyframes move {
		0% {
			left: 0;
		}
		100% {
			left: calc(100% - 100px);
		}
	}
</style>
