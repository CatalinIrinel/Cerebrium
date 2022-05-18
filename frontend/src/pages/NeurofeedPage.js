import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components/macro';
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

const orange = '#f58115';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

  color: #fff;
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
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: ${orange};

  &.active {
    transform: translateX(20px) scale(1.1);
  }
  @media screen and (max-width: 668px) {
    &.active {
      transform: none;
    }
  }
  &:hover {
    color: #214222;
  }
`;

const Title = styled.h2`
  font-size: 1.1rem;
  width: fit-content;
  margin: 0;
  @media screen {
    font-size: 1rem;
    text-align: center;
  }
`;

const pageTitle = [
  <p key="titleNeuro">
    Optimizează-ți Creierul! <br /> Îmbunătățește-ți viața!
  </p>,
];
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
