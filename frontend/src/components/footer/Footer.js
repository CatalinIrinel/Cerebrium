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
            <FooterLink to="/">Acasa</FooterLink>
            <FooterLink to="/">Programari</FooterLink>
            <FooterLink to="/">Servicii</FooterLink>
            <FooterLink to="/">Echipa Noastra</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <LinksTitle>Neurofeedback</LinksTitle>
            <FooterLink to="/">Ce este Neurofeedback-ul?</FooterLink>
            <FooterLink to="/">Cum functioneaza?</FooterLink>
            <FooterLink to="/">Dovezi Stiintifice</FooterLink>
            <FooterLink to="/">Intrebari Frecvente</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <LinksTitle>Link-uri utile</LinksTitle>
            <FooterLink to="/">Antrenamente</FooterLink>
            <FooterLink to="/">Monitorizare</FooterLink>
            <FooterLink to="/">Indicatii Terapeutice</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <FooterWrap>
        <FooterLogoWrap to="/">
          <FooterLogo src={logo} alt="Cerebrium Neurofeedback" />
        </FooterLogoWrap>
        <WebsiteRights>
          Cerebrium <FaRegCopyright className="copyrights" />{' '}
          {new Date().getFullYear()} All rights reserved.
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
