// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Komunikasi Efektif ala Nabi',
			components: {
				Footer: './src/components/CustomFooter.astro',
			},
			sidebar: [
				{
					label: 'Pendahuluan',
					items: [
						{ label: 'Pengantar & Cara Menggunakan Buku', link: '/pengantar' },
					],
				},
				{
					label: 'Bagian 1: Fondasi & Etika Lisan',
					items: [
						{ label: 'Bab 1: Fondasi Lisan & 6 Prinsip Qaulan', link: '/bab-1-prinsip-qaulan' },
						{ label: 'Bab 2: Seni Mendengarkan (Active Listening)', link: '/bab-2-active-listening' },
						{ label: 'Bab 3: Kejelasan, Nada Suara & Bahasa Tubuh', link: '/bab-3-bahasa-tubuh' },
					],
				},
				{
					label: 'Bagian 2: Komunikasi Berdasarkan Audiens',
					items: [
						{ label: 'Bab 4: Di Dalam Rumah (Pasangan & Anak)', link: '/bab-4-keluarga' },
						{ label: 'Bab 5: Bersama Sahabat & Tim Kerja', link: '/bab-5-sahabat' },
						{ label: 'Bab 6: Kepada Masyarakat Umum & Orang Awam', link: '/bab-6-masyarakat' },
						{ label: 'Bab 7: Kepada Musuh & Oposisi', link: '/bab-7-musuh-oposisi' },
					],
				},
				{
					label: 'Bagian 3: Komunikasi Dalam Situasi Khusus',
					items: [
						{ label: 'Bab 8: Komunikasi Kepemimpinan & Strategi', link: '/bab-8-kepemimpinan' },
						{ label: 'Bab 9: Dalam Krisis, Perang & Tekanan Tinggi', link: '/bab-9-krisis-perang' },
						{ label: 'Bab 10: Menyampaikan Kritik & Meluruskan Kesalahan', link: '/bab-10-kritik-evaluasi' },
					],
				},
			],
		}),
	],
});
