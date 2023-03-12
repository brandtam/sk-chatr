<script lang="ts">
	import { openSide, allBots, allShows, selectedBot, messages, selectedShow, clickedShow } from '$lib/stores'

	function handleSelect(id: string, showId: string) {
		if (id === $selectedBot.id) return;
		$selectedBot = allBots.find(bot => bot.id === id) || $selectedBot;
		$selectedShow = allShows.find(show => show.id === showId) || $selectedShow;
		$clickedShow = allShows.find(show => show.id === showId) || $clickedShow;
		localStorage.setItem('selectedBot', JSON.stringify($selectedBot));
		localStorage.setItem('selectedShow', JSON.stringify($selectedShow));
		$openSide = false
		$messages = [];
	};
</script>

<div class="flex-none py-6">
	<div class="mb-8">
		<div class="px-4 mb-2 text-white flex justify-between items-center">
			<div class="border-b-2 border-grey mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-extrabold  tracking-tighter text-transparent">{$clickedShow.name}</div>
		</div>
		{#each allBots as bot}
			{#if bot.showId === $clickedShow.id}
				<div on:keydown on:click|preventDefault={() => handleSelect(bot.id, bot.showId)} class="flex items-center mb-3 px-4 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-extrabold tracking-tighter text-transparent {bot.name === $selectedBot.name ? 'text-2xl ' : 'text-lg hover:bg-purple-900'}">
					<span class="rounded-full block w-2 h-2 mr-2 {bot.name === $selectedBot.name ? 'border border-white' : ''} "></span>
					<span class="">{bot.name}</span>
				</div>
			{/if}
		{/each}
	</div>
</div>