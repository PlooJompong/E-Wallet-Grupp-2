/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { Top } from '../components/Top.jsx';
import { CardStacks } from '../components/CardStacks/CardStacks.jsx';

export const HomePage = () => {
  return (
    <>
      <Top title={'E-Wallet'} activeCard={'Active Card'} />

      <CardStacks />

      <Link to="/addCard">
        <button>Go to AddCard</button>
      </Link>
    </>
  );
};
