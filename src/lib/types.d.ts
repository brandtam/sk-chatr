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
	active: boolean;
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
	occupation: string;
	greeting: string;
};

export type Members = Array<Member>;
