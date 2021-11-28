import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledNavbar = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Brand = styled(Link)`
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #D1D2D3;
  text-decoration: none;

  &:hover {
    color: #F1F2F3
  }
`;

export const StyledInternalLink = styled(Link)`
  color: #E1E2E3;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  z-index: 20;

  &:hover {
    color: #F1F2F3;
  }
`;

export const StyledLink = styled.a`
  color: #E1E2E3;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  z-index: 20;

  &:hover {
    color: #F1F2F3;
  }
`;

export const LinkContainer = styled.div`
  a:not(:last-of-type) {
    margin-right: 1rem;
  }
`;