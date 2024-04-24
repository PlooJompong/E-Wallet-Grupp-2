import { Link } from 'react-router-dom';
import { Top } from '../components/Top.jsx';

export const AddCardPage = () => {
  return (
    <>
      <Top title={'Add A New  Bank Card'} activeCard={'New Card'} />
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
};
