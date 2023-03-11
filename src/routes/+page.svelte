<script lang="ts">
	import MessagePanel  from '$lib/components/MessagePanel.svelte';
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

	<!-- Messages -->
	<MessagePanel />

