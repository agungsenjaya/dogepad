import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .space-m {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .card-deck .card {
    margin-bottom: 15px;
  }
  
  @media (min-width: 576px) {
    .card-deck {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
    .card-deck .card {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }
  
  .media {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  
  .media-body {
    -ms-flex: 1;
    flex: 1;
  }
  
  .list-road-2 {
    padding-left: 0 !important;
    line-height: 2;
  }
  .list-road-2 > li {
    background-color: transparent;
    color: #fff;
  }
  
  .mb-roadmap-inner {
    display: flex;
    flex-direction: column;
    position: relative
  }
  
  .mb-roadmap-inner:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 0;
    left: calc(50% - 10px);
    background: #F9B64B;
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, .25)
  }
  
  .mb-roadmap-inner:after {
    content: "";
    width: 1px;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
    background: linear-gradient(180deg, #F9B64B 80%, rgba(250, 28, 108, 0));
    z-index: -1
  }
  
  .mb-roadmap-block-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-top: 40px
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-roadmap-block-wrapper {
        width: 50%;
        width: calc(50% - 20px)
    }
  }
  
  .mb-roadmap-block-wrapper:after {
    width: 200px;
    height: 1px;
    position: absolute;
    background: #F9B64B;
    top: 34px;
    z-index: -1
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-roadmap-block-wrapper:after {
        content: ""
    }
  }
  
  .mb-roadmap-block-wrapper:before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    background: #F9B64B;
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, .25)
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-roadmap-block-wrapper:before {
        content: ""
    }
  }
  
  .mb-roadmap-block-wrapper.left {
    align-self: flex-start
  }
  
  .mb-roadmap-block-wrapper.left:before {
    right: -24px
  }
  
  .mb-roadmap-block-wrapper.left:after {
    right: -20px
  }
  
  .mb-roadmap-block-wrapper.right {
    align-self: flex-end
  }
  
  .mb-roadmap-block-wrapper.right:before {
    left: -25px
  }
  
  .mb-roadmap-block-wrapper.right:after {
    left: -20px
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-roadmap-block-wrapper.stage-0 {
        margin-top: 0
    }
    .mb-roadmap-block-wrapper.stage-0:after,
    .mb-roadmap-block-wrapper.stage-0:before {
        display: none
    }
    .mb-roadmap-block-wrapper.stage-1 {
        margin-top: -89px
    }
    .mb-roadmap-block-wrapper.stage-2 {
        margin-top: -59px
    }
    .mb-roadmap-block-wrapper.stage-3 {
        margin-top: -69px
    }
    .mb-roadmap-block-wrapper.stage-4 {
        margin-top: -49px
    }
  }
  
  .mb-roadmap-block-wrapper .mb-roadmap-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    box-shadow: 2px 2px 15px rgba(50, 68, 95, .1);
    border-radius: 20px;
    padding: 20px 40px
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-roadmap-block-wrapper .mb-roadmap-block {
        padding: 36px 58px;
        max-width: 429px
    }
  }
  
  .mb-roadmap-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-roadmap-title-wrapper {
        margin-bottom: 25px
    }
  }
  
  .mb-roadmap-title-wrapper span.mb-roadmap-title {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-left: -19px
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-roadmap-title-wrapper span.mb-roadmap-title {
        font-size: 24px;
        line-height: 29px
    }
  }
  
  .mb-roadmap-title-wrapper span.mb-roadmap-title>span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    color: #fff
  }
  
  .mb-roadmap-title-wrapper .mb-roadmap-title-image {
    display: flex
  }
  
  .mb-roadmap-title-wrapper .mb-roadmap-title-image>img {
    width: 32px;
    height: 32px
  }
  
  .mb-roadmap-title-wrapper .mb-roadmap-title-image.progress {
    animation: mb-roadmap-rotate 6s linear infinite
  }
  
  ul.mb-roadmap-list-wrapper {
    list-style-type: disc !important
  }
  
  ul.mb-roadmap-list-wrapper li {
    color: #fff;
    line-height: 150%
  }
  
  .mb-partners-wrapper .mb-partners-first-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px
  }
  
  @media screen and (min-width:1024px) {
    .mb-partners-wrapper .mb-partners-first-row {
        grid-template-columns: repeat(2, 1fr)
    }
  }
  
  .mb-partners-wrapper .mb-feature {
    padding: 5px
  }
  
  @media screen and (min-width:1024px) {
    .mb-partners-wrapper .mb-feature {
        padding: 20px 25px
    }
  }
  
  .mb-partners-wrapper .mb-feature img {
    width: 120px
  }
  
  @media screen and (min-width:1024px) {
    .mb-partners-wrapper .mb-feature img {
        width: 180px
    }
  }
  
  .mb-partners-wrapper .mb-press-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr)
  }
  
  .mb-partners-wrapper .mb-press-wrapper .defi-chads-press img {
    border-radius: 10px
  }
  
  .mb-features-and-ecosystem {
    position: relative
  }
  
  .mb-features-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 10px;
    background-size: cover;
    background-position: 0 0;
    background-repeat: no-repeat;
    z-index: -1
  }
  
  .mb-features-wrapper .mb-card-double-emoji {
    margin-top: 40px
  }
  
  .mb-features-wrapper .mb-card-double-emoji>img {
    margin-right: 20px
  }
  
  @media screen and (min-width:1024px) {
    .mb-features-wrapper .mb-card-double-emoji {
        margin-top: 10px
    }
  }
  
  .mb-features-wrapper .int-status-badge-wrapper {
    display: flex
  }
  
  @media screen and (min-width:1024px) {
    .mb-features-wrapper .int-status-badge-wrapper {
        justify-content: flex-end;
        align-self: flex-end
    }
  }
  
  .mb-features-wrapper .mb-features-first-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px
  }
  
  @media screen and (min-width:1024px) {
    .mb-features-wrapper .mb-features-first-row {
        grid-template-columns: repeat(3, 1fr)
    }
  }
  
  .mb-features-wrapper .mb-features-second-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 40px
  }
  
  .mb-ecosystem-image-wrapper {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px
  }
  
  @media print,
  screen and (min-width:769px) {
    .mb-ecosystem-image-wrapper {
        margin-top: 80px;
        margin-bottom: 80px
    }
  }
  
  .mb-ecosystem-image-wrapper img {
    display: flex;
    margin: auto
  }
  
  .int-card.mb-feature.mb-card-dungeons {
    padding: 0 !important;
    overflow: hidden
  }
  
  .int-card.mb-feature.mb-card-dungeons>.int-card-inner {
    display: grid;
    gap: 40px;
    align-items: center
  }
  
  @media print,
  screen and (min-width:769px) {
    .int-card.mb-feature.mb-card-dungeons>.int-card-inner {
        grid-template-columns: repeat(2, 1fr)
    }
  }
  
  .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-left {
    padding: 20px 30px
  }
  
  @media screen and (min-width:425px) {
    .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-left {
        padding: 30px 30px
    }
  }
  
  @media print,
  screen and (min-width:769px) {
    .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-left {
        padding: 40px 40px
    }
  }
  
  @media screen and (min-width:1024px) {
    .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-left {
        padding: 40px 70px
    }
  }
  
  .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-left .int-status-badge-wrapper {
    align-self: flex-start !important;
    justify-content: flex-start !important;
    margin-bottom: 40px
  }
  
  .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-right {
    display: flex;
    grid-row: 1;
    margin-top: 20px
  }
  
  @media print,
  screen and (min-width:769px) {
    .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-right {
        grid-column: 2;
        margin-top: 0
    }
  }
  
  .int-card.mb-feature.mb-card-dungeons>.int-card-inner>.int-card-inner-right>img {
    display: flex;
    transform: scale(1.2)
  }
  
  @media print,
  screen and (min-width:769px) {
    .int-card.mb-feature.mb-card-pvp {
        padding-bottom: 60px !important
    }
  }
  
  @media print,
  screen and (min-width:769px) {
    .int-card.mb-feature.mb-card-pvp .int-status-badge-wrapper {
        transform: translateY(20px);
        position: absolute;
        right: 0
    }
  }
  
  @media print,
  screen and (min-width:769px) {
    .int-card.mb-feature.mb-card-pvp .mb-card-pvp-description {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 49px
    }
  }
  .button, .navbar__title {
    font-family: 'Kanit';
  }
  .footer {
    font-family: 'Kanit';
    /* font-size: 13px; */
  }
  .title-1 {
    font-family: 'Kanit';
  }
  .text-bit {
    color: #F9B64B;
  }
  .bg-bit {
    background-color: #F9B64B;
  }
  
  .btn-bit {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0;
    border-radius: 16px;
    box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0;
    -webkit-transition: background-color 0.2s,opacity 0.2s;
    transition: background-color 0.2s,opacity 0.2s;
    height: 32px;
    padding: 0 16px;
    background-color: #F9B64B;
    color: #8E1F1F !important;
  }

  .hero {
    background:url(https://fluffy-sorbet-cbe5ef.netlify.app/images/bg-2.jpg);
    background-size: cover;
    background-position: bottom;
  }
  .grad-1 {
    background-image:linear-gradient(180deg,#F9B64B 5%,#ac3030) !important;
  }
  .globe-1 {
    transform:translate(-23px, -64px);
  }
  .to-bottom {
    position:absolute;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .btn {
    transition: background-color 0.2s,opacity 0.2s;
    height: 32px !important;
    padding: 0 16px !important;
    font-weight:400;
    font-size:12px;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Kanit';
  }
  .wZGlY:first-child {
    text-transform: capitalize;
    font-family: 'Kanit';
    font-weight: 400;
  }
  .cjKWon:first-child {
    text-transform: capitalize;
    font-family: 'Kanit';
    font-weight: 400;
  }

  .bg-pad-1 {
    background-color: #8E1F1F !important;
  }

`

export default GlobalStyle
