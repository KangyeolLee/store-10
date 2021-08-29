import { css, DefaultTheme } from 'styled-components';
import { media, mediaScreen } from './globalStyle';

const fontSize = {
  xs: css`
    font-size: 1.05rem;
  `,
  s: css`
    font-size: 1.25rem;
  `,
  m: css`
    font-size: 1.65rem;
  `,
  l: css`
    font-size: 2.15rem;
  `,
  xl: css`
    font-size: 2.75rem;
  `,
  xxl: css`
    font-size: 3.25rem;
  `,
};

const fontWeight = {
  s: css`
    font-weight: 100;
  `,
  m: css`
    font-weight: 300;
  `,
  l: css`
    font-weight: 500;
  `,
  xl: css`
    font-weight: 700;
  `,
  xxl: css`
    font-weight: 900;
  `,
};

// 다크모드-라이트모드에 영향 받는 속성은 이곳에 직접 넣고
// 추가적으로 styled.d.ts 파일에도 타입 추가해주세요
// ex. 아마 주로 색깔 관련...?
export const lightMode: DefaultTheme = {
  name: 'light-mode',
  color: {
    'text-color': '#1e2222',
    'reverse-text-color': '#fcfcfc',
    'body': 'white',
    'body2': '#fafafa',
    'body3': '#e8e8e8',
    'footer': '#fbfbfb',
    'label': '#8b9999',
    'placeholder': '#c1c5c5',
    'line': '#929696',
    'background': '#f5f5f5',
    'off-white': '#fcfcfc',
    'primary': '#2ac1bc',
    'primary2': '#a0e1e0',
    'primary3': '#219a95',
    'lock': '#fff',
    'new': '#e6c01e',
    'best': '#a92e15',
    'recommand': '#0B3C49',
    'error': '#f45452',
    'border-gray': 'rgb(238, 238, 238)',
    'hover': '#ececec',
  },
  fontSize,
  fontWeight,
  media,
  mediaScreen,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1)',
  headerBoxShadow:
    '0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1)',
};

export const darkMode: DefaultTheme = {
  name: 'dark-mode',
  color: {
    'text-color': '#fcfcfc',
    'reverse-text-color': '#1e2222',
    'body': '#3c3e3e',
    'body2': '#353535',
    'body3': '#2a2f2f',
    'footer': '#252525',
    'label': '#f5f5f5',
    'placeholder': ' #f5f5f5',
    'line': '#ccd3d3',
    'background': '#1e2222',
    'off-white': '#fcfcfc',
    'primary': '#2ac1bc',
    'primary2': '#a0e1e0',
    'primary3': '#219a95',
    'lock': '#3a3a3a',
    'new': '#e6c01e',
    'best': '#a92e15',
    'recommand': '#0B3C49',
    'error': '#f45452',
    'border-gray': '#5d5d5d',
    'hover': 'black',
  },
  fontSize,
  fontWeight,
  media,
  mediaScreen,
  boxShadow:
    '0px 4px 4px rgba(30, 30, 30, 0.7), 0px 4px 20px rgba(30, 30, 30, 0.7)',
  headerBoxShadow:
    '0px 4px 4px rgba(200, 200, 200, 0.1), 0px 4px 4px rgba(200, 200, 200, 0.1)',
};
