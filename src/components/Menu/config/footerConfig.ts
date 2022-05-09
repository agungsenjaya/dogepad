import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://t.me/Dogepad',
      },
      {
        label: t('Brand'),
        href: '#',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://t.me/Dogepad',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://t.me/Dogepad',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Careers'),
        href: '#',
      },
    ],
  },
]
