import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: ${props => props.color === "light" ? "#fff" : "#333" };
  color: ${props => props.color === "light" ? "#333" : "#fff"};
  padding: 1rem 2rem;
`

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutContainer color={theme}>
      About
    </AboutContainer>
  )
}

export default About