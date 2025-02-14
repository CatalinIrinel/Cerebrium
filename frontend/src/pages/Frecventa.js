import React from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import MiniNav from '../components/MiniNav';

const FrecventaContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: radial-gradient(
    hsl(85.78, 53.33%, 52.94%),
    hsl(88.97, 46.03%, 49.41%),
    hsl(92.35, 43.59%, 45.88%),
    hsl(95.6, 42.33%, 42.16%),
    hsl(99.75, 40.82%, 38.43%),
    hsl(103.48, 38.98%, 34.71%),
    hsl(107.59, 36.71%, 30.98%),
    hsl(112.65, 35.25%, 27.25%),
    hsl(117, 33.33%, 23.53%),
    hsl(121.82, 33.33%, 19.41%)
  );
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 3% 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 1.2rem;
  color: #fff;
  h2 {
    font-size: 1.2rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  ul.rowF {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: flex-start;
      padding: 0;
    }
    .subList {
      list-style: inside;
      padding: 0;
    }
  }
  & > * {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;
const pageTitle = 'Frecvența optimă';
function Frecventa() {
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <FrecventaContainer>
        <MiniNav />
        <Wrapper>
          <p>
            De obicei, este nevoie de până la 5-7 sesiuni pentru a găsi
            protocolul optim de antrenament pentru fiecare pacient.
          </p>
          <p>
            Persoanele a căror creier este <b>supraexcitat</b> au nevoie de
            relaxare și calmare pentru reducerea gândurilor excesive și
            ruminative, a impulsivității și hiperactivității, a plictiselii,
            nerăbdării și agitației, a agresivității. De asemenea
            neurofeedback-ul scade nivelul de energie și astfel sunt reduse
            anxietatea și frica, stările de încordare, sentimentele de neputință
            și copleșire, durerile și migrenele, precum și insomniile.
          </p>
          <ul className="rowF">
            <h2>
              Persoanele care se confruntă cu simptome de <b>subexcitare</b> la
              sfârșitul fiecărei sesiuni de antrenament cu neurofeedback ar
              trebui să se simtă mai treze, concentrate și motivate. Un creier
              subexcitat prezintă următoarele simptome:
            </h2>
            <ul className="subList">
              <li>Deficit de atenție și dificultăţi de concentrare</li>
              <li>Neatenție, uitare frecventă și lipsă de concentrare</li>
              <li>Visarea cu ochii deschişi</li>
              <li>Gândirea ȋn ceaţă</li>
              <li>Lipsă de motivaţie</li>
            </ul>
            <ul className="subList">
              <li>Depresie</li>
              <li>Letargie</li>
              <li>Stimă de sine scăzută</li>
              <li>Tulburări de somn</li>
            </ul>
          </ul>
        </Wrapper>
      </FrecventaContainer>
    </>
  );
}

export default Frecventa;
