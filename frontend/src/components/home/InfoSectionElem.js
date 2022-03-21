import styled from 'styled-components/macro';

const stGcolor = '#214222';
const ndGcolor = '#90c747';

const stBcolor = '#0e1b43';
const ndOcolor = '#f5b315';

export const InfoContainer = styled.div`
  color: #fff;
  height: auto;
  background: ${({ lightBg }) =>
    lightBg ? '#fff' : `linear-gradient(23deg, ${ndGcolor} , ${stGcolor})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    overflow: hidden;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: grid;
  z-index: 3;
  height: 760px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
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

export const TopLine = styled.h2`
  color: ${({ lightText }) => (lightText ? `${ndOcolor}` : `${ndGcolor}`)};
  font-size: 22px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : `${stBcolor}`)};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? `${stBcolor}` : '#fff')};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;
