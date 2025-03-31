"use client";
import { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck, House, Search, X, Menu, LogOut } from "lucide-react";
import { Routes } from "../../config/routes";
import { BurgerButton, ButtonContainer, HeaderContainer, Inner, Nav, NavButton, AsideMenu } from "./Sidebar.styled";
import { useAuth } from "../../contex/authContext";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
  const { logout } = useAuth();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navItems = ["Inicio", "Pesquisar", "Assistir mais tarde", "Assistidos"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        return `${Routes.movies}`;
      case "Pesquisar":
        return `${Routes.movies}/search`;
      case "Assistir mais tarde":
        return `${Routes.movies}/watchLater`;
      case "Assistidos":
        return `${Routes.movies}/watched`;
      default:
        return `${Routes.home}`;
    }
  }

  return (
    <>
      <HeaderContainer>
        <Inner>
          {isMobile && (
            <BurgerButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </BurgerButton>
          )}
          {!isMobile && (
            <Nav>
              {navItems.map((item) => (
                <NavButton $isActive={isActive(`/${generateRoutesPath(item)}`)} passHref href={`/${generateRoutesPath(item)}`} key={item}>
                  {renderIcons(item)}
                  <span>{item}</span>
                </NavButton>
              ))}
            </Nav>
          )}
          <ButtonContainer>
            <button onClick={() => logout()}>
              <LogOut />
              <span>Sair</span>
            </button>
          </ButtonContainer>
        </Inner>
      </HeaderContainer>

      {isMobile && (
        <AsideMenu $isOpen={isOpen}>
          {navItems.map((item) => (
            <NavButton passHref href={`/${generateRoutesPath(item)}`} key={item}>
              {renderIcons(item)}
              <span>{item}</span>
            </NavButton>
          ))}
        </AsideMenu>
      )}
    </>
  );
};

export default HeaderNav;
