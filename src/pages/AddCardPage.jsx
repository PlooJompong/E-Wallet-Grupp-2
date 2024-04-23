import { Link } from 'react-router-dom';
import Card from '../components/Card';

function AddCardPage() {
  return (
    <>
      <h1>AddCard</h1>
      <Card />
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
}

export default AddCardPage;
