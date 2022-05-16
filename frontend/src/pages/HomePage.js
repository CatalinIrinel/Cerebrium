import React from 'react';
import {
  HeaderTitle,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH2,
  HeroHeader,
  HeroHeaderWrapper,
  VideoBg,
} from '../components/home/HeroElem';
import InfoSection from '../components/home/InfoSection';
import {
  contactData,
  neuroData,
  serviciiData,
} from '../components/home/InfoSectionData';
import ServicesArea from '../components/home/ServicesArea';
import video from '../videos/heroVideo.mp4';

function HomePage() {
  return (
    <>
      <HeroHeader>
        <HeroHeaderWrapper>
          <HeaderTitle>
            Ești ceea ce gândești.
            <br />
            Fă-ți mintea să conteze!
          </HeaderTitle>
        </HeroHeaderWrapper>
      </HeroHeader>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            autoPlay={true}
            loop={true}
            controls={false}
            playsInline
            muted
            src={video}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH2>CEREBRIUM</HeroH2>
        </HeroContent>
      </HeroContainer>
      <InfoSection {...neuroData} />
      <ServicesArea {...serviciiData} />
      <InfoSection {...contactData} />
    </>
  );
}

export default HomePage;
