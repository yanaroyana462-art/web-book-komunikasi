// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Komunikasi Efektif',
			sidebar: [
				{
					label: 'Pendahuluan',
					items: [
						{ label: 'Pengantar', link: '/pengantar' },
					],
				},
				{
					label: 'Bagian 1: Dasar-dasar Komunikasi',
					items: [
						{ label: 'Bab 1: Fondasi Komunikasi', link: '/bab-1-fondasi' },
						{ label: 'Bab 2: Seni Mendengarkan Aktif', link: '/bab-2-active-listening' },
						{ label: 'Bab 3: Komunikasi Asertif', link: '/bab-3-komunikasi-asertif' },
					],
				},
			],
		}),
	],
});