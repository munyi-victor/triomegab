"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .primary {
      background-color: blue;
    }

    .secondary {
      background-color: purple;
    }
`;

export const NavbarStyle = styled.div`
  nav {
    display: flex;
    margin: 0 auto;
    padding: 12px 50px;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    z-index: 10;
    align-items: center;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);

    div {
      display: flex;
      gap: 40px;

      ul {
        display: flex;
        gap: 20px;
        list-style: none;
        align-items: center;

        li a {
          font-size: 20px;
        }
      }
    }
  }
`;

export const FooterContainer = styled.div`
  div {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f7f7f7;
    color: #777;
    font-size: 12px;
    text-align: center;
  }
`;

export const HeroContainer = styled.div`
  height: 80vh;
`;

export const ButtonContainer = styled.div`
  button {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
  }
`;
