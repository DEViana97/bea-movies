"use client";

import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
  name?: string;
  placeholder?: string;
}

const SearchInput = ({label, name, placeholder, ...props}: InputProps) => {
  return (
    <StyledWrapper>
      <div className="InputContainer">
        <input placeholder={placeholder} id="input" className="input" name="text" type="text" {...props} />
        <label className="labelforsearch" htmlFor="input">
          <svg className="searchIcon" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
padding: 0px 1rem;
  .InputContainer {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(243, 113, 153, 0.6);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    padding-left: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
  }

  .input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 0.9em;
    caret-color: rgb(255, 81, 0);
  }

  .labelforsearch {
    cursor: text;
    padding: 0px 12px;
  }

  .searchIcon {
    width: 13px;
  }

  .border {
    height: 40%;
    width: 1.3px;
    background-color: rgb(223, 223, 223);
  }

  .micIcon {
    width: 12px;
  }

  .micButton {
    padding: 0px 15px 0px 12px;
    border: none;
    background-color: transparent;
    height: 40px;
    cursor: pointer;
    transition-duration: 0.3s;
  }

  .searchIcon path {
    fill: #fff;
  }

  .micIcon path {
    fill: rgb(255, 81, 0);
  }

  .micButton:hover {
    background-color: rgb(255, 230, 230);
    transition-duration: 0.3s;
  }`;

export default SearchInput;
