import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import imagen1 from "../images/Imgen principal.jpg";
import "../styles/styles.css";

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  text-align: center;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
   
`;
const Section = styled.section`
  display: flex;
  
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin: 2rem 0;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;


const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-width: 50%;
  }
`;

const Texto1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Title1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: purple;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Dia = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: purple;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Title2 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #9333ea;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title3 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #9333ea;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Timer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ef4444;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MapaButton = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled(Link)`
  margin-top: 1.5rem;
  padding: 10px 20px;
  background-color: #374151;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;

  &:hover {
    background-color: #111827;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

const Info = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const eventDate = useMemo(() => new Date("2025-04-27T13:00:00").getTime(), []);

  return (
    <Container>
      <Section >  
        <Title1>Mi Primer Añito</Title1>
        <Texto1>Tenemos el honor de invitarte a celebrar el primer añito de nuestra amada</Texto1>
        <Title1>Ana</Title1>
      </Section>

      <Section>
        <Texto1>Domingo</Texto1>
        <Dia>27</Dia>
        <Texto1>Abril 2025</Texto1>
      </Section>
      
      <Section>
        <div>
        <Title2>Cuenta Regresiva</Title2>
        {isMounted && <Timer><Countdown date={eventDate} /></Timer>}
        </div>
        <Image src={imagen1} alt="Fiesta" />
      </Section>

      <Section>
        <Image src={imagen1} alt="Fiesta" />
        <div>
          <Title3>Dirección</Title3>
          <InfoText>📍 Dirección: Calle Falsa 123, Ciudad, País</InfoText>
          <MapaButton
            href="https://www.google.com/maps/place/Nombre+del+lugar/@LAT,LNG,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Ubicación
          </MapaButton>
          <InfoText>⏰ Hora: 8:00 PM</InfoText>
        </div>
      </Section>

      <Button to="/">Volver</Button>
    </Container>
  );
};

export default Info;

