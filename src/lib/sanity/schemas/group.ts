export default {
	name: 'group',
	title: 'Group',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text'
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
			name: 'active',
			title: 'Active',
			type: 'boolean'
		},
		{
			title: 'Members',
			name: 'members',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'member' }]
				}
			]
		}
	]
};
