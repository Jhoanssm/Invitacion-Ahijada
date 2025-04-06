import { Link } from "react-router-dom";
import styled from "styled-components";
import imagen1 from "../images/Imgen principal.jpg"
import invitationIcon from "../images/invitacion.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right,rgb(227, 204, 220),rgb(227, 217, 203),rgb(241, 240, 213));
  color: black;
  text-align: center;
  padding: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Text = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  max-width: 400px;
`;

const Button = styled(Link)`

    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ff6b6b;
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  img {
    width: 24px;
    height: 24px;
  }



  &:hover {
    background-color: #eab308;
  }
`;

const Home = () => (
  <Container>
    <Image src={imagen1} alt="Fiesta"/>
    <Title>¡Estás Invitado a Nuestra Fiesta!</Title>
    <Text>Tenemos el honor de invitarte a celebrar con nostros en este día tan especial</Text>
    <Button to="/info">
        <img src={invitationIcon} alt="Invitación" /> 
        Ver Información
    </Button>
  </Container>
);

export default Home;
