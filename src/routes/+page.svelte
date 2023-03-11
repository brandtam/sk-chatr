<script lang="ts">

	import { browser } from "$app/environment";
	import MessagePanel  from '$lib/components/MessagePanel.svelte';

	import SideBarShows from '$lib/components/SideBarShows.svelte';
	import SideBarCast from '$lib/components/SideBarCast.svelte';

	import { allBots, selectedBot, allShows, selectedShow } from '$lib/stores'

	if (browser) {
		$selectedBot = JSON.parse(localStorage.getItem('selectedBot') || 'null')
		$selectedShow = JSON.parse(localStorage.getItem('selectedShow') || 'null')
	}

	if (!$selectedBot) {
		$selectedBot = allBots[0];
	}

	if (!$selectedShow) {
		$selectedShow = allShows[0];
	}

</script>

<svelte:head>
  <title>Chatr.tech - For Fun</title>
  <link rel="canonical" href="https://www.chatr.tech/" />

	<meta name="description" content="The app defines different 'bots' to chat with. Each bot has it's own personality and style of responses. The app uses OpenAI's GPT-3 API to generate responses for the bot.">

  <meta property="og:title" content="Chatr.tech" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="The app defines different 'bots' to chat with. Each bot has it's own personality and style of responses. The app uses OpenAI's GPT-3 API to generate responses for the bot." />
  <meta property="og:url" content="https://www.chatr.tech/" />
  <meta property="og:image" content="https://www.chatr.tech/preview.png" />
</svelte:head>

<div class="font-sans antialiased flex bg-gray-900 min-h-[calc(100vh-80px)]">
	<!-- Show Cast -->
	<SideBarShows />

	<!-- Bot Nav -->
	<SideBarCast />

	<!-- Messages -->
	<MessagePanel />
</div>

