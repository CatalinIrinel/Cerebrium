import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import {
  Ce,
  Cand,
  In,
  Cine,
  Cum,
  Care,
  Cat,
  Istoric,
  getActive,
} from '../components/NeurofeedbackData';
import TextSection from '../components/neurofeedback/TextSection';
import MiniNav from '../components/MiniNav';

const green = '#90c747';
const blue = '#13113c';
const orange = '#f58115';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 668px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  width: 70%;

  @media screen and (max-width: 668px) {
    width: 100%;
    align-items: center;
  }
`;

const MenuArea = styled.div`
  width: 30%;
  height: 650px;

  @media screen and (max-width: 668px) {
    width: 100%;
    min-height: 500px;
    margin-bottom: 1rem;
  }
`;

const ButtonsArea = styled.ul`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  @media screen and (max-width: 668px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Buttons = styled.li`
  width: fit-content;
  padding: 1rem;
  margin: 0.3rem 0;
  transition: transform 0.4s ease-in-out;
  color: ${blue};
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &.active {
    transform: translateX(20px) scale(1.1);

    color: ${orange};
  }
  @media screen and (max-width: 668px) {
    &.active {
      transform: none;

      color: ${orange};
    }
  }
`;

const Title = styled.h2`
  font-size: 1.1rem;
  width: fit-content;

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
  @media screen {
    font-size: 1rem;
    text-align: center;
  }
`;

const pageTitle = 'Neurofeedback-ul';

function NeurofeedPage() {
  const [getText, setGetText] = useState('');
  const [getTitle, setGetTitle] = useState('');
  const [isActive, setIsActive] = useState([]);

  const changeText = async (id) => {
    let text = await id;
    await setGetText(text);
    let title = await document.getElementById(id).innerText;
    await setGetTitle(title);
  };
  const setActive = (id) => {
    const list = getActive;
    const updateList = list.map((item) => {
      if (item.id === id && item.active === false) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setIsActive(updateList);
  };
  useEffect(() => {
    setIsActive(getActive);
  }, [setIsActive]);
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <Container>
        <MiniNav />
        <Wrapper>
          <MenuArea>
            <ButtonsArea>
              {isActive.map((item, index) => {
                return (
                  <Buttons
                    key={index}
                    className={item.active ? 'active' : 'default'}
                    id={item.id}
                    onClick={(e) => {
                      changeText(e.currentTarget.id);
                      setActive(item.id);
                    }}
                  >
                    <Title>{item.title}</Title>
                  </Buttons>
                );
              })}
            </ButtonsArea>
          </MenuArea>
          <TextArea>
            {getText === 'Ce' && <TextSection title={getTitle} array={Ce} />}
            {getText === 'Cand' && (
              <TextSection title={getTitle} array={Cand} />
            )}
            {getText === 'In' && <TextSection title={getTitle} array={In} />}
            {getText === 'Cine' && (
              <TextSection title={getTitle} array={Cine} />
            )}
            {getText === 'Cum' && <TextSection title={getTitle} array={Cum} />}
            {getText === 'Care' && (
              <TextSection title={getTitle} array={Care} />
            )}
            {getText === 'Cat' && <TextSection title={getTitle} array={Cat} />}
            {getText === 'Istoric' && (
              <TextSection title={getTitle} array={Istoric} />
            )}
          </TextArea>
        </Wrapper>
      </Container>
    </>
  );
}

export default NeurofeedPage;
