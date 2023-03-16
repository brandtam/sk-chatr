<script lang="ts">
	import { openSide, sanityMembers, allShows, selectedMember, messages, selectedSanityShow, clickedSanityShow } from '$lib/stores'
	import type { Members, SanityShows } from '$lib/types';

	export let members: Members;
	export let shows: SanityShows;

	function handleSelect(id: string) {
		if (id === $selectedMember._id) return;
		$selectedMember = members.find(bot => bot._id === id) || $selectedMember;
		// $selectedSanityShow = shows.find(show => show._id === showId) || $selectedSanityShow;
		// $clickedSanityShow = shows.find(show => show._id === showId) || $clickedSanityShow;
		localStorage.setItem('selectedMember', JSON.stringify($selectedMember));
		// localStorage.setItem('selectedSanityShow', JSON.stringify($selectedSanityShow));
		$openSide = false
		$messages = [];
	};
	console.log(`castMembers`, $sanityMembers)

	$: members = $sanityMembers

	console.log(`members`, members)
</script>

<div class="flex-none py-6">
	<div class="mb-8">
		<div class="px-4 mb-2 text-white flex justify-between items-center">
			<div class="border-b-2 border-grey mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-extrabold  tracking-tighter text-transparent">{$clickedSanityShow.name}</div>
		</div>
		{#each $sanityMembers as member}
			<div on:keydown on:click|preventDefault={() => handleSelect(member._id)} class="flex items-center mb-3 px-4 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-extrabold tracking-tighter text-transparent {member.name === $selectedMember.name ? 'text-2xl ' : 'text-lg hover:bg-purple-900'}">
				<span class="rounded-full block w-2 h-2 mr-2 {member.name === $selectedMember.name ? 'border border-white' : ''} "></span>
				<span class="">{member.name}</span>
			</div>
		{/each}
	</div>
</div>