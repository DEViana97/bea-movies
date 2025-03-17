import React from 'react'
import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number;
}
export default function StarRating({rating}: StarRatingProps) {
  const numStars  = Math.round(rating / 2);
  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < numStars; i++) {
    fullStars.push(<Star key={i} size={20} color='yellow' fill="yellow" />);
  }
  for (let i = 0; i < 5 - numStars; i++) {
    emptyStars.push(<Star key={i} size={20} color='gray' fill="gray" />);
  }
  
  return (
    <div style={{display: 'flex', gap: '4px'}}>
      {fullStars}
      {emptyStars}
    </div>
  )
}
