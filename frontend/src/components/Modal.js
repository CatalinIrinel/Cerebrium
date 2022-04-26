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
  width: 1000px; /* Could be more or less, depending on screen size */
  background-color: #e1e1e1;
`;

const DetailsText = styled.div`
  width: 100%;
  max-width: 700px;
  font-size: 1rem;
  padding: 5rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

const CloseSpan = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;
function Modal({ showModal, setShowModal, textData, textTitle }) {
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
      {showModal ? (
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
                <h2>{textTitle}</h2>
                {textData}
              </DetailsText>
            </Container>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default Modal;
