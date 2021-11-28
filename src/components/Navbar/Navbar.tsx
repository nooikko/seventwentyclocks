import { StyledNavbar, Brand, StyledLink, StyledInternalLink } from './styles';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Brand to='/'>Seven 20 Clocks</Brand>
      <div>
        <StyledInternalLink to='/desktop'>Desktop</StyledInternalLink>
        <StyledLink href='https://www.buymeacoffee.com/bringthesun'  rel='noreferrer' target='_blank'> Buy me a coffee</StyledLink>
      </div>
    </StyledNavbar>
  );
};
