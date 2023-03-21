import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import styled from "styled-components";

import Icon from "../../assets/tourist-welcome.png"

const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    h1 {
        margin: 2rem 0;
    }
    p{
        margin: 1rem 0;
    }
    button {
        margin: 1rem 0;
    }
    div{
        &last-child {
            text-align: center;
        }
        img {
            width: 100%;
            heigh: 100%;
            max-width:30rem;
        }
    }
`;

const CustomButton = styled.button`
    background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#333"};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;

const Hero = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <HeroContainer>
            <div>
                <h1>UseContext and Router</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, facilis.</p>
                <CustomButton theme={theme}>Discover</CustomButton>
            </div>
            <div>
                <img src={Icon} alt="Hello" />
            </div>
        </HeroContainer>
    )
}

export default Hero;