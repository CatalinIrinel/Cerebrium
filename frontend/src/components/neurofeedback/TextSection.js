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
`;

const Paragrafe = styled.p`
  font-size: 1.1rem;
  width: 100%;
  padding: 0 4rem;
  line-height: 1.5;
  text-indent: 20px;
`;
const TitleArea = styled.div`
  display: inline-block;
  width: 100%;
  @media screen and (max-width: 668px) {
    width: 90%;
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
    font-size: 1.2rem;
    height: 50px;
    max-height: none;
    overflow: hidden;
    animation: typeEffect 1s steps(1000, end) forwards;
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
  .icon {
    color: #90c747;
    font-size: 1.5rem;
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
              <FaCheckSquare className="icon" /> Autism (TSA),
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Deficit de atentie /
              Hiperactivitate (ADHD)
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Tulburări de limbaj la copii și
              adulți
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Epilepsie
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Stres cronic, Anxietate,
              Depresie
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Epuizare
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Burnout
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Dureri de cap, Migrene
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Tulburări de somn, Insomnii
            </Item>
          </Items>

          <Items>
            <Item>
              <FaCheckSquare className="icon" /> Durere cronică, Hiperkinezie
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Alcoolism
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Dependențe, Adicții (jocuri de
              noroc, consum de substanțe)
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Tulburari alimentare (
              Anorexie, Bulimie, Obezitate)
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Traume și tulburări de stres
              post-traumatic
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Tulburări de comportament
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Tulburări de personalitate
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Traumatisme cerebrale
            </Item>
            <Item>
              <FaCheckSquare className="icon" /> Recuperare dupa AVC
            </Item>
          </Items>
        </ListArea>
      )}
    </>
  );
}

export default TextSection;
