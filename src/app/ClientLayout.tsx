"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "@/components/Navbar";
import { theme } from "@/constants/theme";

const smoothSpin = keyframes`
  0% {
    transform: rotate(0deg) scale(0.95);
    opacity: 0.9;
  }
  50% {
    transform: rotate(90deg) scale(1.05);
    opacity: 1;
  }
  75% {
    transform: rotate(180deg) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: rotate(360deg) scale(0.95);
    opacity: 0.9;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${theme.colors.background};
  transition: opacity 0.6s ease;
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`;

const SquarePiece = styled.div<{ index: number }>`
  width: 1.65rem;
  height: 1.65rem;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  transition: background-color 0.4s ease;
  animation: ${smoothSpin} 2.4s ease-in-out infinite;
  animation-delay: ${({ index }) => index * 0.3}s;
`;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const alreadyMounted = sessionStorage.getItem("appMounted");

    if (alreadyMounted) {
      setMounted(true);
      return;
    }

    const timeout = setTimeout(() => {
      setMounted(true);
      sessionStorage.setItem("appMounted", "true");
    }, 2800);

    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return (
      <LoaderWrapper>
        <LoaderContainer>
          {[0, 1, 2, 3].map((i) => (
            <SquarePiece key={i} index={i} />
          ))}
        </LoaderContainer>
      </LoaderWrapper>
    );
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
