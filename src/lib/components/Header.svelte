<script lang="ts">
	import MenuGradientButton from "$lib/components/MenuGradientButton.svelte";
	import GithubRepoButton from "$lib/components/GithubRepoButton.svelte";
</script>

<nav class="bg-gray-900 text-white p-2 md:p-6 flex flex-row items-center h-20 sticky w-full">
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
</nav>