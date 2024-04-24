/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card } from '../Card/Card.jsx';
import './CardStacksStyles.css';

export const CardStacks = ({ cardDetails }) => {
  const [cards, setCards] = useState(cardDetails);

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
        <Card
          key={index}
          {...card}
          onClick={() => moveCardToTop(index)}
          // cardColor={card.cardColor}
          // cardNumber={card.cardNumber}
          // chip={card.chip}
          // blipp={card.blipp}
          // vendor={card.vendor}
          // name={card.name}
          // dates={card.dates}
        />
      ))}
    </>
  );
};
