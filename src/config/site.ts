import { Metadata, Viewport } from 'next';

export type SiteConfig = typeof siteConfig;

const favicon = 'logo.png';

export const siteConfig: {
  metadata: Metadata;
  viewport: Viewport;
} = {
  metadata: {
    title: {
      default: 'Agora',
      template: `%s - Agora`,
    },

    description: 'Agora Landing Page',
    icons: {
      icon: favicon,
      shortcut: favicon,
      apple: favicon,
    },
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
  },
};
