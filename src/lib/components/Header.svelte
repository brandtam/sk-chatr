<script lang="ts">
		import { openSide } from '$lib/stores'
</script>

<nav class="bg-gray-900 text-white p-2 md:p-6 flex flex-row items-center h-20 sticky w-full">
	<div class="flex basis-1/3 items-center space-x-2">
		<button on:click|preventDefault={() => $openSide = !$openSide} on:keyup class="rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none block md:hidden">
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
	</div>
	<div class="basis-1/3 flex flex-col items-center">
		<h1 class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent px-2">ChatrBot</h1>
		<div class="flex flex-col items-center">
			<!-- <span class="bg-white rounded-full block w-2 h-2 mr-2"></span> -->
			<span class="text-white opacity-50 text-sm">chatr.tech</span>
		</div>
	</div>
	<!-- <div class="flex items-center space-x-2 bg-gray-600 ">
		ok
	</div> -->
	<div class="basis-1/3">
		<a
			href="https://github.com/brandtam/sk-chatr"
			class="github-corner"
			aria-label="View source on GitHub"
			target="_blank" rel="noreferrer"
		>
			<svg
				class="w-20 h-20 absolute top-0 right-0 border-0 fill-[url(#grad3)] hover:fill-[url(#grad4)] stroke-none"
				viewBox="0 0 250 250"
				aria-hidden="true">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
						<stop offset="40%" style="stop-color:#ef4444;stop-opacity:1" />
						<stop offset="100%" style="stop-color:#eab308;stop-opacity:1" />
					</linearGradient>
					<linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
						<stop offset="60%" style="stop-color:#ef4444;stop-opacity:1" />
						<stop offset="100%" style="stop-color:#eab308;stop-opacity:1" />
					</linearGradient>
				</defs>
				<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
				<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
				<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
			</svg>
			</a>
				<style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
	</div>
</nav>