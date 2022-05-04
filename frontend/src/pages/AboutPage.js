import React from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';

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
    padding: 10%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  z-index: 3;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Row = styled.div`
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
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 575.98px) {
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
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : `${stBcolor}`)};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
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

const pageTitle = 'Ce este Cerebrium?';
function AboutPage() {
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <AboutContainer>
        <Wrapper>
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
        </Wrapper>
      </AboutContainer>
    </>
  );
}

export default AboutPage;
