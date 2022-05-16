import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components/macro';

const ndGcolor = '#90c747';
const stBcolor = '#0e1b43';
const ndOcolor = '#f5b315';

const AboutContainer = styled.div`
  min-height: 800px;
  width: 100%;
  padding: 3% 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;

  @media screen and (max-width: 575.98px) {
    padding: 5%;
    min-height: 100vh;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  z-index: 3;
  width: 100%;
  max-width: ${({ loc }) => (loc ? '1600px' : '1100px')};
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Row = styled.div`
  min-height: 500px;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  &.centered {
    max-width: 800px;
    align-items: center;
  }
  & iframe {
    width: 700px;
    height: 400px;
    @media screen and (max-width: 600px) {
      width: 400px;
      height: 400px;
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const TopLine = styled.h3`
  color: ${({ lightText }) => (lightText ? `${ndOcolor}` : `${ndGcolor}`)};
  font-size: 1.4rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 0.8rem;
`;

export const Heading = styled.h2`
  margin-bottom: 1.5rem;
  font-size: ${({ loc }) => (loc ? '1.5rem' : '3rem')};
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : `${stBcolor}`)};

  @media screen and (max-width: 600px) {
    font-size: ${({ loc }) => (loc ? '1.5rem' : '2rem')};
    padding: 0 1rem;
  }
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? `${stBcolor}` : '#fff')};
  display: none;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 35%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    border-radius: 2px;
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #13113c;
    border-right-color: #13113c;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 35%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    top: 0;
    left: 0;
    border-top-color: ${ndGcolor};
    border-left-color: ${ndGcolor};
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  background-color: #f1f1f1;
  margin: 0;
  min-height: 6rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  padding-top: 2rem;

  @media screen and (max-width: 768.98px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 600px) {
    padding: 2rem 1.5rem;
  }
`;
export const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

export const NavLinks = styled.button`
  background: none;
  border: none;
  color: #000;
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
  margin-bottom: 3rem;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    border-radius: 2px;
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${blue};
    border-right-color: ${blue};
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    top: 0;
    left: 0;
    border-top-color: ${orange};
    border-left-color: ${orange};
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

  &:hover::after,
  :hover::before {
    width: 100%;
    height: 100%;
  }
`;

const pageTitle = 'Echipa Cerebrium';
function AboutPage() {
  const [echipa, setEchipa] = useState(true);
  const [locatie, setLocatie] = useState(false);
  const echipaData = () => {
    setEchipa(true);
    setLocatie(false);
  };
  const locData = () => {
    setEchipa(false);
    setLocatie(true);
  };
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <NavbarContainer>
        <NavMenu>
          <NavLinks onClick={echipaData}>Echipa</NavLinks>
          <NavLinks onClick={locData}>Locație</NavLinks>
        </NavMenu>
      </NavbarContainer>
      <AboutContainer>
        <Wrapper loc={locatie}>
          {echipa ? (
            <>
              <Row imgStart={false}>
                <Column1>
                  <TextWrapper>
                    <TopLine lightText={true}>Psiholog</TopLine>
                    <Heading lightText={false}>Carp Ionela</Heading>
                    <Description darkText={true}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Praesentium fugiat fugit alias quidem ipsam, optio quasi
                      aliquid recusandae voluptatibus aut ducimus aperiam saepe
                      aliquam ipsa numquam perspiciatis non rerum architecto!
                    </Description>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src="/images/s3.svg" />
                  </ImgWrap>
                </Column2>
              </Row>
              <Row imgStart={true}>
                <Column1>
                  <TextWrapper>
                    <TopLine lightText={true}>Psiholog</TopLine>
                    <Heading lightText={false}>Carp Andreea Simona</Heading>
                    <Description darkText={true}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Praesentium fugiat fugit alias quidem ipsam, optio quasi
                      aliquid recusandae voluptatibus aut ducimus aperiam saepe
                      aliquam ipsa numquam perspiciatis non rerum architecto!
                    </Description>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src="/images/s3.svg" />
                  </ImgWrap>
                </Column2>
              </Row>
            </>
          ) : (
            locatie && (
              <>
                <Row imgStart={true}>
                  <Column1>
                    <TextWrapper className="centered">
                      <TopLine lightText={true}>Constanța</TopLine>
                      <Heading loc={locatie} lightText={false}>
                        Bvd Al. Lăpușneanu, Nr. 94, Bl. LE42, Sc. C, Ap. 42,
                        Parter
                      </Heading>
                      <iframe
                        title="constanta"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.1936692899599!2d28.63332682926472!3d44.19110899869417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xedfdebc4e7545409!2zNDTCsDExJzI4LjAiTiAyOMKwMzgnMDIuMCJF!5e0!3m2!1sen!2sro!4v1652635334532!5m2!1sen!2sro"
                        width="700"
                        height="450"
                        loading="lazy"
                      ></iframe>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <TextWrapper className="centered">
                      <TopLine lightText={true}>Tulcea</TopLine>
                      <Heading loc={locatie} lightText={false}>
                        Str. Isaccei, Nr. 31 Bl. 18, Sc. A, Ap. 6 - Parter
                      </Heading>
                      <iframe
                        title="tulcea"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.0974012619636!2d28.79272682936097!3d45.179209000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b7595b1a424da5%3A0xe280715bec144458!2sStrada%20Isaccei%2031%2C%20Tulcea!5e0!3m2!1sen!2sro!4v1652635586738!5m2!1sen!2sro"
                        width="700"
                        height="450"
                        loading="lazy"
                      ></iframe>
                    </TextWrapper>
                  </Column2>
                </Row>
              </>
            )
          )}
        </Wrapper>
      </AboutContainer>
    </>
  );
}

export default AboutPage;
