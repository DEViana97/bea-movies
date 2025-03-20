import styled from "styled-components";

export const StyledPaginationSection = styled.div`
 display: flex;
 margin: 1rem 1rem;
`

export const StyledPaginationContainer = styled.div`
  display: flex; 
  gap: 12px; 
  align-items: flex-start; 
  justify-content: flex-end; 
  margin: 1.4rem 0rem;
`

export const StyledDirectionArrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
`

export const StyledPageList = styled.ul`
  display: flex;
  gap: 12px;
`

export const StyledSelectDropdown = styled.select`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
`

export const StyledSpan = styled.span`
  color: ${(props) => props.theme?.text?.soft};
  font-weight: 400;
  margin-left: 1rem;
`