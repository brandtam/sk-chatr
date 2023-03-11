<script lang="ts">
	import { openSide } from '$lib/stores'
	import { clickedShow, selectedShow } from '$lib/stores'

	function handleClick() {
		$openSide = !$openSide
		$clickedShow = $selectedShow
	}
</script>

<button on:click|preventDefault={() => handleClick()} on:keyup class="rounded-md hover:bg-gray-800 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none">
	<svg
		viewBox="0 0 20 20"
		class="w-10 h-10 fill-[url(#grad1)] hover:fill-[url(#grad2)] stroke-none">
		<defs>
			<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
				<stop offset="70%" style="stop-color:#ef4444;stop-opacity:1" />
				<stop offset="100%" style="stop-color:#eab308;stop-opacity:1" />
			</linearGradient>
			<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
				<stop offset="30%" style="stop-color:#ef4444;stop-opacity:1" />
				<stop offset="100%" style="stop-color:#eab308;stop-opacity:1" />
			</linearGradient>
		</defs>
		<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
	</svg>
</button>