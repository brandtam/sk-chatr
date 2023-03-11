<script lang="ts">
	import { openSide, allShows, selectedShow } from '$lib/stores'

	function handleSelect(id: string) {
		if (id === $selectedShow.id) return;
		$openSide = !$openSide
		$selectedShow = allShows.find(show => show.id === id) || $selectedShow;
		localStorage.setItem('selectedShow', JSON.stringify($selectedShow));
	};
</script>

<div on:click|preventDefault={() => $openSide = !$openSide} on:keyup class="{$openSide ? 'block' : 'hidden' } bg-indigo-darkest text-purple-lighter flex-none w-16 md:w-24 p-6 px-2 md:p-6">
	{#each allShows as show}
		{#if show.display }
		<div on:click|preventDefault={() => handleSelect(show.id) } on:keyup class="cursor-pointer mb-4">
			<div class="bg-white {$selectedShow.id === show.id ? '' : 'opacity-40'} h-18 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
					<img src="/shows/{show.handle}/{show.handle}.jpg" alt="">
			</div>
			<div class="text-center text-white opacity-50 text-sm">&#8984;{show.id}</div>
		</div>
		{/if}
	{/each}
</div>
