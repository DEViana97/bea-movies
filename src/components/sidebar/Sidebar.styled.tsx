import Link from "next/link";
import styled from "styled-components";


export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 2;
  top: 1.25rem;
  left: 1.25rem;
  bottom: 1.25rem;
  border-radius: 8px;
  width: fit-content;
  width: ${({ $isOpen }) => ($isOpen ? "190px" : "56px")};
  background: rgba(243, 113, 153, 0.6);
  backdrop-filter: blur(10px);
  transition: width 0.45s;
`;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 190px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 6px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const BurgerButton = styled.button`
  width: 44px;
  height: 72px;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #f9f9f9;
`;

export const Nav = styled.nav`
  display: grid;
  padding: 0 6px;
  gap: 2px;
`;

export const NavButton = styled(Link)<{ $isOpen: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 44px;
  width: ${({ $isOpen }) => ($isOpen ? "100%" : "44px")};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 0 12px;
  border-radius: 8px;
  opacity: 0.7;
  color: #f9f9f9;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.25s, opacity 0.25s;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;