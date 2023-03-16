import type { LayoutLoad } from './$types';
import { shows, fetchGroupMembers } from '$lib/utils/sanity';

export const load = (async ({ params }) => {
	const showsResult = await shows();

	// ToDo: Figure out how to handle this error properly
	if (!showsResult.shows) {
		return {
			status: 404,
			body: new Error('Not found')
		};
	}
	const groupId = showsResult.shows[0]._id;
	const membersResult = await fetchGroupMembers(groupId);

	return {
		shows: showsResult.shows,
		members: membersResult.members.members
	};
}) satisfies LayoutLoad;
