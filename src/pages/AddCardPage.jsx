import { Link } from 'react-router-dom';

export const AddCardPage = () =>  {
  return (
    <>
      <h1>AddCard</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
}

