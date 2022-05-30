import styled from 'styled-components';

export const HeroHeader = styled.div`
  width: 100%;
  height: 400px;
  margin-top: -90px;
  background: url('/images/WebHeader.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 575.98px) {
    height: 350px;
    margin-top: -3rem;
    background-size: 900px 350px;
  }
`;
export const HeroHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  padding-top: 5rem;
`;

export const HeaderTitle = styled.h2`
  color: #f1f1f1;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 5rem;
  &.side {
    font-size: 2.2rem;
  }
  &.side.right {
    text-align: right;
  }
  &.side.left {
    text-align: left;
  }
  @media screen and (max-width: 575.98px) {
    width: 300px;
    text-align: center;
    font-size: 30px;
    position: relative;
    top: 10%;
    margin-top: -2rem;
    &.side {
      display: none;
    }
  }
`;
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  /* add before styles */
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
    z-index: 2;
  }
  @media screen and (max-width: 575.98px) {
    height: 500px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH2 = styled.h1`
  color: #fff;
  font-size: 68px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 38px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 18px;
  }
`;
