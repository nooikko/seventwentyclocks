import styled from 'styled-components';

export const Row = styled.div <{ $justify?: 'space-between' | 'flex-start' | 'space-around' | 'flex-end'; $marginTop?: number }>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.$justify};
  margin-top: ${(props) => props.$marginTop}rem;
`;

export const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #D1D2D3;
  text-transform: uppercase;
  margin-block-end: 0.65rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 769px) {
    font-size: 3.75rem;
  }

`;

export const Description = styled.div`
  color: #F1F2F3;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const StyledLink = styled.a`
  color: #7EBDC2;
  text-decoration: none;
`;