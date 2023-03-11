<script lang="ts">
	import { openSide, allShows, selectedShow } from '$lib/stores'
	console.log(`$selectedShow1`, $selectedShow)

	function handleSelect(id: string) {
		if (id === $selectedShow.id) return;
		$openSide = !$openSide
		$selectedShow = allShows.find(show => show.id === id) || $selectedShow;
		localStorage.setItem('selectedShow', JSON.stringify($selectedShow));
		console.log(`$selectedShow`, $selectedShow)
	};
</script>

<div on:click|preventDefault={() => $openSide = !$openSide} on:keyup class="bg-indigo-darkest text-purple-lighter flex-none w-16 md:w-24 p-6 px-2 md:p-6">
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

	<!-- <div class="cursor-pointer">
			<div class="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
					<svg class="fill-current h-10 w-10 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
			</div>
	</div> -->
</div>