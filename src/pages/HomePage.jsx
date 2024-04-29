/* eslint-disable no-unused-vars */
import '../index.css';
// Importera Link-komponenten från 'react-router-dom' för att hantera länkar
import { Link } from 'react-router-dom';
import { Top } from '../components/Top/Top.jsx';
import { CardStacks } from '../components/CardStacks/CardStacks.jsx';
import { Button } from '../components/Button/Button.jsx';

export const HomePage = () => {
  return (
    <div className="body-container">
      {/* Rendera Top-komponenten med specifika prop-värden för titel och aktivt kort. */}
      <Top title={'E-Wallet'} activeCard={'Active Card'} />
      {/* Rendera CardStacks-komponenten för att visa korthögar eller kortsamlingar. */}
      <CardStacks />
      {/* Skapa en länk till '/addCard' som innehåller en knapp (Button-komponent) för att lägga till ett nytt kort. */}
      <Link to="/addCardPage">
        <Button>Add A New Card</Button>
      </Link>
    </div>
  );
};
