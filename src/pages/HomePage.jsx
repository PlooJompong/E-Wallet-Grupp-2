/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { Top } from '../components/Top.jsx';
import { CardStacks } from '../components/CardStacks/CardStacks.jsx';
import { CARD_DETAILS } from '../data/cardDetails.js';

export const HomePage = () => {
  return (
    <>
      <Top title={'E-Wallet'} activeCard={'Active Card'} />

      <CardStacks cardDetails={CARD_DETAILS} />

      <Link to="/addCard">
        <button>Go to AddCard</button>
      </Link>
    </>
  );
};
