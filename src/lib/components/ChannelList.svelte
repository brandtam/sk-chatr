<script lang="ts">
	import type { Bots } from '$lib/types';

	export let bots: Bots;
	export let selected: string;
	export let handleSelectBot: (name: string) => void;

	function handleSelect(name: string) {
		console.log(name)
		// selected = name;
		handleSelectBot(name);
	};
</script>

<div class="bg-purple-800 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
	<div class="text-white mb-2 mt-3 px-4 flex justify-between">
		<div class="flex-auto">
			<h1 class="font-semibold text-xl leading-tight mb-1 truncate">Chatrbot</h1>
			<div class="flex items-center mb-6">
				<span class="bg-green rounded-full block w-2 h-2 mr-2"></span>
				<span class="text-white opacity-50 text-sm">Brandt Milczewski</span>
			</div>
		</div>
	</div>
	<div class="mb-8">
		<div class="px-4 mb-2 text-white flex justify-between items-center">
			<div class="opacity-75">Chats</div>
		</div>
		{#each bots as bot}
			<div on:keydown on:click|preventDefault={() => handleSelect(bot.name)} class="flex items-center mb-3 px-4 cursor-pointer  {bot.name === selected ? 'bg-purple-700' : 'hover:bg-purple-900'}">
				<span class="bg-green rounded-full block w-2 h-2 mr-2 {bot.name === selected ? 'border border-white' : ''} "></span>
				<span class="text-white">{bot.name}</span>
			</div>
		{/each}
	</div>
</div>