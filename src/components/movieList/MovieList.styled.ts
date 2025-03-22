import styled from "styled-components";

export const MovieContainer = styled.div<{ layout: "grid" | "flex" }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  padding-top: 20px;
`;

export const MovieListWrapper = styled.ul<{ layout: "grid" | "flex" }>`
  display: ${(props) => (props.layout === "grid" ? "grid" : "flex")};
  ${(props) =>
    props.layout === "grid"
      ? `
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    width: 90vw;
  `
      : `
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 16px;
    padding: 16px;
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;
    mask-image: linear-gradient(to right, black, black 95%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to right, black, black 95%, rgba(0, 0, 0, 0) 100%);
    
    &:hover {
    mask-image: linear-gradient(to left, black, black 95%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to left, black, black 95%, rgba(0, 0, 0, 0) 100%);}

    &::-webkit-scrollbar {
      display: none;
    }
  `};
  list-style: none;
  padding: 20px 0;
  width: 100%;
`;

export const MovieListContainer = styled.div`
 width: 100vw;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;

 @media (max-width: 820px) {
  padding-left: 3rem;
 }
`