import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  Column1,
  Column2,
  Description,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  TopLine,
} from './InfoSectionElem';
import { ButtonContainer, ButtonLink } from './ButtonElem';

function InfoSection({
  lightBg,
  imgStart,
  dataAosTxt,
  dataAosDuration,
  dataAosEasing,
  dataAosDelay,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  dataAosImg,
  buttonLink,
  bigButton,
  bigFont,
}) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <InfoContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper
                data-aos={dataAosTxt}
                data-aos-duration={dataAosDuration}
                data-aos-easing={dataAosEasing}
                data-aos-delay={dataAosDelay}
              >
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Description darkText={darkText}>{description} </Description>

                <ButtonContainer
                  lightBg={lightBg}
                  bigButton={bigButton}
                  bigFont={bigFont}
                >
                  <ButtonLink lightBg={lightBg} to={buttonLink}>
                    {buttonLabel}
                  </ButtonLink>
                </ButtonContainer>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={img}
                  alt={alt}
                  data-aos={dataAosImg}
                  data-aos-duration={dataAosDuration}
                  data-aos-easing={dataAosEasing}
                  data-aos-delay={dataAosDelay}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
