import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

// const mainBcolor = '#00b3ff';
const secondBcolor = '#13113c';

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? `${secondBcolor}` : `transparent`};
  height: 90px;
  /* margin-top: -120px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in;
  }
`;

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

export const NavLogo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  @media screen and (max-width: 575.98px) {
    width: 100%;
    max-width: 200px;
  }

  @media screen and (max-width: 300px) {
    width: 100%;
    max-width: 150px;
  }
`;
export const NavLogoLink = styled(LinkR)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const NavLogoImg = styled.img`
  height: 100%;
  @media screen and (max-width: 575.98px) {
    height: auto;
    width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    /* position: absolute;
    top: 5px;
    right: 0; */
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #fff;
  }
`;
