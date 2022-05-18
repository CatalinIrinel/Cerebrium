import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 6rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1300px;
  margin-top: 2rem;
  @media screen and (max-width: 768.98px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`;
export const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0;
    & > * {
      margin-bottom: 0.5rem;
    }
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

const blue = '#13113c';
const orange = '#f58115';
export const NavLinks = styled(Link)`
  color: #fff;
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
  background-color: ${blue};
  border-radius: 1rem;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: ${orange};
  }
`;
function MiniNav() {
  return (
    <NavbarContainer>
      <NavMenu>
        <NavLinks to="/afectiuni">Afecțiuni</NavLinks>
        <NavLinks to="/ce-este-neurofeedback-ul">Neurofeedback</NavLinks>
        <NavLinks to="/frecventa-optima">Frecvența Optimă</NavLinks>
      </NavMenu>
    </NavbarContainer>
  );
}

export default MiniNav;
