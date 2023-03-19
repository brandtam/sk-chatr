export default {
	name: 'member',
	title: 'Member',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'occupation',
			title: 'Occupation',
			type: 'string'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'greeting',
			title: 'Greeting',
			type: 'string'
		},
		{
			name: 'bio',
			title: 'Bio',
			type: 'text'
		},
		{
			name: 'prompt',
			title: 'Prompt',
			type: 'text'
		}
	]
};
