import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { dataServicii } from '../components/ModalData';
import styled from 'styled-components';
import { BsArrowLeftCircle } from 'react-icons/bs';

const ServiciuContainer = styled.div`
  min-height: 800px;
  width: 100%;
  padding: 3% 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #d1d1d1;
  margin-top: -90px;
  padding-top: 5.5rem;
  @media screen and (max-width: 575.98px) {
    padding: 10%;
    padding-top: 8rem;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & > .title {
    margin-bottom: 2rem;
  }

  & > .textsContainer {
    line-height: 1.5;
    text-align: justify;
    font-size: 1.2rem;
    div {
      & > * {
        margin-bottom: 0.8rem;
      }
    }
    ul {
      list-style: inside;
      margin-bottom: 0.8rem;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
    }
    .row ul {
      list-style: none;
      margin-right: 10rem;
    }
    .row ul li {
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
    }
    h2.title {
      font-size: 1.2rem;
    }
    h3 {
      font-weight: normal;
      font-size: 1.2rem;
    }
    & > * {
      margin-bottom: 0.8rem;
    }
    & > .warning {
      width: 100%;
      text-align: center;
    }
  }
`;

const BackLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  & > * {
    margin-right: 0.5rem;
  }
`;
function Serviciu() {
  const params = useParams();
  const serviciu = dataServicii.find((x) => x.slug === params.id);
  return (
    <ServiciuContainer>
      <BackLink to="/servicii">
        <BsArrowLeftCircle />
        Inapoi la servicii
      </BackLink>
      <Wrapper>
        <h1 className="title">{serviciu.title}</h1>
        {serviciu.text}
      </Wrapper>
    </ServiciuContainer>
  );
}

export default Serviciu;
