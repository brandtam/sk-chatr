import type { LayoutLoad } from './$types';
import { shows, fetchGroupMembers } from '$lib/utils/sanity';

export const load = (async ({ params }) => {
	const currentShows = await shows();

	const groupId = currentShows.shows[0]._id;
	const members = await fetchGroupMembers(groupId);

	return {
		shows: currentShows,
		members
	};
}) satisfies LayoutLoad;
