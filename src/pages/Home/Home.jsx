import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import styled from 'styled-components';
import Hero from "../../Components/Hero/Hero";

const HomeContainer = styled.div`
  background-color: ${props => props.color === "light" ? "#fff" : "#333"};
  color: ${props => props.color === "light" ? "#333" : "#fff"};
  padding: 1rem 2rem;
`

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HomeContainer color={theme}>
      <Hero />
    </HomeContainer>
  )
}

export default Home