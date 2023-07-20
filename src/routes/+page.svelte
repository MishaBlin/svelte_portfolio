<script lang="ts">
	import ComicButton from '$lib/components/comicButton.svelte';
	import Projects from '$lib/components/projects.svelte';
	import WelcomePage from '$lib/components/welcomePage.svelte';
</script>

<svelte:head>
	<meta name="author" content="Mikhail Kalinin" />
	<meta name="description" content="porftfolio" />
	<meta name="keywords" content="portfolio, mikhail, kalinin" />
</svelte:head>

<WelcomePage />
<Projects />
<ComicButton />
