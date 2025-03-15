'use client'
import { BubbleWrapper } from "./HeartAnimation.styled";


export const Bubble = ({ x, y, containerWidth, containerHeight }: { x: number; y: number; containerWidth: number; containerHeight: number }) => (
  <BubbleWrapper $containerWidth={containerWidth} $containerHeight={containerHeight} style={{ left: `${x}px`, top: `${y}px` }}>
    <span className="loader"/>
  </BubbleWrapper>
);
