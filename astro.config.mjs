// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Komunikasi Efektif ala Nabi',
			components: {
				Footer: 'src/components/CustomFooter.astro',
			},
			sidebar: [
				{
					label: 'Pendahuluan',
					items: [
						{ label: 'Pengantar', link: '/pengantar' },
					],
				},
				{
					label: 'Bagian 1: Prinsip Lisan dalam Al-Qur\'an',
					items: [
						{ label: 'Bab 1: Qaulan Sadida (Jujur & Tepat)', link: '/bab-1-qaulan-sadida' },
						{ label: 'Bab 2: Qaulan Layyina (Kelembutan & Empati)', link: '/bab-2-qaulan-layyina' },
						{ label: 'Bab 3: Qaulan Ma\'rufa (Baik & Santun)', link: '/bab-3-qaulan-marufa' },
						{ label: 'Bab 4: Qaulan Baligha (Tegas & Berbobot)', link: '/bab-4-qaulan-baligha' },
						{ label: 'Bab 5: Qaulan Karima (Penghormatan & Etika)', link: '/bab-5-qaulan-karima' },
					],
				},
				{
					label: 'Bagian 2: Seni Berkomunikasi Rasulullah ﷺ',
					items: [
						{ label: 'Bab 6: Kejelasan & Nada Bicara Nabi', link: '/bab-6-kejelasan-bicara' },
						{ label: 'Bab 7: Mendengarkan dengan Empati Seutuhnya', link: '/bab-7-mendengarkan-empati' },
						{ label: 'Bab 8: Bahasa Tubuh & Kontak Mata Nabi', link: '/bab-8-bahasa-tubuh' },
						{ label: 'Bab 9: Menyampaikan Kritik Tanpa Melukai', link: '/bab-9-menyampaikan-kritik' },
						{ label: 'Bab 10: Retorika & Seni Bertanya Nabi', link: '/bab-10-retorika-bertanya' },
					],
				},
			],
		}),
	],
});