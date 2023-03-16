import { writable } from 'svelte/store';
import type { SanityShow, SanityShows, Member, Members } from '$lib/types';
import type { ChatCompletionRequestMessage } from 'openai';
import { shows, fetchGroupMembers } from '$lib/utils/sanity';

export const messages = writable<ChatCompletionRequestMessage[]>([]);
export const openSide = writable<boolean>(false);

export const sanityMembers = writable<Members>([]);
export const selectedMember = writable<Member>();
export const sanityShows = writable<SanityShows>([]);
export const selectedSanityShow = writable<SanityShow>();
export const clickedSanityShow = writable<SanityShow>();

export async function getSanityShows() {
	shows().then(
		(data) => {
			sanityShows.set(data.shows);
			selectedSanityShow.set(data.shows[0]);
			clickedSanityShow.set(data.shows[0]);
			// return data;
		},
		(err) => {
			console.log('err: ', err);
			return {
				status: 500,
				body: new Error('Internal Server Error')
			};
		}
	);
}
getSanityShows();

export async function getMembers(showId: string) {
	const data = fetchGroupMembers(showId);

	data.then((data) => {
		sanityMembers.set(data.members.members);
		return data.members;
	});

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
