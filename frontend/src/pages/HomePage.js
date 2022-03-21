import React from 'react';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
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

// import video from '../videos/bg.mp4';

function HomePage() {
  return (
    <>
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
          <HeroH2>Alături de noi grijile tale dispar!</HeroH2>
          <HeroH1>CEREBRIUM</HeroH1>
        </HeroContent>
      </HeroContainer>
      <InfoSection {...neuroData} />
      <ServicesArea {...serviciiData} />
      <InfoSection {...contactData} />
    </>
  );
}

export default HomePage;
