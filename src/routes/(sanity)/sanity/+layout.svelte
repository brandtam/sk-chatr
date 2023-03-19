<script lang="ts">
	import '../../../app.css'
	import Header from "$lib/components/Header.svelte";
	import type { Members, SanityShows } from "$lib/types";

	export let data: {
		shows: SanityShows,
		members: Members
	};

	const showNav = false;

</script>

<Header {showNav} shows={data.shows} members={data.members} />
<slot />
