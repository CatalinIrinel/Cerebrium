import React from 'react';
import { Heading, TopLine } from './InfoSectionElem';
import styled from 'styled-components';
import data from './ServicesData';
import { Link } from 'react-router-dom';

const stGcolor = '#214222';
const ndGcolor = '#90c747';

export const ServicesContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: ${({ lightBg }) =>
    lightBg
      ? 'url(/images/Bg1.jpg)'
      : `linear-gradient(23deg, ${ndGcolor} , ${stGcolor})`};
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
`;

export const ServiceWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem 0;
  z-index: 3;
`;

export const TitleWrapper = styled.div`
  max-width: 800px;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ServicesCard = styled.div`
  max-width: 350px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow: hidden;
  transition: all 0.5s ease-in;
  margin-bottom: 1.5rem;

  &:hover img {
    transform: scale(1.2);
  }

  &:hover a {
    background-color: #f5b315;
    border-color: #f5b315;
    box-shadow: 0px 0px 25px 5px #90c747;
  }

  @media screen and (max-width: 300px) {
    width: 100%;
    max-width: 250px;
  }
`;
export const ImageArea = styled.div`
  max-width: 350px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ServicesImg = styled.img`
  width: 100%;
  transition: all 0.3s ease-in;
`;

export const CardText = styled.div`
  width: 100%;
  min-height: 225px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  color: #fff;

  & > * {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 575.98px) {
    text-align: center;
  }
`;

export const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

export const CardParagraph = styled.p`
  line-height: 2;
  font-size: 14px;
  padding: 0 1rem;
`;

export const CardButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease-in;
  padding: 5px 10px;
  border: #fff solid 2px;
  border-radius: 10px;
`;

function ServicesArea({ lightText, topLine, headline }) {
  return (
    <>
      <ServicesContainer lightBg={true}>
        <ServiceWrapper>
          <TitleWrapper>
            <TopLine lightText={lightText}>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
          </TitleWrapper>

          <CardsWrapper>
            {data.services.map((item, index) => {
              return (
                <ServicesCard key={index}>
                  <ImageArea>
                    <ServicesImg src={item.img} alt={item.alt} />
                  </ImageArea>
                  <CardText>
                    <CardTitle>{item.title}</CardTitle>
                    <CardParagraph>{item.descriere}</CardParagraph>
                  </CardText>
                  <CardButton to={item.buttonLink}>
                    {item.buttonText}
                  </CardButton>
                </ServicesCard>
              );
            })}
          </CardsWrapper>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
}

export default ServicesArea;
