import type { Members, SanityShows } from '$lib/types';
import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config: ClientConfig = {
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
	useCdn: import.meta.env.VITE_SANITY_USE_CDN
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

export const shows = async () => {
	const query = '*[_type == "group"]';
	const data: SanityShows = await client.fetch(query);

	if (data) {
		return {
			shows: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};

export async function fetchGroupMembers(groupId: string) {
	const query = `*[_type == "group" && _id == $groupId][0] {
    members[]->{
      _id,
      name,
			occupation,
			image,
			greeting,
			bio,
			prompt
    }
  }`;

	const params = { groupId };
	const data: Members = await client.fetch(query, params);

	if (data) {
		return {
			members: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
