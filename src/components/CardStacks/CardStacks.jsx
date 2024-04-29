/* eslint-disable react/prop-types */
// Importera useState-hook från React för att använda tillståndshantering i funktionen
import { useState } from 'react';
import { Card } from '../Card/Card.jsx';
import { CARD_DETAILS } from '../../data/cardDetails.js';
import './CardStacksStyles.css';

// Använt useState-hook för att hålla tillståndet för korten, börjar med CARD_DETAILS
export const CardStacks = () => {
  const [cards, setCards] = useState(CARD_DETAILS);

  // Funktion för att flytta ett kort till toppen baserat på index
  const moveCardToTop = (index) => {
    const updatedCards = [...cards]; // Skapa en kopia av kortarrayen
    const movedCard = updatedCards.splice(index, 1)[0]; // Ta bort kortet från det nuvarande indexet och spara det
    updatedCards.unshift(movedCard); // Lägg till kortet i början av arrayen för att flytta det till toppen
    setCards(updatedCards); // Uppdatera kortarrayen med den nya ordningen
  };

  return (
    <div className="cardstack">
      {/* Loopa igenom korten (cards-arrayen) och rendera varje kort som en Card-komponent */}
      {cards.map((card, index) => (
        <Card
          key={index} // Unik nyckel för varje kort, index används här (kan vara problematiskt om kortordningen ändras)
          {...card} // Sprida egenskaperna från kortobjektet som props till Card-komponenten
          onClick={() => moveCardToTop(index)} // Callback-funktion för när ett kort klickas på, flyttar kortet till toppen
        />
      ))}
    </div>
  );
};
