<script lang="ts">
	import { openSide, allBots, selectedBot, messages, selectedShow } from '$lib/stores'

	function handleSelect(name: string) {
		if (name === $selectedBot.name) return;
		$openSide = !$openSide
		$selectedBot = allBots.find(bot => bot.name === name) || $selectedBot;
		localStorage.setItem('selectedBot', JSON.stringify($selectedBot));
		$messages = [];
	};
</script>

<div class="flex-none w-44 py-6 {$openSide ? 'block' : 'hidden' }">
	<div class="mb-8">
		<div class="px-4 mb-2 text-white flex justify-between items-center">
			<div class="border-b-2 border-grey mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-extrabold  tracking-tighter text-transparent">{$selectedShow.name}</div>
		</div>
		{#each allBots as bot}
			{#if bot.showId === $selectedShow.id}
				<div on:keydown on:click|preventDefault={() => handleSelect(bot.name)} class="flex items-center mb-3 px-4 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-extrabold tracking-tighter text-transparent {bot.name === $selectedBot.name ? 'text-2xl ' : 'text-lg hover:bg-purple-900'}">
					<span class="rounded-full block w-2 h-2 mr-2 {bot.name === $selectedBot.name ? 'border border-white' : ''} "></span>
					<span class="">{bot.name}</span>
				</div>
			{/if}
		{/each}
	</div>
</div>