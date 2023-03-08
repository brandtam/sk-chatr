<script lang="ts">
	import Message from '$lib/components/Message.svelte';
	import { selectedBot } from '$lib/stores'

	import { SSE } from 'sse.js'
	import type { ChatCompletionRequestMessage } from 'openai'

	import type { ChatCompletionRequestMessageRoleEnum } from 'openai'
	let type: ChatCompletionRequestMessageRoleEnum

	let query: string = ''
	let answer: string = ''
	let loading: boolean = false
	let messages: ChatCompletionRequestMessage[] = []
	let scrollToDiv: HTMLDivElement


	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
		}, 100)
	}

	const handleSubmit = async () => {
		loading = true
		messages = [...messages, { role: 'user', content: query }]

		const eventSource = new SSE('/api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: messages, bot: $selectedBot })
		})

		query = ''

		eventSource.addEventListener('error', handleError)

		eventSource.addEventListener('message', (e) => {
			scrollToBottom()
			try {
				loading = false
				if (e.data === '[DONE]') {
					messages = [...messages, { role: 'assistant', content: answer }]
					answer = ''
					return
				}

				const completionResponse = JSON.parse(e.data)
				const [{ delta }] = completionResponse.choices

				if (delta.content) {
					answer = (answer ?? '') + delta.content
				}
			} catch (err) {
				handleError(err)
			}
		})
		eventSource.stream()
		scrollToBottom()
	}

	function handleError<T>(err: T) {
		loading = false
		query = ''
		answer = ''
		console.error(err)
	}

</script>
<div class="flex-1 flex flex-col bg-white overflow-hidden">
	<div class="border-b flex px-6 py-2 items-center flex-none">
			<div class="flex flex-col">
					<h3 class="text-grey-darkest mb-1 font-extrabold">{$selectedBot.name}</h3>
					<div class="text-grey-dark text-sm truncate">
							{$selectedBot.occupation}
					</div>
			</div>
			<!-- <div class="ml-auto hidden md:block">
					<div class="relative">
							<input type="search" placeholder="Search" class="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2">
							<div class="absolute inset-y-0 left-0 pl-3 flex items-center justify-center">
									<svg class="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
											<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
									</svg>
							</div>
					</div>
			</div> -->
	</div>
	<div class="px-6 py-4 flex-1 overflow-y-scroll">
		<Message type="assistant" message="{$selectedBot.greeting}" />
		{#each messages as message}
			<Message type={message.role} message={message.content} />
		{/each}
		{#if answer}
			<Message type="assistant" message={answer} />
		{/if}
		{#if loading}
			<Message type="assistant" message="Thinking..." />
		{/if}
		<div bind:this={scrollToDiv} />
	</div>
	<div class="pb-6 px-4 flex-none">
		<form action="" on:submit|preventDefault={() => handleSubmit()}>
			<div class="flex rounded-lg border-2 border-grey overflow-hidden">
				<span class="text-3xl text-grey border-r-2 border-grey p-2">
						<svg class="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
					</span>
					<input type="hidden" name="persona" value="{$selectedBot.bio}">
				<input type="text" class="w-full px-4" placeholder="Message Input" bind:value={query} />
			</div>
		</form>
	</div>
</div>