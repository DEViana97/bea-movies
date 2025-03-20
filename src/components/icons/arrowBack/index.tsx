import { IconProps } from "../../iconManager";


const ArrowBackIcon: React.FC<IconProps> = (props: IconProps) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.3327 5.33329H3.21935L6.94602 1.60663L5.99935 0.666626L0.666016 5.99996L5.99935 11.3333L6.93935 10.3933L3.21935 6.66663H11.3327V5.33329Z"
      fill={props.foregroundColor}
    />
  </svg>
);

export default ArrowBackIcon