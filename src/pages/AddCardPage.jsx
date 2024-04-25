import { Link } from 'react-router-dom';
import { Top } from '../components/Top/Top.jsx';
import { Button } from '../components/Button/Button.jsx';
import { Card } from '../components/Card/Card.jsx';
import { CardForm } from '../components/CardForm/CardForm.jsx';

export const AddCardPage = () => {
  return (
    <>
      <Top title={'Add A New  Bank Card'} activeCard={'New Card'} />
      <Card />
      <CardForm />
      <Link to="/">
        <Button className="btn btn-dark">Add Card</Button>
      </Link>
    </>
  );
};
