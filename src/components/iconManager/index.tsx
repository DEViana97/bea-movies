import WaveBackground from "../icons/WaveBackground";
import ArrowRightIcon from "../icons/arrowRight";
import ArrowBackIcon from "../icons/arrowBack";


export interface IconProps {
  width: number;
  height: number;
  foregroundColor: string;
  backgroundColor?: string;
}

export enum IconTypes {
  Wave = 'WAVE',
  ArrowRight = 'ARROW_RIGHT',
  ArrowBack = 'ARROW_BACK'
}
interface IconManagerProps {
  iconType: IconTypes | undefined;
  width: number;
  height: number;
  foregroundColor: string;
  backgroundColor?: string;
}

const IconManager: React.FC<IconManagerProps> = ({ iconType, ...props }) => {
  

  switch (iconType) {
    case IconTypes.Wave:
      return <WaveBackground width={props.width} height={props.height} foregroundColor={props.foregroundColor} />;
    case IconTypes.ArrowRight:
      return <ArrowRightIcon width={props.width} height={props.height} foregroundColor={props.foregroundColor} />;
    case IconTypes.ArrowBack:
      return <ArrowBackIcon width={props.width} height={props.height} foregroundColor={props.foregroundColor} />;

    default:
      return null;
  }
};

export default IconManager