<script lang="ts">
	import { onMount } from 'svelte';
	import moment from 'moment';
	import { base } from '$app/paths';
	interface Comic {
		month: number;
		num: number;
		link: string;
		year: number;
		news: string;
		safe_title: string;
		transcript: string;
		alt: string;
		img: string;
		title: string;
		day: number;
	}

	async function fetchID(email: string): Promise<string> {
		const params: URLSearchParams = new URLSearchParams();
		if (email) {
			params.append('email', email);
		}
		const response: Response = await fetch(
			'https://fwd.innopolis.university/api/hw2?' + params.toString()
		);
		return await response.json();
	}

	async function fetchImage(id: string): Promise<Comic> {
		const params = new URLSearchParams();
		if (id) {
			params.append('id', id);
		}
		const response: Response = await fetch(
			'https://fwd.innopolis.university/api/comic?' + params.toString()
		);
		return await response.json();
	}

	let image_src = '#';
	let image_alt = 'Requested_comic';
	let title = 'Loading...';
	let date_element = 'Loading...';
	let time_ago_element = 'Loading...';
	$: image_src, image_alt, title, date_element, time_ago_element;
	onMount(async () => {
		if (typeof document !== 'undefined') {
			const id = await fetchID('mi.kalinin@innopolis.university');
			const data = await fetchImage(id);
			const date = new Date(Date.UTC(data.year, data.month, data.day));
			console.log(data);
			image_src = data.img;
			image_alt = data.alt;
			title = data.safe_title;
			date_element = 'Date: ' + date.toLocaleDateString();
			time_ago_element =
				'The comic was released ' + moment(`${data.year}-${data.month}-${data.day}`).fromNow();
		}
	});
</script>

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
