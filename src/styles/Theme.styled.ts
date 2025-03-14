export default interface Theme {
  name: string;
  background: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    selected: string;
    tableHead: string,
  };
  chihiroBackground: {
    default: string;
    secondary: string;
    light: string;
    disabled: string;
    selected: string
  }
  barbieTheme: {
    default: string;
    secondary: string;
    terciary: string;
    disabled: string;
    selected: string;
    defaultTransparent: string;
  }
  backgroundNeutral: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    selected: string;
  };
  backgroundCritical: {
    default: string;
    soft: string;
  };
  backgroundSuccess: {
    default: string;
    soft: string;
  };
  backgroundWarning: {
    default: string;
    soft: string;
  };
  backgroundHighlight: {
    default: string;
    soft: string;
  };
  backgroundGraphs:{
    blue: string;
    red: string;
    green: string;
    orange:string;
    purple:string;
    highlight:string;
    critical:string;
    success: string;
    yellow:string;
    gray:string;
    rose:string;
    grayLight:string;

  };
  backgroundLink: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    focus: string;
    text:string
  };
  backgroundPrimary: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    focus: string;
    text:string;
    textFocus:string;
    simple:string
  };
  backgroundSecundary: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    focus: string;
    text:string;
  };
  backgroundHighlightSecondary: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    focus: string;
    text:string;
  };
  backgroundCriticalSecondary: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    focus: string;
    text:string;
  };
  text: {
    default: string;
    smooth: string;
    soft: string;
    hover: string;
    disabled: string;
    selected: string;
    highlight: string;
    critical: string;
    success: string;
    warning: string;
    transparent: string;
    simple:string;
  };
  textOn: {
    selected: string;
    highlight: string;
    critical: string;
    disabled: string;
  };
  icon: {
    default: string;
    soft: string;
    hover: string;
    disabled: string;
    selected: string;
    highlight: string;
    critical: string;
    success: string;
    warning: string;
  };
  iconOn: {
    selected: string;
    highlight: string;
    critical: string;
    disabled: string;
  };
  border: {
    default: string;
    soft: string;
    hover: string;
    disabled: string;
    selected: string;
    highlight: string;
    critical: string;
    success: string;
    warning: string;
  };
  borderOn: {
    highlight: string;
    disabled: string;
  };
}


// export const darkTheme: Theme = {

// }