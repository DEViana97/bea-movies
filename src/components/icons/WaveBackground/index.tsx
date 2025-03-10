import { IconProps } from "../../iconManager";


const WaveBackground: React.FC<IconProps> = (props: IconProps) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill={props.foregroundColor} fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,250.7C640,235,800,149,960,128C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"/>
  </svg>
);

export default WaveBackground