import React, { useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed; /* Stay in place */
  z-index: 11; /* Sit on top */
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.2); /* Black w/ opacity */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 90vh;
  margin: auto; /* 15% from the top and centered */
  border: none;
  max-width: 1600px;
  width: 1400px; /* Could be more or less, depending on screen size */
  background-color: #e1e1e1;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const DetailsText = styled.div`
  width: 100%;
  font-size: 1rem;
  padding: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 1.8rem;
  }
  & > * {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
    padding-top: 4rem;
  }
`;
const TextArea = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
  div {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    @media screen and (max-width: 600px) {
      overflow: auto;
      & > * {
        font-size: 1rem;
      }
    }
  }
`;
const CloseSpan = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;

  @media screen and (max-width: 600px) {
    top: 1rem;
    right: 3rem;
  }
`;
function Modal({ showModal, setShowModal, details }) {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  });
  return (
    <>
      {showModal && (
        <Background onClick={closeModal}>
          <animated.div style={animation}>
            <Container>
              <CloseSpan
                className="close"
                onClick={() => setShowModal((prev) => !prev)}
              >
                &times;
              </CloseSpan>
              <DetailsText>
                <h2>{details.title}</h2>
                <TextArea>{details.text}</TextArea>
              </DetailsText>
            </Container>
          </animated.div>
        </Background>
      )}
    </>
  );
}

export default Modal;
