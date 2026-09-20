import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Komunikasi Efektif ala Nabi',
      customCss: [
        './src/styles/custom.css',
      ],
      defaultLocale: 'root',
      components: {
        Footer: './src/components/CustomFooter.astro',
        // Tambahkan baris ini untuk mengganti ikon social dengan tombol tulisan "Versi Inggris"
        SocialIcons: './src/components/LanguageSwitch.astro',
      },
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
            { label: 'Bab 2: Seni Mendengar', slug: 'bab-2-active-listening' },
            { label: 'Bab 3: Gestur & Bahasa Tubuh', slug: 'bab-3-bahasa-tubuh' },
            { label: 'Bab 4: Dalam Rumah & Keluarga', slug: 'bab-4-keluarga' },
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
        {
          label: 'Bagian 4: Referensi',
          items: [
            { label: 'Referensi & Daftar Pustaka', slug: 'referensi' },
          ],
        },
      ],
    }),
  ],
});