"use client";
import { theme } from "@/constants/theme";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  background: transparent;
  padding: 1rem;
  z-index: 999;
`;

export const StyledNavbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  padding: 0 1rem;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;
export const MobileItemList = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  padding: 0.25rem;
  gap: 0.25rem;
  list-style: none;
`;

export const StyledListItem = styled.li`
  padding: 1rem 1rem;
  border-radius: 0.45rem;
  cursor: pointer;
  color: ${theme.colors.secondary};
  font-weight: 500;
  transition: all 0.1s ease;

  &:hover {
    color: ${theme.colors.textMuted};
  }
`;
export const StyledMobileListItem = styled.li`
  padding: 1rem 1rem;
  border-radius: 0.45rem;
  cursor: pointer;
  color: ${theme.colors.secondary};
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.backgroundHover};
  }
`;
