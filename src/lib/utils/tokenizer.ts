import { encodingForModel } from "js-tiktoken";

const encoder = await encodingForModel("gpt-4");

export function getTokens(input: string): number {
	const tokens = encoder.encode(input);
	return tokens.length;
}
