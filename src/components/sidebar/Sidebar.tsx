import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Bookmark, BookmarkCheck, House, Search, X, Menu } from 'lucide-react';



const navItems = ["Inicio", "Pesquisar", "Assistir mais tarde", "Assistidos"];

function renderIcons(icon: string) {
  switch (icon) {
    case "Inicio":
      return <House />;
    case "Pesquisar":
      return <Search />;
    case "Assistir mais tarde":
      return <Bookmark/>;
    case "Assistidos":
      return <BookmarkCheck />;
    default:
      return <House />;
  }
}


const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
  bottom: 20px;
  border-radius: 8px;
  width: ${({ $isOpen }) => ($isOpen ? "190px" : "56px")};
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  transition: width 0.45s;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 190px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 6px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const BurgerButton = styled.button`
  width: 44px;
  height: 72px;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #f9f9f9;
`;

const Nav = styled.nav`
  display: grid;
  padding: 0 6px;
  gap: 2px;
`;

const NavButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 44px;
  width: ${({ $isOpen }) => ($isOpen ? "100%" : "44px")};
  font-size: 14px;
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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <Inner>
        <Header>
          <BurgerButton onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined">
              {isOpen ? <X/> : <Menu/>}
            </span>
          </BurgerButton>
        </Header>
        <Nav>
          {navItems.map((item) => (
            <NavButton key={item} $isOpen={isOpen}>
              <span className="material-symbols-outlined">{renderIcons(item)}</span>
              {isOpen && <p>{item}</p>}
            </NavButton>
          ))}
        </Nav>
      </Inner>
    </SidebarContainer>
  );
};

export default Sidebar;
