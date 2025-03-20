import styled from "styled-components";
import React, { JSX } from "react";

interface FlexProps {
  display?: string;
  directionMobile?: string;
  direction?: string;
  justify?: string;
  align?: string;
  fill?: string;
  children?: React.ReactNode;
  gap?:string;
  margin?: string | string[];
  padding?: string | string[];
  overflowScroll?: boolean;
  onClick?: () => void;
  as?: keyof JSX.IntrinsicElements;
  height?: string;
  width?: string;
  mediaQuerie?: string;
  style?: React.CSSProperties;

}

const ContentFlex = styled.div<FlexProps>`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : '100%')} !important;
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'center'};
  flex: ${({ fill }) => fill || 'inherit'};
  gap: ${({gap}) => gap };
  margin: ${(props) => {
        if (typeof props.margin === 'string') {
            return props.margin;
        } else if (Array.isArray(props.margin)) {
            const [top = '0', right = top, bottom = top, left = right] = props.margin;
            return `${top} ${right} ${bottom} ${left}`;
        }
        return '0';
   }};
  padding: ${(props) => {
        if (typeof props.padding === 'string') {
            return props.padding;
        } else if (Array.isArray(props.padding)) {
            const [top = '0', right = top, bottom = top, left = right] = props.padding;
            return `${top} ${right} ${bottom} ${left}`;
        }
        return '0';
  }};
  @media (max-width: ${(props => (props.mediaQuerie))}) {
    flex-direction: ${(props) => (props.directionMobile === 'column' ? 'column': 'row')} !important;
    width: 100%;  
    min-width: fit-content; 
    overflow-x: ${(props) => (props.overflowScroll ? 'scroll': 'inherit')};
    -webkit-overflow-scrolling: touch;
  }
`;

export const FlexContent: React.FC<FlexProps> = ({
  display,
  direction,
  justify,
  align,
  fill,
  children,
  gap,
  margin,
  directionMobile,
  overflowScroll,
  height,
  width,
  mediaQuerie,
  style
}) => {
  return (
    <ContentFlex 
      display={display} 
      direction={direction} 
      justify={justify} 
      align={align} 
      fill={fill}
      gap={gap}
      margin={margin}
      directionMobile={directionMobile}
      overflowScroll={overflowScroll}
      height={height}
      width={width}
      mediaQuerie={mediaQuerie}
      style={style}
    >
      {children}
    </ContentFlex>
  );
};
