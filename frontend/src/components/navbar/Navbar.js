import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavLogoImg,
  NavLogoLink,
  NavMenu,
} from './NavbarElem';
import logoWeb from '../../images/NILF_Logo_1_W.png';
import logoMobile from '../../images/NILF_Logo_1_WideW.png';
function Navbar({ toggle }) {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  function checkWidth() {
    if (window.innerWidth < 768.98) {
      setIsMobile(true);
    }
  }
  const changeNav = () => {
    if (window.scrollY >= 120) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    checkWidth();
    window.addEventListener('scroll', changeNav);
  }, []);
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Acasă</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/despre">Despre Cerebrium</NavLinks>
          </NavItem>
        </NavMenu>
        <NavLogoLink to="/">
          <NavLogo>
            {isMobile ? (
              <NavLogoImg src={logoMobile} alt="Cerebrium Neurofeedback" />
            ) : (
              <NavLogoImg src={logoWeb} alt="Cerebrium Neurofeedback" />
            )}
          </NavLogo>
        </NavLogoLink>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/servicii">Serviciile Noastre</NavLinks>
          </NavItem>
          {/* <NavItem>
            <NavLinks to="/ce-este-neurofeedback-ul">
              Ce este Neurofeedback-ul?
            </NavLinks>
          </NavItem> */}

          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
