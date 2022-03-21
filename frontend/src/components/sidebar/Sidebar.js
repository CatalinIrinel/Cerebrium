import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './SidebarElem';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <FaTimes />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Acasă
          </SidebarLink>
          <SidebarLink to="/despre" onClick={toggle}>
            Despre Cerebrium
          </SidebarLink>

          <SidebarLink to="/servicii" onClick={toggle}>
            Serviciile Noastre
          </SidebarLink>

          <SidebarLink to="/ce-este-neurofeedback-ul" onClick={toggle}>
            Ce este Neurofeedback-ul?
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
