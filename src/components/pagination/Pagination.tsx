'use client'
import { Dispatch, SetStateAction, useEffect } from "react";
import IconManager, { IconTypes } from "../iconManager";
import { StyledDirectionArrow, StyledPageList, StyledPaginationContainer, StyledPaginationSection, StyledSelectDropdown, StyledSpan } from "./Pagination.styled";
import { FlexContent } from "../displays/Flex";


enum Directions {
  Left,
  Right
}

export enum ItemsPerPage {
  five = 5,
  ten = 10,
  fifteen = 15,
  twenty = 20
}

interface PaginationProps {
  currentPage: number
  setCurrentPage: (page: number) => void;
  totalItens: number,
  itemsPerPage: number,
}

export default function Pagination({ currentPage, setCurrentPage, totalItens, itemsPerPage}: PaginationProps) {
  const handleNextPageTrigger = (direction: Directions) => {
    console.log(direction)
    switch (direction) {
      case Directions.Left:
        if (currentPage > 1) {
          console.log('left',currentPage)
          setCurrentPage(currentPage - 1);
        }
        break
      case Directions.Right:
        if (currentPage < determineHowManyPages()) {
          console.log('right',currentPage)
          setCurrentPage(currentPage + 1);
        }
        break
    }
  }

  function determineHowManyPages(): number {
    return Math.ceil(totalItens / itemsPerPage);
  }


  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <StyledPaginationSection>
        <StyledPaginationContainer>
          {currentPage > 1 && (
            <StyledDirectionArrow onClick={() => handleNextPageTrigger(Directions.Left)}>
            <IconManager iconType={IconTypes.ArrowBack} width={12} height={18} foregroundColor="#2B2D31" />
            <span style={{ fontWeight: "700" }}>Anterior</span>
          </StyledDirectionArrow>
          )}
          <StyledPageList>
            {Array.from({ length: determineHowManyPages() }, (_, index) => {
              const pageNumber = index + 1;
              const totalPages = determineHowManyPages();
              if (
                pageNumber === 1 || // Always show the first page
                pageNumber === totalPages || // Always show the last page
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) // Show the current page and its neighbors
              ) {
                return (
                  <li
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    style={
                      currentPage === pageNumber
                        ? { fontWeight: "700", borderBottom: "2px solid #2B2D31" }
                        : { fontWeight: "400", cursor: "pointer", color: "#888D95" }
                    }
                  >
                    {pageNumber}
                  </li>
                );
              }
              // Show ellipsis (...) where there is a gap
              if (
                (pageNumber === currentPage - 2 && pageNumber > 2) || // Ellipsis before current page
                (pageNumber === currentPage + 2 && pageNumber < totalPages - 1) // Ellipsis after current page
              ) {
                return (
                  <li key={pageNumber} style={{ cursor: "default" }}>
                    ...
                  </li>
                );
              }
              return null;
            })}
          </StyledPageList>
          {currentPage < determineHowManyPages() && (
            <StyledDirectionArrow onClick={() => handleNextPageTrigger(Directions.Right)}>
            <span style={{ fontWeight: "700" }}>Próximo</span>
            <IconManager iconType={IconTypes.ArrowRight} width={12} height={18} foregroundColor="#2B2D31" />
          </StyledDirectionArrow>
          )}
        </StyledPaginationContainer>
      </StyledPaginationSection>
     </div >
  );
}
