import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: 'rbf8zvhq',
	dataset: 'production',
	apiVersion: '2023-03-07',
	useCdn: true
};

const client = createClient(config);

export const shows = async () => {
	const query = '*[_type == "group"]';
	const data = await client.fetch(query);

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
      email,
    }
  }`;

	const params = { groupId };
	const result = await client.fetch(query, params);

	if (result) {
		return {
			members: result
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
