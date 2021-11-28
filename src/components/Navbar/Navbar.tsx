import { StyledNavbar, Brand, StyledLink, StyledInternalLink, LinkContainer } from './styles';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Brand to='/'>Seven 20 Clocks</Brand>
      <LinkContainer>
        <StyledInternalLink to='/desktop'>Desktop</StyledInternalLink>
        <StyledLink href='https://github.com/elijah-penney/seventwentyclocks'  rel='noreferrer' target='_blank'>GITHUB</StyledLink>
        <StyledLink href='https://www.buymeacoffee.com/bringthesun'  rel='noreferrer' target='_blank'> Buy me a coffee</StyledLink>
      </LinkContainer>
    </StyledNavbar>
  );
};
