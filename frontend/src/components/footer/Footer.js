import React from 'react';
import { FaFacebook, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import logo from '../../images/NILF_Logo_1_WideW.png';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLogo,
  FooterLogoWrap,
  FooterWrap,
  IconLink,
  LinksTitle,
  SocialMedia,
  WebsiteRights,
} from './FooterElem';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <LinksTitle>Meniu</LinksTitle>
            <FooterLink to="/">Acasă</FooterLink>
            <FooterLink to="/contact">Programări</FooterLink>
            <FooterLink to="/servicii">Servicii</FooterLink>
            <FooterLink to="/despre">Echipa Noastră</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <LinksTitle>Neurofeedback</LinksTitle>
            <FooterLink to="/ce-este-neurofeedback-ul">
              Ce este Neurofeedback-ul?
            </FooterLink>
            <FooterLink to="/afectiuni">Ce afecțiuni se pot trata?</FooterLink>
            <FooterLink to="/frecventa-optima">
              Ce este frecvența optimă?
            </FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <LinksTitle>Link-uri utile</LinksTitle>
            <FooterLink to="/">Politică GDPR</FooterLink>
            <FooterLink to="/">Termeni de Utilizare</FooterLink>
            <FooterLink to="/">Termeni și Condiții</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <FooterWrap>
        <FooterLogoWrap to="/">
          <FooterLogo src={logo} alt="Cerebrium Neurofeedback" />
        </FooterLogoWrap>
        <WebsiteRights>
          Cerebrium <FaRegCopyright className="copyrights" />{' '}
          {new Date().getFullYear()} All rights reserved.{' '}
          <p>
            Created by <a href="https://peakngo.com"> PeakWeb</a>
          </p>
        </WebsiteRights>
        <SocialMedia>
          <IconLink
            href="https://www.facebook.com/Cerebrium-Neurofeedback-Constanta-102789452359176"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </IconLink>
          <IconLink
            href="https://www.instagram.com/cerebrium_neurofeedback/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </IconLink>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
