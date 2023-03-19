import { defineConfig } from 'sanity';

/*-------------- PLUGINS --------------*/
import { deskTool } from 'sanity/desk';
/*------------------------------------*/

/*-------------- SCHEMAS --------------*/
import group from '$lib/sanity/schemas/group';
import member from '$lib/sanity/schemas/member';
/*------------------------------------*/

export default defineConfig({
	basePath: '/sanity',
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	title: 'Chatr - Studio',
	schema: { types: [group, member] },
	plugins: [deskTool()]
});
