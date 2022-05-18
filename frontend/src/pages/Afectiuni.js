import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components/macro';
import Modal from '../components/Modal';
import { dataC2, dataC1, dataC3 } from '../components/ModalData';
import MiniNav from '../components/MiniNav';

const orange = '#f58115';
// const blue = '#13113c';

const AfectContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
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

const AfectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 4rem 6rem;
  @media screen and (max-width: 768.98px) {
    flex-direction: column;
    padding: 2rem 3rem;
  }
`;

const ColumnsArea = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1.4rem;
  }

  @media screen and (max-width: 768.98px) {
    max-width: 100%;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
const AfectTitles = styled.h2`
  position: relative;
  width: fit-content;
  padding: 0.8rem;
  font-size: 1.1rem;
  transition: all 0.7s ease-in-out;
  cursor: pointer;
  color: #fff;
  background-color: ${orange};
  border-radius: 1rem;
  &:hover {
    color: #214222;
  }
`;

const pageTitle = 'Afecțiuni';

function Afectiuni() {
  const [showModal, setShowModal] = useState(false);
  const [showText, setShowText] = useState([]);
  const [index, setIndex] = useState();

  const modalHandlerOpen = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <AfectContainer className="afectiuni">
        <MiniNav />
        <AfectWrapper>
          <ColumnsArea>
            {dataC1.map((item, index) => {
              return (
                <div key={index}>
                  <AfectTitles
                    id={item.id}
                    onClick={() => {
                      modalHandlerOpen();
                      setShowText(item);
                      setIndex(index);
                    }}
                  >
                    {item.title}
                  </AfectTitles>
                </div>
              );
            })}
          </ColumnsArea>
          <ColumnsArea>
            {dataC2.map((item, index) => {
              return (
                <div key={index}>
                  <AfectTitles
                    id={item.id}
                    onClick={() => {
                      modalHandlerOpen();
                      setShowText(item);
                      setIndex(index);
                    }}
                  >
                    {item.title}
                  </AfectTitles>
                </div>
              );
            })}
          </ColumnsArea>
          <ColumnsArea>
            {dataC3.map((item, index) => {
              return (
                <div key={index}>
                  <AfectTitles
                    id={item.id}
                    onClick={() => {
                      modalHandlerOpen();
                      setShowText(item);
                      setIndex(index);
                    }}
                  >
                    {item.title}
                  </AfectTitles>
                </div>
              );
            })}
          </ColumnsArea>
        </AfectWrapper>
        <Modal
          key={index}
          showModal={showModal}
          setShowModal={setShowModal}
          details={showText}
        />
      </AfectContainer>
    </>
  );
}

export default Afectiuni;
