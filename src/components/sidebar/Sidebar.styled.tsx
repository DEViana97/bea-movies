import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: transparent;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  z-index: 10;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BurgerButton = styled.button`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #f9f9f9;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavButton = styled(Link)<{ $isActive?: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 10px 16px;
  border-radius: 8px;
  opacity: 0.8;
  color: #f9f9f9;
  background: ${({ $isActive }) => ($isActive ? "rgba(0, 0, 0, 0.3)" : "transparent")};
  text-decoration: none;
  transition: background 0.25s, opacity 0.25s;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  & button {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 10px 16px;
    border-radius: 8px;
    opacity: 0.8;
    color: #f9f9f9;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background 0.25s, opacity 0.25s;
    
    &:hover {
      background: rgba(0, 0, 0, 0.3);
      opacity: 1;
    }
  }
`;

export const AsideMenu = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 64px;
  left: 0;
  width: ${({ $isOpen }) => ($isOpen ? "250px" : "0px")};
  max-width: 250px;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  overflow: hidden;
  transition: width 0.5s ease-in-out;
  z-index: 9;
`;

