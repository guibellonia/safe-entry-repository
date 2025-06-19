"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import {
  ItemList,
  MobileItemList,
  NavbarWrapper,
  StyledListItem,
  StyledMobileListItem,
  StyledNavbarContainer,
} from "./styles";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [isOpen, setIsOpen] = useState(false);

  const handleNavigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <NavbarWrapper>
      <StyledNavbarContainer>
        <Image
          src={"/images/logo-typed.svg"}
          height={64}
          width={64}
          alt=""
        />
        {isMobile && (
          <Icon
            icon="mdi-light:menu"
            fontSize={32}
            onClick={() => setIsOpen(!isOpen)}
            cursor={"pointer"}
          />
        )}
        {!isMobile && (
          <ItemList>
            <StyledListItem onClick={() => handleNavigateToSection("inicio")}>
              Início
            </StyledListItem>
            <StyledListItem onClick={() => handleNavigateToSection("projetos")}>
              Projetos
            </StyledListItem>
            <StyledListItem onClick={() => handleNavigateToSection("time")}>
              Time
            </StyledListItem>
            <StyledListItem onClick={() => handleNavigateToSection("contato")}>
              Contato
            </StyledListItem>
          </ItemList>
        )}
      </StyledNavbarContainer>
      {isMobile && isOpen && (
        <MobileItemList>
          <StyledMobileListItem onClick={() => handleNavigateToSection("inicio")}>
            Início
          </StyledMobileListItem>
          <StyledMobileListItem onClick={() => handleNavigateToSection("projetos")}>
            Projetos
          </StyledMobileListItem>
          <StyledMobileListItem onClick={() => handleNavigateToSection("time")}>
            Time
          </StyledMobileListItem>
          <StyledMobileListItem onClick={() => handleNavigateToSection("contato")}>
            Contato
          </StyledMobileListItem>
        </MobileItemList>
      )}
    </NavbarWrapper>
  );
}
