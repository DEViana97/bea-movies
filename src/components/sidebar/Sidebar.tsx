'use client'
import { useState } from "react";
import { Bookmark, BookmarkCheck, House, Search, X, Menu, LogOut  } from 'lucide-react';
import { Routes } from "../../config/routes";
import { BurgerButton, ButtonContainer, Header, Inner, Nav, NavButton, SidebarContainer } from "./Sidebar.styled";
import { useAuth } from "../../contex/authContext";



const Sidebar = () => {
  const { logout } = useAuth ();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Inicio", "Pesquisar", "Assistir mais tarde", "Assistidos"];

function renderIcons(icon: string) {
  switch (icon) {
    case "Inicio":
      return <House />;
    case "Pesquisar":
      return <Search />;
    case "Assistir mais tarde":
      return <Bookmark />;
    case "Assistidos":
      return <BookmarkCheck />;
    default:
      return <House />;
  }
}

function generateRoutesPath(title: string) {
  switch (title) {
    case "Inicio":
      return `${Routes.home}`;
    case "Pesquisar":
      return `${Routes.movies}search`;
    case "Assistir mais tarde":
      return `${Routes.movies}watchLater`;
    case "Assistidos":
      return `${Routes.movies}watched`;
    default:
      return `${Routes.home}`;
  }
}

  return (
    <SidebarContainer $isOpen={isOpen}>
      <Inner>
        <Header>
          <BurgerButton onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined">
              {isOpen ? <X /> : <Menu />}
            </span>
          </BurgerButton>
        </Header>
        <Nav>
          <div>
            {navItems.map((item) => (
              <NavButton passHref href={`/${generateRoutesPath(item)}`} key={item} $isOpen={isOpen}>
                <span className="material-symbols-outlined">{renderIcons(item)}</span>
                {isOpen && <span>{item}</span>}
              </NavButton>
            ))}
          </div>
          <ButtonContainer $isOpen={isOpen}>
            <button onClick={() => logout()}>
            <span className="material-symbols-outlined"><LogOut/></span>
            {isOpen && <span>Sair</span>}
            </button>
          </ButtonContainer>
        </Nav>
      </Inner>
    </SidebarContainer>
  );
};

export default Sidebar;
