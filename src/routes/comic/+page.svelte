<script lang="ts">
	import { onMount } from 'svelte';
	import moment from 'moment';
	import { base } from '$app/paths';
	export let data;

	let image_src = '#';
	let image_alt = 'Requested_comic';
	let title = 'Loading...';
	let date_element = 'Loading...';
	let time_ago_element = 'Loading...';
	$: image_src, image_alt, title, date_element, time_ago_element;
	onMount(async () => {
		if (typeof document !== 'undefined') {
			let { dataImage } = data;

			const date = new Date(Date.UTC(dataImage.year, dataImage.month, dataImage.day));
			image_src = dataImage.img;
			image_alt = dataImage.alt;
			title = dataImage.safe_title;
			date_element = 'Date: ' + date.toLocaleDateString();
			time_ago_element =
				'The comic was released ' +
				moment(`${dataImage.year}-${dataImage.month}-${dataImage.day}`).fromNow();
		}
	});
</script>

<svelte:head>
	<meta name="description" content="comic" />
	<meta name="keywords" content="comic, api" />
	<meta name="author" content="Mikhail Kalinin" />
</svelte:head>

<div class="request-wrapper">
	<h1 id="request-title">{title}</h1>
	<h2 id="request-date">{date_element}</h2>
	<img id="request-image" src={image_src} alt={image_alt} />
	<h3 id="request-time-ago">{time_ago_element}</h3>
</div>

<div class="home_button">
	<a href="{base}/">Home</a>
</div>

<style>
	.request-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
		font-family: Montserrat, sans-serif;
		margin-top: 6rem;
	}

	#request-image {
		width: 50%;
		height: 55%;
	}
	.home_button {
		text-align: center;
		background-color: #1d1d1d;
		padding: 10px;
	}

	.home_button a {
		color: #ffffff;
		font-size: 2rem;
		font-weight: 500;
		background-color: #d82949;
		border-radius: 10px;
		padding: 2px;
		font-family: Montserrat, sans-serif;
	}
</style>
