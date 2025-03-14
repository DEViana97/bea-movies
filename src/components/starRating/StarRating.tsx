import React from 'react';
import { StarRatingContainer } from './StarRating.styled';

interface StarRatingProps {
  rating: number;
  disabled?: boolean;
}

const StarRating = ({ rating, disabled }: StarRatingProps) => {
  return (
    <StarRatingContainer disabled={disabled ? true : false}>
      {[5, 4, 3, 2, 1].map((value) => (
        <React.Fragment key={value}>
          <input
            type="radio"
            id={`star${value}`}
            name="rating"
            value={value}
            disabled={disabled ? true : false}
            checked={value === rating}
          />
          <label htmlFor={`star${value}`} />
        </React.Fragment>
      ))}
    </StarRatingContainer>
  );
};

export default StarRating;



