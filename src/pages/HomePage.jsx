import { Link } from 'react-router-dom';
import Card from '../components/Card';

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Card />
      <Link to="/addCard">
        <button>Go to AddCard</button>
      </Link>
    </>
  );
}

export default HomePage;
