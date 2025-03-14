import styled from "styled-components";


interface StarRatingProps {
  disabled: boolean;
}

export const StarRatingContainer = styled.div<StarRatingProps>`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 4px;


    & input {
    display: none;
  }

  & label {
    font-size: 30px;
    cursor: pointer;
    color: gray;
    padding: 4px;
    transition: color 0.3s;
  }

  & label:before {
    content: "★";
  }

  & input:checked ~ label {
    color: #ffd700;
  }


  ${({ disabled }) =>
    !disabled && `
        & label:hover,
  & label:hover ~ label {
    color: #ffd700;}
      `
  }

`