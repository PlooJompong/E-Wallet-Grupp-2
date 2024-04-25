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
    <div className="cardstack">
      {cards.map((card, index) => (
        <Card
          key={index}
          {...card}
          index={index}
          onClick={() => moveCardToTop(index)}
        />
      ))}
    </div>
  );
};

// {
//    <Card
// key={cards.length - 1}
// {...cards[cards.length - 1]}
// onClick={() => moveCardToTop(cards.length - 1)}
// />
// }
