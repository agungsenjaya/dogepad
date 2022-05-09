import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
import { Button, Link, Text, Card } from '@pancakeswap/uikit'
import 'bootstrap/dist/css/bootstrap.min.css'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <section className="space-m hero min-vh-100 d-flex align-items-center">
    <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
            <div className="col-md-6 offset-md-3 align-self-center text-center">
                {/* <img src="img/Dogepad.png" alt="" width="20%" className="" /> */}
                <h1 className="text-white display-6 fw-bold">Welcome to the Moon invest Dogepad Token</h1>
                <Text mb="2" className="text-white">Dogepad is a decentralized finance network on the Binance blockchain, with functionalities such as staking, farming, lotteries and a lot more, operating similarly to a high yield certificate of deposit.</Text>
                <div className="d-flex justify-content-center">
                  <Link className="btn-bit rounded-pill " href="https://bscscan.com/token/0x8FFf93E810a2eDaaFc326eDEE51071DA9d398E83" target="_blank">Detail Contract</Link>
                  <Link className="btn-bit rounded-pill  ms-3" target="_blank" href="#">Whitepaper</Link>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="container space-m">
    <div className="row">
        <div className="col-md-6 offset-md-3">

            <div className="row text-center text-white">
                <div className="col-md align-self-center mb-3 mb-md-0">
                <div className="card bg-pad-1 border-0">
                    <div className="">
                        <div className="card-body">
                            <Text mb="2" className="mb-0 small text-white">Total Holders</Text>
                            <h2 className="display-6">00</h2>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md align-self-center">
                <div className="card bg-pad-1 border-0">
                        <div className="card-body">
                            <Text mb="2" className="mb-0 small text-white">Circulating Supply</Text>
                            <h2 className="display-6">00</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
<section className="space-m">
    <div className="container">
        <div className="row">
            <div className="col-md-6 align-self-center mb-3 mb-sm-0">
                <h1 className="text-bit fw-bold display-6 mb-3">What is <br/> Dogepad Token</h1>
                <Text mb="3">
                    Launched on the Binance Smart Chain (BSC) In April 2022, Dogepad is the biggest Bitrise reflection token brought to market Dogepad will give you experience about utility token.
                </Text>
                <Link className="btn-bit rounded-pill " target="_blank" href="#">Get Whitepaper</Link>
            </div>
            <div className="col-md-6">
                <img src="images/about.png" alt="" width="100%" />
            </div>
        </div>
    </div>
</section>
<div id="roadmap" className="int-section-wrapper space-m">
    <div className="sub-section first-section">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div data-wow-delay="0.1s" className="section-title-wrapper wow animate__fadeInUp">
                        <h1 className="text-center text-bit display-6 fw-bold mb-4">Roadmap</h1>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="mb-roadmap-wrapper mt-40px">
                        <div className="mb-roadmap-inner">
                            <div data-wow-delay="0.1s" className="mb-roadmap-block-wrapper left stage-0 wow animate__fadeInUp">
                                <div className="mb-roadmap-block bg-pad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Launch Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Telegram Group Launch</li>
                                        <li>Contact Deployment</li>
                                        <li>DEX Listing (PancakeSwap)</li>
                                        <li>Website Launch</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.15s" className="mb-roadmap-block-wrapper right stage-1 wow animate__fadeInUp">
                                <div className="mb-roadmap-block bg-pad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Growth Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Advertising Cmpaigns</li>
                                        <li>Influencer Promotions</li>
                                        <li>Coingecko Listing</li>
                                        <li>Cointmarketcap Listing</li>
                                        <li>Apply for initial CEX</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.2s" className="mb-roadmap-block-wrapper left stage-2 wow animate__fadeInUp">
                                <div className="mb-roadmap-block bg-pad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Expansion Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Audit Solutions</li>
                                        <li>Bridge to Bitgert Blockchain, Relaychain, Parachain, and Polygon</li>
                                        <li>Techrate Audit</li>
                                        <li>Media Promotions</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.25s" className="mb-roadmap-block-wrapper right stage-3 wow animate__fadeInUp">
                                <div className="mb-roadmap-block bg-pad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Utility Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>V1. Swap Platform</li>
                                        <li>Dex and Launchpad Development</li>
                                        <li>Hopefully the roadmaps written in this whitepaper canbe realized i hope all holders will get provit and being lucky in their life</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<section className="space-m" id="tokenomics">
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h1 className="text-center fw-bold display-6 text-bit mb-4">Tokenomics</h1>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card bg-pad-1 border-0 text-white h-100 " >
                            <div className="card-body">
                                <h5 className="card-title title-1 mb-4 ">Allocation Supply</h5>

                                <ul className="list-group list-group-flush list-road-2">
                                    <li className="list-group-item">Total Supply 50,000,000,000</li>
                                    <li className="list-group-item">Circulating Supply 45,000,000,000 - 90% Supply</li>
                                    <li className="list-group-item">Burn will be done manually</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-pad-1 border-0 text-white h-100 " >
                            <div className="card-body">
                                <h5 className="card-title title-1 mb-4 ">Tax Sell & Buy 10%</h5>

                                <ul className="list-group list-group-flush list-road-2">
                                    <li className="list-group-item">4% Marketing Tax</li>
                                    <li className="list-group-item">6% BITGERT/BITRISE TAX</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="space-m">
    <div className="container">
    <h1 className="text-center fw-bold text-bit mb-4 display-6">Our Features</h1>
        <div className="row">
            <div className="col-md-6 mb-3 mb-sm-0">
                <img src="images/exchange.png" alt="" width="100%" />
            </div>
            <div className="col-md-6 align-self-center">
                <h3 className="fw-bold text-bit lead mb-3">Decentralized <br/> Exchange Dogepad</h3>
                <Text mb="3">
                    Check is allowed to exchange for other tokens (ETC, BNB, USDT) on Dogepad Exchange Tools.
                </Text>
                <Link className="btn-bit rounded-pill " href="/swap">Trade Now</Link>
            </div>
        </div>
    </div>
</section>
<div className="">
    <section className="space-m  text-dark" id="faq">
        <div className="container">
            <h1 className="text-center fw-bold text-bit mb-4 display-6">Bitgerswap Token</h1>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="accordion" id="accordionFlushExample">
                        <div className="accordion-item border-dark">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button bg-pad-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-one" aria-expanded="false" aria-controls="flush-one">
                                    What is Dogepad?
                                </button>
                            </h2>
                            <div id="flush-one" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <Text color="dark">Launched on the Binance Smart Chain (BSC) In April 2022, Dogepad is the biggest Bitrise reflection token brought to market Dogepad will give you experience about utility token (Dogepad Swap and
                                    Dogepad NFT) that give you reward by holding Simply Hold Dogepad tokens and get rewarded in Bitrise on every transaction! Out auto-claim feature means your Bitrise Rewards Will be automatically sent to your
                                    wallet</Text>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-dark">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button bg-pad-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-two" aria-expanded="false" aria-controls="flush-two">
                                    When did you expand to Polygon?
                                </button>
                            </h2>
                            <div id="flush-two" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                     <Text color="dark">In order to provide the best and most decentralized trading experience, Dogepad want to began its cross-chain ventures to Polygon as of January 1st 2023.</Text>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-dark">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button bg-pad-1 text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-three" aria-expanded="false" aria-controls="flush-three">
                                    Why did Dogepad choose Dogepad as a reward?
                                </button>
                            </h2>
                            <div id="flush-three" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <Text color="dark">Dogepad will be a native coin in the bitrise-metaverse, we want to take the opportunity to be able to join the bitrise-metaverse like babycake and pancake.</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<section className="space-m">
    <div className="container">
    <h1 className="text-center fw-bold text-bit mb-4 display-6">Our Partnership</h1>
    <div className="row">
    <div className="col-md-8 offset-md-2">
    <div className="bg-pad-1 p-3 rounded">
    <div className="row">
        <div className="col-md-4 col-6">
            <img src="images/binance.png" alt="" width="100%" />
        </div>
        <div className="col-md-4 col-6">
            <img src="images/coingecko.png" alt="" width="100%" />
        </div>
        <div className="col-md-4 col-6">
            <img src="images/cmc.png" alt="" width="100%" />
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</section>
    </>
  )
}

export default Home
