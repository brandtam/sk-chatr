export type Bot = {
	id: string;
	name: string;
	greeting: string;
	age: number;
	occupation: string;
	profile_image: string;
	bio: string;
	prompt: string;
	showId: string;
};

export type Bots = Array<Bot>;

export type Show = {
	id: string;
	name: string;
	image: string;
	display: boolean;
	handle: string;
};

export type Shows = Array<Show>;

export type SanityShow = {
	_id: string;
	name: string;
	image: {
		asset: {
			url: string;
		};
	};
	bio: string;
	members: Array<Member>;
};

export type SanityShows = Array<SanityShow>;

export type Member = {
	_id: string;
	name: string;
	image: {
		asset: {
			url: string;
		};
	};
	bio: string;
	prompt: string;
};

export type Members = Array<Member>;
