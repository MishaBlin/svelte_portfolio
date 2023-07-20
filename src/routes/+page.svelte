<script>
	import ComicButton from '$lib/components/ComicButton.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import WelcomePage from '$lib/components/WelcomePage.svelte';
</script>

<svelte:head>
	<meta name="author" content="Mikhail Kalinin" />
	<meta name="description" content="porftfolio" />
	<meta name="keywords" content="portfolio, mikhail, kalinin" />
</svelte:head>

<WelcomePage />
<Projects />
<ComicButton />
