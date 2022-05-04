import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mainGcolor = '#298d43';
// const secondBcolor = '#0e1b43';

export const FooterContainer = styled.footer`
  background: url('/images/Bg2.jpg');
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 24px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: 0;
    padding: 12px 24px;
  }
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 3;
  margin-bottom: 2rem;
  max-width: 1600px;
  width: 100%;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: fit-content;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    align-items: center;
  }

  @media screen and (max-width: 575.98px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LinksTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
  text-transform: uppercase;
  border-bottom: 1px solid #fff;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    color: #90c747;
    transition: all 0.3s ease-out;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  width: 100%;
  z-index: 3;
  padding-top: 10px;
  border-top: 1px solid #fff;
  @media screen and (max-width: 575.98px) {
    flex-direction: column;
    margin: 10px 0;
    & > * {
      margin-top: 1.5rem;
    }
  }
`;

export const FooterLogoWrap = styled(Link)`
  height: 50px;
  @media screen and (max-width: 575.98px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const FooterLogo = styled.img`
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 575.98px) {
    height: auto;
    width: 100%;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-left: 1rem;
    color: #f5b315;
    text-decoration: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768.98px) {
    font-size: 1rem;
    width: fit-content;
    height: auto;
    flex-wrap: wrap;
    a {
      margin: 0;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 575.98px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;
export const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 40px;
  transition: all 0.5s ease-in;
  @media screen and (max-width: 768.98px) {
    margin-left: 20px;
  }

  &:hover {
    color: ${mainGcolor};
  }
`;
