<script lang="ts">
	import '../../app.css'
	import Header from '$lib/components/Header.svelte';
	import type { Members, SanityShows } from '$lib/types';

	export let data: {
		shows: SanityShows,
		members: Members
	};
	const showNav = true;
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#603cba">
	<meta name="theme-color" content="#eeeeee">
</svelte:head>

<div class="bg-gray-700 fixed flex flex-col w-screen h-screen">
	<Header {showNav} shows={data.shows} members={data.members} />
	<slot />
</div>

