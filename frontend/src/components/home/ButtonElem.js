import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.div`
  border-radius: 16px;
  background: ${({ lightBg }) => (lightBg ? '#214222' : '#f5b315')};
  padding: ${({ bigButton }) => (bigButton ? '14px 48px' : '12px 30px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '16px')};
  cursor: pointer;
  border: none;
  outline: none;
  width: fit-content;
`;
export const ButtonLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;
