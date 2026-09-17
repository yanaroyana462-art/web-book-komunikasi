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
          label: 'Daftar Isi',
          items: [
            { autogenerate: { directory: '' } }
          ],
        },
      ],
    }),
  ],
});
