import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Komunikasi Efektif ala Nabi',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Bahasa Indonesia',
          lang: 'id',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
        ar: {
          label: 'العربية',
          lang: 'ar',
          dir: 'rtl',
        },
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
          ],
        },
      ],
    }),
  ],
});
