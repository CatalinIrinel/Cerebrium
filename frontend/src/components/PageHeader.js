import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: -90px;

  @media screen and (max-width: 575.98px) {
    height: 350px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/WebHeader.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 575.98px) {
    background-size: 900px 350px;
  }
`;

export const HeaderTitle = styled.h1`
  color: #f1f1f1;
  font-weight: bold;
  font-size: 60px;
  position: absolute;
  top: 20%;
  @media screen and (max-width: 575.98px) {
    width: 300px;
    text-align: center;
    font-size: 30px;
    position: relative;
    top: 10%;
  }
`;

function PageHeader({ pageTitle }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>{pageTitle}</HeaderTitle>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default PageHeader;
