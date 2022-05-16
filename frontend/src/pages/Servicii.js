import React from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dataServicii } from '../components/ModalData';

const ServiciiContainer = styled.div`
  min-height: 800px;
  width: 100%;
  padding: 3% 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url('/images/bgServicii.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & > span {
    z-index: 3;
    color: #fff;
    opacity: 1;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 575.98px) {
    padding: 10%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 300px;
  min-height: 400px;
  padding: 1rem;
  margin: 0 2rem;
  margin-bottom: 4rem;
  color: #000;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);

  p {
    font-weight: bold;
    color: #13113c;
  }

  p.success {
    padding: 0.8rem;
    color: #000;
    border-top-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    background-color: #bbfdb9;
  }

  p.error {
    padding: 0.8rem;
    color: #000;
    border-top-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    background-color: #fdb9b9;
  }

  @media screen and (max-width: 575.98px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: #13113c;
`;
const CardTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  text-align: center;
  color: #13113c;
`;
const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  p {
    font-size: 1rem;
    font-weight: bold;
    color: #13113c;
    text-align: center;
    line-height: 1.5;
  }

  & > * {
    margin-bottom: 0.8rem;
  }
`;

const green = '#90c747';
const blue = '#13113c';
const CardButton = styled.button`
  width: fit-content;
  padding: 1rem 2rem;
  background: transparent;
  position: relative;
  border: none;
  color: #13113c;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    height: 50%;
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
    width: 50%;
    height: 50%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    top: 0;
    left: 0;
    border-top-color: ${green};
    border-left-color: ${green};
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
`;

const pageTitle = 'Serviciile oferite';
function Servicii() {
  const serviciu = dataServicii;
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <ServiciiContainer>
        <Wrapper>
          {serviciu.map((item) => (
            <CardLink key={item.slug} to={`/${item.link}/${item.slug}`}>
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDetails>{item.price}</CardDetails>
                <p className={item.online ? 'success' : 'error'}>
                  Online: {item.onlineText}
                </p>
                <CardButton>Mai multe detalii</CardButton>
              </Card>
            </CardLink>
          ))}
        </Wrapper>
        <span>
          * pentru ședințele online se stabilește de comun accord cu pacientul
        </span>
      </ServiciiContainer>
    </>
  );
}

export default Servicii;
