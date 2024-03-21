import { encodingForModel } from "js-tiktoken";

const encoder = encodingForModel("gpt-4");

export async function getTokens(input: string): number {
	const tokens = encoder.encode(input);
	return tokens.length;
}
