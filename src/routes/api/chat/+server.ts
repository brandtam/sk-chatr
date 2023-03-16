import { OPENAI_API_KEY } from '$env/static/private';
import type { CreateChatCompletionRequest, ChatCompletionRequestMessage } from 'openai';
import type { RequestHandler } from './$types';
import { getTokens } from '$lib/utils/tokenizer';
import { json } from '@sveltejs/kit';
import type { Config } from '@sveltejs/adapter-vercel';
import type { Member } from '$lib/types';

export const config: Config = {
	runtime: 'edge'
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		if (!OPENAI_API_KEY) {
			throw new Error('OPENAI_API_KEY env variable not set');
		}

		const requestData = await request.json();

		if (!requestData) {
			throw new Error('No request data');
		} else if (!requestData.bot) {
			throw new Error('No bot provided');
		}

		if (requestData.bot) {
			const bot: Member = requestData.bot;
			if (!bot._id) {
				throw new Error('No bot id provided');
			} else if (!bot.prompt) {
				throw new Error('No bot prompt provided');
			}
		}

		const reqBot = requestData.bot;
		const reqMessages: ChatCompletionRequestMessage[] = requestData.messages;

		if (!reqMessages) {
			throw new Error('no messages provided');
		}

		let tokenCount = 0;

		reqMessages.forEach((msg) => {
			const tokens = getTokens(msg.content);
			tokenCount += tokens;
		});

		const prompt = JSON.stringify(reqBot.prompt);
		tokenCount += getTokens(prompt);

		if (tokenCount >= 4000) {
			throw new Error('Query too large');
		}

		const messages: ChatCompletionRequestMessage[] = [
			{ role: 'system', content: prompt },
			...reqMessages
		];

		const chatRequestOpts: CreateChatCompletionRequest = {
			model: 'gpt-3.5-turbo-0301',
			messages,
			temperature: 1.2,
			stream: true
		};

		const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
			headers: {
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(chatRequestOpts)
		});

		if (!chatResponse.ok) {
			const err = await chatResponse.json();
			throw new Error(err);
		}

		return new Response(chatResponse.body, {
			headers: {
				'Content-Type': 'text/event-stream'
			}
		});
	} catch (err) {
		console.error(err);
		return json({ error: 'There was an error processing your request' }, { status: 500 });
	}
};
