import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
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
    if (window.scrollY >= 90) {
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
          <NavItem>
            <NavLinks to="#">Resurse</NavLinks>
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
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                NEUROFEEDBACK
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <NavLinks
                  className="normal-case"
                  to="/ce-este-neurofeedback-ul"
                >
                  Ce este Neurofeedback-ul?
                </NavLinks>
                <NavLinks className="normal-case" to="/afectiuni">
                  Ce afecțiuni se pot trata?
                </NavLinks>
                <NavLinks className="normal-case" to="/frecventa-optima">
                  Ce este frecvența optimă?
                </NavLinks>
              </Dropdown.Menu>
            </Dropdown>
          </NavItem>
          <NavItem>
            <NavLinks to="/servicii">Serviciile Noastre</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
