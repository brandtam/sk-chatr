<script lang="ts">

	import { browser } from "$app/environment";
	import MessagePanel  from '$lib/components/MessagePanel.svelte';

	import { allBots, selectedBot, messages } from '$lib/stores'

	if (browser) {
		$selectedBot = JSON.parse(localStorage.getItem('selectedBot') || 'null')
	}

	if (!$selectedBot) {
		$selectedBot = allBots[0];
	}

	function handleSelect(name: string) {
		if (name === $selectedBot.name) return;
		$selectedBot = allBots.find(bot => bot.name === name) || $selectedBot;
		localStorage.setItem('selectedBot', JSON.stringify($selectedBot));
		$messages = [];
	};

</script>

{#if browser}
	<div class="font-sans antialiased h-screen flex bg-gray-900">
		<div class="flex-none w-64 pb-6 hidden md:block">
			<div class="text-white mb-2 mt-3 px-4 flex justify-between">
				<div class="flex-auto">
					<h1 class="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent">Chatrbot</h1>
					<div class="flex items-center mb-6">
						<span class="bg-green rounded-full block w-2 h-2 mr-2"></span>
						<span class="text-white opacity-50 text-sm">chatr.tech</span>
					</div>
				</div>
			</div>
			<div class="mb-8">
				<div class="px-4 mb-2 text-white flex justify-between items-center">
					<div class="opacity-75">Chats</div>
				</div>
				{#each allBots as bot}
					<div on:keydown on:click|preventDefault={() => handleSelect(bot.name)} class="flex items-center mb-3 px-4 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-extrabold tracking-tighter text-transparent {bot.name === $selectedBot.name ? 'text-2xl ' : 'text-lg hover:bg-purple-900'}">
						<span class="bg-green rounded-full block w-2 h-2 mr-2 {bot.name === $selectedBot.name ? 'border border-white' : ''} "></span>
						<span class="">{bot.name}</span>
					</div>
				{/each}
			</div>
		</div>

		<MessagePanel />

	</div>
{/if}