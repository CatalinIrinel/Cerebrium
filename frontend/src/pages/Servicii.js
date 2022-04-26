import React from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';

const ServiciiContainer = styled.div`
  min-height: 800px;
  width: 100%;
  padding: 3% 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/bgServicii.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  margin: 0 4rem;
  margin-bottom: 2rem;
  color: #000;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);

  @media screen and (max-width: 575.98px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

const CardTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  text-align: center;
  color: #13113c;
`;

const CardText = styled.div`
  display: none;
  p {
    line-height: 1.5;
  }
`;

const pageTitle = 'Serviciile oferite';
function Servicii() {
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <ServiciiContainer>
        <Wrapper>
          <Card>
            <CardTitle>Evaluare și Testare psihologică</CardTitle>
            <CardText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                blanditiis debitis quisquam eum voluptas? Delectus nulla ad nam.
                Quis ducimus quaerat ipsum quas incidunt eveniet eum excepturi
                temporibus tenetur facere?
              </p>
            </CardText>
          </Card>
          <Card>
            <CardTitle>Neurofeedback</CardTitle>
            <CardText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                blanditiis debitis quisquam eum voluptas? Delectus nulla ad nam.
                Quis ducimus quaerat ipsum quas incidunt eveniet eum excepturi
                temporibus tenetur facere?
              </p>
            </CardText>
          </Card>
          <Card>
            <CardTitle>Consultanță</CardTitle>
            <CardText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                blanditiis debitis quisquam eum voluptas? Delectus nulla ad nam.
                Quis ducimus quaerat ipsum quas incidunt eveniet eum excepturi
                temporibus tenetur facere?
              </p>
            </CardText>
          </Card>
          <Card>
            <CardTitle>Consiliere</CardTitle>
            <CardText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                blanditiis debitis quisquam eum voluptas? Delectus nulla ad nam.
                Quis ducimus quaerat ipsum quas incidunt eveniet eum excepturi
                temporibus tenetur facere?
              </p>
            </CardText>
          </Card>
          <Card>
            <CardTitle>Terapie suportivă</CardTitle>
            <CardText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                blanditiis debitis quisquam eum voluptas? Delectus nulla ad nam.
                Quis ducimus quaerat ipsum quas incidunt eveniet eum excepturi
                temporibus tenetur facere?
              </p>
            </CardText>
          </Card>
          <Card>
            <CardTitle>Dezvoltare personală</CardTitle>
            <CardText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                blanditiis debitis quisquam eum voluptas? Delectus nulla ad nam.
                Quis ducimus quaerat ipsum quas incidunt eveniet eum excepturi
                temporibus tenetur facere?
              </p>
            </CardText>
          </Card>
        </Wrapper>
      </ServiciiContainer>
    </>
  );
}

export default Servicii;
