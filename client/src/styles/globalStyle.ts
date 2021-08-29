import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const HEADER_HEIGHT = 8;
const PC_RESOLUTION = 1050;
const BTW_PC_AND_TAB_RESOLUTION = 900;
const TABLET_RESOLUTION = 768;
const BTW_TAB_AND_MOBILE_RESOLUTION = 595;
const MIDIUM_PHONE_RESOLUTION = 480;
const PHONE_RESOLUTION = 425;
const HEADER_SEARCH_RESOLUTION = 550;

const customMediaQuery = (screen: number) =>
  `@media screen and (max-width: ${screen}px)`;

export const mediaScreen = {
  // 1050px 해상도 위에서만 디스플레이
  pc: (args: TemplateStringsArray) => css`
    ${customMediaQuery(PC_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 900px 해상도 위에서만 디스플레이
  btw_pc_tab: (args: TemplateStringsArray) => css`
    ${customMediaQuery(BTW_PC_AND_TAB_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 768px 해상도 위에서만 디스플레이
  tablet: (args: TemplateStringsArray) => css`
    ${customMediaQuery(TABLET_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 595px 해상도 위에서만 디스플레이
  btw_tab_mob: (args: TemplateStringsArray) => css`
    ${customMediaQuery(BTW_TAB_AND_MOBILE_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 480px 해상도 위에서만 디스플레이
  mphone: (args: TemplateStringsArray) => css`
    ${customMediaQuery(MIDIUM_PHONE_RESOLUTION)} {
      ${css(args)};
    }
  `,
  // 425px 해상도 위에서만 디스플레이
  phone: (args: TemplateStringsArray) => css`
    ${customMediaQuery(PHONE_RESOLUTION)} {
      ${css(args)};
    }
  `,
};

export const media = {
  pc: PC_RESOLUTION,
  btw_pc_tab: BTW_PC_AND_TAB_RESOLUTION,
  tablet: TABLET_RESOLUTION,
  btw_tab_mob: BTW_TAB_AND_MOBILE_RESOLUTION,
  phone: PHONE_RESOLUTION,
  headerSearch: HEADER_SEARCH_RESOLUTION,
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ::-webkit-scrollbar {
    background-color: #f5f5f5;
    width: 1.6rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 1.6rem;
    border: 0.4rem solid #f5f5f5;

    &:hover {
      background-color:#a0a0a5;
      border: 0.4rem solid #f4f4f4
    }
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  html, body {
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
  }

  * {
    box-sizing: border-box;
  }

  input:focus {
    outline : none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: ${PC_RESOLUTION}px;
    margin: 5rem auto;
    padding: 0 3rem;
    width: 100%;
    box-sizing: border-box;
    flex: 1;

    ${customMediaQuery(TABLET_RESOLUTION)} {
      max-width: ${TABLET_RESOLUTION}px;
      margin: 4rem auto;
      padding: 0 2rem;
    }

    ${customMediaQuery(PHONE_RESOLUTION)} {
      max-width: ${PHONE_RESOLUTION}px;
      margin: 3rem auto;
      padding: 0 1rem;
    }
  }

  .pagination-scroll-top {
    padding-top: ${HEADER_HEIGHT}rem;
    margin-top: ${-HEADER_HEIGHT}rem;
  }

  // pc 해상도에서만 display: none
  .on_pc_resolution {
    ${customMediaQuery(PC_RESOLUTION)} {
      display: none;
    }
  }

  // BTW_PC&TAB 해상도에서만 display: none
  .on_btw_pc_tab_resolution {
    ${customMediaQuery(BTW_PC_AND_TAB_RESOLUTION)} {
      display: none;
    }
  }

  // tablet 해상도에서부터 display: none
  .on_tablet_resolution {
    ${customMediaQuery(TABLET_RESOLUTION)} {
      display: none;
    }
  }

  // BTW_TAB&MOB 해상도에서만 display: none
  .on_btw_tab_mob_resolution {
    ${customMediaQuery(BTW_TAB_AND_MOBILE_RESOLUTION)} {
      display: none;
    }
  }

  // 480px 해상도에서만 display: none;
  .on_mphone_resolution {
    ${customMediaQuery(MIDIUM_PHONE_RESOLUTION)} {
      display: none;
    }
  }

  // phone 해상도에서부터 display: none
  .on_phone_resolution {
    ${customMediaQuery(PHONE_RESOLUTION)} {
      display: none;
    }
  }

  /* 기타 필요한 글로벌 속성 작성 
  ** ex. 해상도 관련 미디어 속성(반응형)
  ** ex. 스크롤바 관련, 박스 디자인 관련, 컨테이너 관련 등등...
  */
`;

export default GlobalStyle;
