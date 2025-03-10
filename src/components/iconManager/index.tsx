import WaveBackground from "../icons/WaveBackground";


export interface IconProps {
  width: number;
  height: number;
  foregroundColor: string;
  backgroundColor?: string;
}

export enum IconTypes {
  Wave = 'WAVE',
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

    default:
      return null;
  }
};

export default IconManager