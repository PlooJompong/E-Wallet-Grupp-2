/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card } from '../Card/Card.jsx';
import { CARD_DETAILS } from '../../data/cardDetails.js';
import './CardStacksStyles.css';

export const CardStacks = () => {
  const [cards, setCards] = useState(CARD_DETAILS);

  console.log(cards);

  const moveCardToTop = (index) => {
    const updatedCards = [...cards];
    const movedCard = updatedCards.splice(index, 1)[0];
    updatedCards.unshift(movedCard);
    setCards(updatedCards);
  };

  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} {...card} onClick={() => moveCardToTop(index)} />
      ))}
    </>
  );
};
