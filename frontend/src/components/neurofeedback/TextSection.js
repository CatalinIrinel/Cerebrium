import React from 'react';
import styled from 'styled-components';
import { FaCheckSquare } from 'react-icons/fa';

const orange = '#f58115';

const ParagrafArea = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 0.8rem;
  }
  @media screen and (max-width: 668px) {
    text-align: justify;
  }
`;

const Paragrafe = styled.p`
  font-size: 1.1rem;
  width: 100%;
  padding: 0 4rem;
  line-height: 1.5;
  text-indent: 20px;
`;
const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 668px) {
    max-width: 350px;
    width: 100%;
  }
`;
const Titles = styled.h2`
  max-height: 38px;
  max-width: fit-content;
  font-weight: bold;
  padding-left: 5rem;
  padding-right: 0.5rem;
  margin-bottom: 2rem;
  /* typewriter effect */
  overflow: hidden;
  border-right: 0.15em solid ${orange};
  width: 0;
  font-size: 2rem;

  animation: typeEffect 2s steps(1000, end) forwards;

  @keyframes typeEffect {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @media screen and (max-width: 668px) {
    font-size: 1rem;
    height: fit-content;
    width: 100%;
    max-height: none;
    overflow: hidden;
    animation: none;
    text-align: center;
    border-right: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

const ListArea = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Items = styled.ul`
  list-style: none;
  padding: 0 4rem;
`;

const Item = styled.li`
  width: 100%;
  height: 60px;
  font-weight: normal;
  display: flex;
  align-items: center;
  & > * {
    margin-right: 10px;
  }
`;

function TextSection({ title, array }) {
  return (
    <>
      <TitleArea>
        <Titles>{title}</Titles>
      </TitleArea>
      <ParagrafArea>
        {array.map((text, index) => (
          <Paragrafe key={index}>{text}</Paragrafe>
        ))}
      </ParagrafArea>
      {array.length === 3 && (
        <ListArea>
          <Items>
            <Item>
              <FaCheckSquare className="iconCheck" /> Autism (TSA),
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Deficit de atentie /
              Hiperactivitate (ADHD)
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Tulburări de limbaj la
              copii și adulți
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Epilepsie
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Stres cronic, Anxietate,
              Depresie
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Epuizare
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Burnout
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Dureri de cap, Migrene
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Tulburări de somn,
              Insomnii
            </Item>
          </Items>

          <Items>
            <Item>
              <FaCheckSquare className="iconCheck" /> Durere cronică,
              Hiperkinezie
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Alcoolism
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Dependențe, Adicții
              (jocuri de noroc, consum de substanțe)
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Tulburari alimentare (
              Anorexie, Bulimie, Obezitate)
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Traume și tulburări de
              stres post-traumatic
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Tulburări de comportament
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Tulburări de personalitate
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Traumatisme cerebrale
            </Item>
            <Item>
              <FaCheckSquare className="iconCheck" /> Recuperare dupa AVC
            </Item>
          </Items>
        </ListArea>
      )}
    </>
  );
}

export default TextSection;
