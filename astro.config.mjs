import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Komunikasi Efektif ala Nabi',
      defaultLocale: 'root',
      sidebar: [
        {
          label: 'Pendahuluan',
          items: [
            { label: 'Pengantar', slug: 'pengantar' },
          ],
        },
        {
          label: 'Bagian 1: Fondasi & Etika Lisan',
          items: [
            { label: 'Bab 1: Prinsip Qaulan', slug: 'bab-1-prinsip-qaulan' },
            { label: 'Bab 2: Seni Mendengar', slug: 'bab-2-seni-mendengar' },
            { label: 'Bab 3: Gestur & Bahasa Tubuh', slug: 'bab-3-gestur' },
            { label: 'Bab 4: Bahasa Emosi', slug: 'bab-4-bahasa-emosi' },
          ],
        },
        {
          label: 'Bagian 2: Berdasarkan Audiens',
          items: [
            { label: 'Bab 5: Sahabat & Tim Kerja', slug: 'bab-5-sahabat' },
            { label: 'Bab 6: Masyarakat & Orang Awam', slug: 'bab-6-masyarakat' },
            { label: 'Bab 7: Musuh & Oposisi', slug: 'bab-7-musuh-oposisi' },
          ],
        },
        {
          label: 'Bagian 3: Situasi Khusus',
          items: [
            { label: 'Bab 8: Kepemimpinan & Strategi', slug: 'bab-8-kepemimpinan' },
            { label: 'Bab 9: Dalam Krisis & Perang', slug: 'bab-9-krisis-perang' },
            { label: 'Bab 10: Kritik & Evaluasi', slug: 'bab-10-kritik-evaluasi' },
          ],
        },
      ],
    }),
  ],
});
