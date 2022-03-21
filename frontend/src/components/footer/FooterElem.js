import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mainGcolor = '#298d43';
const secondBcolor = '#0e1b43';

export const FooterContainer = styled.footer`
  background: ${secondBcolor};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: 0;
    padding: 12px 24px;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  width: 100%;
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
  @media screen and (max-width: 768.98px) {
    font-size: 1rem;
    width: fit-content;
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
