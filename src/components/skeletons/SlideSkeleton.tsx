import React from 'react';
import styled from 'styled-components';

const SlideSkeleton = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__skeleton card__description"></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100vh;
  display: flex;
  .card {
    width: 100%;
    height: 350px;
   box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  }

  .card__skeleton {
    background-image: linear-gradient(
  		90deg,
  		#F7A8C4 0px,
  		#F37199 40px,
  		rgba(243, 113, 153, 0.7) 80px
  	);
    background-size: 300%;
    background-position: 100% 0;
    border-radius: inherit;
    animation: shimmer 1.5s infinite;
  }


  .card__description {
    height: 100%;
    width: 100%;
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }`;

export default SlideSkeleton;
