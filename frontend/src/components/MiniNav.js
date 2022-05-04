import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
  @media screen and (max-width: 768.98px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 575.98px) {
    justify-content: space-between;
  }
`;
export const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

const blue = '#13113c';
const orange = '#f58115';
export const NavLinks = styled(Link)`
  color: #000;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.4rem;
  position: relative;
  padding: 0.8rem 1.5rem;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    border-radius: 2px;
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${blue};
    border-right-color: ${blue};
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    top: 0;
    left: 0;
    border-top-color: ${orange};
    border-left-color: ${orange};
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

  &:hover::after,
  :hover::before {
    width: 100%;
    height: 100%;
  }
  &.active {
    border-bottom: 3px solid #fff;
  }
`;
function MiniNav() {
  return (
    <NavbarContainer>
      <NavMenu>
        <NavLinks to="/afectiuni">Afectiuni</NavLinks>
        <NavLinks to="/ce-este-neurofeedback-ul">Neurofeedbaack</NavLinks>
        <NavLinks to="/frecventa-optima">Frecventa Optima</NavLinks>
      </NavMenu>
    </NavbarContainer>
  );
}

export default MiniNav;
