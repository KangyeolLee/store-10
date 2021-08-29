import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    color: {
      'text-color': string;
      'reverse-text-color': string;
      'body': string;
      'body2': string;
      'body3': string;
      'footer': string;
      'label': string;
      'placeholder': string;
      'line': string;
      'background': string;
      'off-white': string;
      'primary': string;
      'primary2': string;
      'primary3': string;
      'lock': string;
      'new': string;
      'best': string;
      'recommand': string;
      'error': string;
      'border-gray': string;
      'hover': string;
    };
    fontSize: {
      xs: FlattenSimpleInterpolation;
      s: FlattenSimpleInterpolation;
      m: FlattenSimpleInterpolation;
      l: FlattenSimpleInterpolation;
      xl: FlattenSimpleInterpolation;
      xxl: FlattenSimpleInterpolation;
    };
    fontWeight: {
      s: FlattenSimpleInterpolation;
      m: FlattenSimpleInterpolation;
      l: FlattenSimpleInterpolation;
      xl: FlattenSimpleInterpolation;
      xxl: FlattenSimpleInterpolation;
    };
    media: {
      pc: number;
      btw_pc_tab: number;
      tablet: number;
      btw_tab_mob: number;
      phone: number;
      headerSearch: number;
    };
    mediaScreen: {
      pc: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      btw_pc_tab: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      tablet: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      btw_tab_mob: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      mphone: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
      phone: (args: TemplateStringsArray) => FlattenSimpleInterpolation;
    };
    boxShadow: string;
    headerBoxShadow: string;
  }
}
