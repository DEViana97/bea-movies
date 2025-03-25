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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  .card {
    width: 80%;
    text-align: center;
    border-radius: .8rem;
    background-color: white;
    height: 350px;
  }

  .card__skeleton {
    background-image: linear-gradient(
  		90deg,
  		#ccc 0px,
  		rgb(229 229 229 / 90%) 40px,
  		#ccc 80px
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
