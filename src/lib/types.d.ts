export type Bot = {
	id: string;
	name: string;
	greeting: string;
	age: number;
	occupation: string;
	profile_image: string;
	bio: string;
	prompt: string;
};

export type Bots = Array<Bot>;