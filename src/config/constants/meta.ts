import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Dogepad',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://fluffy-sorbet-cbe5ef.netlify.app/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | Dogepad`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | Dogepad`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | Dogepad`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | Dogepad`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | Dogepad`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | Dogepad`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | Dogepad`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | Dogepad`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | Dogepad`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | Dogepad`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | Dogepad`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | Dogepad`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | Dogepad`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | Dogepad`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | Dogepad`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | Dogepad`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | Dogepad`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | Dogepad`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | Dogepad`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | Dogepad`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | Dogepad`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | Dogepad`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | Dogepad`,
      }
    default:
      return null
  }
}
