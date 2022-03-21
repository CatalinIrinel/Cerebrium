import React from 'react';
import { FaFacebook, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import logo from '../../images/NILF_Logo_1_WideW.png';
import {
  FooterContainer,
  FooterLogo,
  FooterLogoWrap,
  FooterWrap,
  IconLink,
  SocialMedia,
  WebsiteRights,
} from './FooterElem';

function Footer() {
  return (
    <FooterContainer>
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
