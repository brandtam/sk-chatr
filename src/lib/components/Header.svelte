<script lang="ts">
	import { browser } from "$app/environment";
	import { clickOutside } from "$lib/utils/clickOutside";

	import MenuGradientButton from "$lib/components/MenuGradientButton.svelte";
	import GithubRepoButton from "$lib/components/GithubRepoButton.svelte";

	import SideBarShows from '$lib/components/SideBarShows.svelte';
	import SideBarCast from '$lib/components/SideBarCast.svelte';

	import { allBots, selectedBot, allShows, selectedShow, openSide, clickedShow } from '$lib/stores'

	if (browser) {
		$selectedBot = JSON.parse(localStorage.getItem('selectedBot') || 'null')
		$selectedShow = JSON.parse(localStorage.getItem('selectedShow') || 'null')
	}

	if (!$selectedBot) {
		$selectedBot = allBots[0];
	}

	if (!$selectedShow) {
		$selectedShow = allShows[0];
	}

	if (!$clickedShow) {
		$clickedShow = $selectedShow
	}

	function handleClickOutside() {
		$openSide = false;
	}
</script>

<nav class="bg-gray-900 text-white p-2 md:p-6 flex flex-row items-center h-20 fixed w-full z-20">
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
		<!-- Show Cast -->
		<SideBarShows />

		<!-- Bot Nav -->
		<SideBarCast />
	</div>
</nav>
