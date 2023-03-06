<script lang="ts">
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai'
	export let type: ChatCompletionRequestMessageRoleEnum
	export let message: string

	import { selectedBot } from '$lib/stores'
</script>

<div class="chat {type === 'user' ? 'chat-end' : 'chat-start'} justify-end">
	<div class="flex items-start mb-4 text-sm">
		<img src="{type === 'assistant' ? $selectedBot.profile_image : 'https://api.dicebear.com/5.x/adventurer/svg?backgroundType=gradientLinear' }" class="w-10 h-10 rounded mr-3" alt="{type} Profile Picture">

		<div class="flex-1 overflow-hidden">
			<div>
				<span class="font-bold">{type === 'assistant' ? $selectedBot.name : 'You'}</span>
				<span class="text-grey text-xs">12:00</span>
			</div>
			<p class="text-black leading-normal">{message}</p>
		</div>
	</div>
</div>
