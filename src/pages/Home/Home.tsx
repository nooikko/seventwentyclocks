import { Row, Column, Title, Description, StyledLink } from './styles';
import { Navbar } from '../../components';

export const Home = () => {
  return (
    <Column>
      <Navbar />
      <Row $justify='space-around'>
          <Title>What is this?</Title>
      </Row>
      <Row $justify='space-around'>
        <Description>
          Seven 20 Clocks is based on a reddit <StyledLink href='https://www.reddit.com/r/badUIbattles/comments/r3q1tl/they_say_that_even_a_broken_clock_is_right_twice/'>post</StyledLink> by <StyledLink href='https://www.reddit.com/user/viandux13/'>viandux13</StyledLink> claiming that "Even a broken clock is right twice a day".
          <br />
          With how aesthetically pleasing the demo was, I decided to take direction from the comments and built it as a website for wallpaper engine!
          <br />
          <br />
          Click the "Desktop" link in the top right to go to the wallpaper.
        </Description>
      </Row>
      <Row $justify='space-around'>
        <Title>Feedback</Title>
      </Row>
      <Row $justify='space-around'>
        <Description>
          Got feedback? Pop on over to the github page and let me know!
        </Description>
      </Row>
      <Row $justify='space-around'>
        <Title>Upkeep</Title>
      </Row>
      <Row $justify='space-around'>
        <Description>
          Keeping a website running these days can get expensive.
          <br />
          If you like the wallpaper and want to keep it online, why not buy me a coffee?
        </Description>
      </Row>
    </Column>
  );
};
