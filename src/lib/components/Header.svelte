<script lang="ts">
	import { browser } from "$app/environment";
	import { clickOutside } from "$lib/utils/clickOutside";

	import MenuGradientButton from "$lib/components/MenuGradientButton.svelte";
	import GithubRepoButton from "$lib/components/GithubRepoButton.svelte";

	import SideBarShows from '$lib/components/SideBarShows.svelte';

	import { selectedMember, selectedSanityShow, openSide, clickedSanityShow, sanityMembers, sanityShows } from '$lib/stores'
	import type { SanityShows, Members } from "$lib/types";

	// export let shows: SanityShows;
	export let members: Members;

	if (browser) {
		$selectedMember = JSON.parse(localStorage.getItem('selectedMember') || 'null')
		$selectedSanityShow = JSON.parse(localStorage.getItem('selectedSanityShow') || 'null')
	}

	if (!$sanityMembers || $sanityMembers.length === 0) {
		$sanityMembers = members
	}

	if (!$selectedMember) {
		$selectedMember = members[0];
	}

	if (!$selectedSanityShow) {
		$selectedSanityShow = $sanityShows[0];
	}

	if (!$clickedSanityShow) {
		$clickedSanityShow = $sanityShows[0];
	}

	function handleClickOutside() {
		$openSide = false;
	}
</script>

<div class="bg-gray-900 text-white p-2 md:p-6 flex flex-row items-center h-20 w-full z-20">
	<div class="flex basis-1/3 items-center">
		<MenuGradientButton />
	</div>
	<div class="basis-1/3 flex flex-col items-center">
		<h1 class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent px-2">ChatrBot</h1>
		<div class="flex flex-col items-center">
			<span class="text-white opacity-50 text-sm">chatr.tech</span>
		</div>
	</div>
	<div class="basis-1/3">
		<GithubRepoButton />
	</div>
	<div use:clickOutside on:click_outside={handleClickOutside} class="bg-gray-900 fixed top-20 left-0 flex z-10 w-11/12 rounded-br-lg max-w-md {$openSide ? 'block' : 'hidden' }">
		<!-- Sidebar -->
		<SideBarShows />
	</div>
</div>
