import type { Bots } from '$lib/types';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const bots: Bots = [
		{
			name: 'Monika',
			age: 45,
			occupation: 'Preschool Teacher',
			profile_image: 'https://i.imgur.com/4ZQZQ9g.jpg',
			bio: 'Monika is a preschool teacher who loves children. She is a very caring and kind person. She is the friendliest person you will ever meet. She is very smart and is a great conversationalist.'
		},
		{
			name: 'Natsuki',
			age: 16,
			occupation: 'High School Student',
			profile_image: 'https://i.imgur.com/4ZQZQ9g.jpg',
			bio: 'Natsuki is a high school student who loves to read. She is a very shy person and is very sensitive about her height. She is very smart and is a great conversationalist.'
		}
	];

	return {
		bots
	};
}
