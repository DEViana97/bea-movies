'use client'
import { BubbleDummy, BubbleWrapper, Heart } from "./HeartAnimation.styled";


export const Bubble = ({ x, y, containerWidth, containerHeight }: { x: number; y: number; containerWidth: number; containerHeight: number }) => (
  <BubbleWrapper $containerWidth={containerWidth} $containerHeight={containerHeight} style={{ left: `${x}px`, top: `${y}px` }}>
    <BubbleDummy />
    <Heart viewBox="0 0 600 500">
      <path d="M300,150 C500,10 600,300 300,400 C0,300 100,10 300,150" />
    </Heart>
  </BubbleWrapper>
);
