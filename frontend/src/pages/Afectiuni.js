import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components/macro';
import Modal from '../components/Modal';
import { dataC2, dataC1, dataC3 } from '../components/ModalData';
import MiniNav from '../components/MiniNav';

const green = '#90c747';
const blue = '#13113c';

const AfectContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  max-width: 500px;
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
  font-size: 1.5rem;
  transition: all 0.7s ease-in-out;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
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
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    top: 0;
    left: 0;
    border-top-color: ${green};
    border-left-color: ${green};
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

  &:hover::after,
  :hover::before {
    width: 70%;
    height: 70%;
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
