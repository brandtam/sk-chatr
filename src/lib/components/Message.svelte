<script lang="ts">
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai'
	export let type: ChatCompletionRequestMessageRoleEnum
	export let message: string
	import { urlFor } from '$lib/utils/sanity';

	import { selectedMember } from '$lib/stores'
</script>

<div class="text-gray-100 chat {type === 'user' ? 'chat-end' : 'chat-start'} justify-end">
	<div class="flex items-start p-2 text-sm">
		<img src="{type === 'assistant' ? urlFor($selectedMember.image).url() : 'https://github.com/identicons/chatbot.png' }" class="w-10 h-10 rounded mr-3" alt="{type} Profile Picture">

		<div class="flex-1 overflow-hidden text-gray-100">
			<div>
				<span class="font-bold ">{type === 'assistant' ? $selectedMember.name : 'You'}</span>
				<span class="text-xs">12:00</span>
			</div>
			<p class="text-gray-100  leading-normal">{message}</p>
		</div>
	</div>
</div>
