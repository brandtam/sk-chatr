<script lang="ts">
	import { browser } from '$app/environment';
	import Message from '$lib/components/Message.svelte';
	import { selectedBot, messages, openSide } from '$lib/stores'
	import { SSE } from 'sse.js'

	let query: string = ''
	let answer: string = ''
	let loading: boolean = false

	let scrollToDiv: HTMLDivElement

	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
		}, 100)
	}

	const handleSubmit = async () => {
		loading = true
		messages.set([...$messages, { role: 'user', content: query }])

		const eventSource = new SSE('/api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: $messages, bot: $selectedBot })
		})

		query = ''

		eventSource.addEventListener('error', handleError)

		eventSource.addEventListener('message', (e) => {
			scrollToBottom()
			try {
				loading = false
				if (e.data === '[DONE]') {
					$messages = [...$messages, { role: 'assistant', content: answer }]
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

	function openSideNav() {
		$openSide = !$openSide
	}

</script>

{#if browser}
<div class="flex-1 flex flex-col justify-end bg-gray-800 text-gray-100 overflow-hidden h-screen">
	<div on:keydown on:click|preventDefault={() => openSideNav()} class="cursor-pointer border-b flex px-6 py-2 items-center justify-between">
		<div class="flex">
			<img src="{$selectedBot.profile_image}" alt="{$selectedBot.name}'s Profile Pic" class="w-16 h-16 rounded mr-3">
			<div class="flex flex-col">
				<div class="text-gray-100 mb-1 font-extrabold">{$selectedBot.name}</div>
				<div class="text-gray-200 text-sm truncate">
					{$selectedBot.bio}
				</div>
			</div>
		</div>
		<div class="flex ml-10 {$openSide ? 'hidden' : 'block md:hidden' }">
			<svg class="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/></svg>
			<p>switch</p>
		</div>
	</div>
	<div class="px-6 py-4 overflow-y-scroll">
		<Message type="assistant" message="{$selectedBot.greeting}" />
		{#each $messages as message}
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
		<form on:submit|preventDefault={() => handleSubmit()}>
			<div class="flex rounded-lg border-2 border-grey overflow-hidden">
				<span class="text-3xl border-r-2 border-grey p-2">
					<svg class="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
				</span>
				<input type="hidden" name="persona" value="{$selectedBot.bio}">
				<input type="text" class="text-black w-full px-4" placeholder="Say Something..." bind:value={query} />
			</div>
		</form>
	</div>
</div>
{:else}
<div class="bg-gray-800">Loading...</div>
{/if}