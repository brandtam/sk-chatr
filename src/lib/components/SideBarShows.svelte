<script lang="ts">
	import { messages, openSide, selectedSanityShow, clickedSanityShow, sanityMembers, getMembers, selectedMember, sanityShows } from '$lib/stores'
	import { urlFor } from '$lib/utils/sanity';
	export let shows

	if (!$clickedSanityShow) {
		$clickedSanityShow = shows[0]
	}

	function handleSelect(id: string) {
		if ($clickedSanityShow._id === id) return;
		$clickedSanityShow = $sanityShows.find(show => show._id === id) || $selectedSanityShow;
		getMembers($clickedSanityShow._id)
	};

	function handleCastSelect(id: string) {
		if (id === $selectedMember._id) return;
		$selectedMember = $sanityMembers.find(member => member._id === id) || $selectedMember;
		console.log(`member-clicked`, $selectedMember)
		$selectedSanityShow = $clickedSanityShow
		localStorage.setItem('selectedMember', JSON.stringify($selectedMember));
		localStorage.setItem('selectedSanityShow', JSON.stringify($selectedSanityShow));
		$openSide = false
		$messages = [];
	};

</script>

<div class="md:w-24 p-6 px-2 md:p-6">
	{#each $sanityShows as show, index}
		{#if show.active }
		<div on:click|preventDefault={() => handleSelect(show._id) } on:keyup class="cursor-pointer mb-4">
			<div class="bg-white {$clickedSanityShow._id === show._id ? '' : 'opacity-40'} h-18 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
					<img src={urlFor(show.image).url()} alt="{show.name} Group Image">
			</div>
			<div class="text-center text-white opacity-50 text-sm">&#8984;{index + 1}</div>
		</div>
		{/if}
	{/each}
</div>
<div class="flex-none py-6">
	<div class="mb-8">
		<div class="px-4 mb-2 text-white flex justify-between items-center">
			<div class="border-b-2 border-grey mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-extrabold  tracking-tighter text-transparent">{$clickedSanityShow.name}</div>
		</div>
		{#if $sanityMembers.length === 0}
			<div class="px-4 mb-2 text-white flex justify-between items-center">
				<div class="border-b-2 border-grey mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-extrabold  tracking-tighter text-transparent">No Cast</div>
			</div>
		{:else}
		{#each $sanityMembers as member}
			<div on:keydown on:click|preventDefault={() => handleCastSelect(member._id)} class="flex items-center mb-3 px-4 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-extrabold tracking-tighter text-transparent {member.name === $selectedMember.name ? 'text-2xl ' : 'text-lg hover:bg-purple-900'}">
				<span class="rounded-full block w-2 h-2 mr-2 {member.name === $selectedMember.name ? 'border border-white' : ''} "></span>
				<span class="">{member.name}</span>
			</div>
		{/each}
		{/if}
	</div>
</div>
