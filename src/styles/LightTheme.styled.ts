import Theme from "./Theme.styled";

const lightTheme: Theme = {
  name: "light-theme",
  background: {
    default: "#FEFEFE",
    hover: "#F0F2F4",
    pressed: "#D4D8DD",
    disabled: "#FEFEFE",
    selected: "#E0E9FF",
    tableHead:"#F1F3F9",
  },
  chihiroBackground: {
    default: "#0b1828",
    secondary: "#0e1d32",
    light: "	#909485",
    disabled: "#F0F2F4",
    selected: "#E0E9FF"
  },
  barbieTheme: {
    default: "#AC1754",
    secondary: "#E53888",
    terciary: "#F37199",
    disabled: "#F0F2F4",
    selected: "#F7A8C4"
  },
  backgroundNeutral: {
    default: "#F0F2F4",
    hover: "#E5E7EB",
    pressed: "#D4D8DD",
    disabled: "#F0F2F4",
    selected: "#FEFEFE",
  },
  backgroundCritical: {
    default: "#D51B06",
    soft: "#FFF3F3",
  },
  backgroundSuccess: {
    default: "#1BBAA2",
    soft: "#EDFFF9",
  },
  backgroundWarning: {
    default: "#FDC81C",
    soft: "#FEFAE9",
  },
  backgroundHighlight: {
    default: "#1653FD",
    soft: "#EDF2FF",
  },
  backgroundGraphs:{
    blue: '#42B2D7',
    red: '#EA3E92',
    green: '#00CCB5',
    orange: '#F38A3F',
    purple:'#8270DB',
    highlight:'#1D7AFC',
    critical:'#C9372C',
    success:'#22A06B',
    yellow:'#E2B203',
    gray: '#636985',
    rose: '#C246AC',
    grayLight: '#B3B7BC'
  },
  backgroundLink: {
    default: "#FEFEFE00",
    hover: "#F0F2F4",
    pressed: "#D4D8DD",
    disabled: "#F0F2F4",
    focus: "#E0E9FF00",
    text: "#1D7AFC"
  },
  backgroundPrimary: {
    default: "#2B2D31",
    hover: "#2B2D31",
    pressed: "#19191A",
    disabled: "#F0F2F4",
    focus: "#2B2D31",
    text: "#FDFEFF",
    textFocus: "#FDFEFF66",
    simple: "#E9F2FF",
  },
  backgroundSecundary: {
    default: "#FFFFFF00",
    hover: "#F0F2F4",
    pressed: "#D4D8DD",
    disabled: "#F0F2F4",
    focus: "#FFFFFF00",
    text: "#2B2D31"
  },
  backgroundHighlightSecondary: {
    default: "#E9F2FF",
    hover: "#B8D5FF",
    pressed: "#85B7FF",
    disabled: "#F0F2F4",
    focus: "#E9F2FF",
    text: "#1D7AFC"
  },
  backgroundCriticalSecondary: {
    default: "#FFECEB",
    hover: "#FFC5C2",
    pressed: "#FF9E99",
    disabled: "#F0F2F4",
    focus: "#FFECEB",
    text:"#C9372C"
  },
  text: {
    default: "#111214",
    smooth: "#4E5155",
    soft: "#6C7077",
    hover: "#3354FD",
    disabled: "#D4D8DD",
    selected: "#3354FD",
    highlight: "#265EFD",
    critical: "#D51B06",
    success: "#00907F",
    warning: "#E3A702",
    transparent: "transparent",
    simple:"#1D7AFC"
  },
  textOn: {
    selected: "#FDFEFF",
    highlight: "#FDFEFF",
    critical: "#FFFDFD",
    disabled: "#FDFEFF",
  },
  icon: {
    default: "#313338",
    soft: "#888D95",
    hover: "#3354FD",
    disabled: "#D4D8DD",
    selected: "#3354FD",
    highlight: "#265EFD",
    critical: "#D51B06",
    success: "#00907F",
    warning: "#D8AA51",
  },
  iconOn: {
    selected: "#FDFEFF",
    highlight: "#FDFEFF",
    critical: "#FFFDFD",
    disabled: "#FDFEFF",
  },
  border: {
    default: "#B4B9C1",
    soft: "#E5E7EB",
    hover: "#5379FF",
    disabled: "#D4D8DD",
    selected: "#3354FD",
    highlight: "#265EFD",
    critical: "#D51B06",
    success: "#00907F",
    warning: "#E3A702",
  },
  borderOn: {
    highlight: "#FDFEFF",
    disabled: "#FDFEFF",
  },
};

export default lightTheme