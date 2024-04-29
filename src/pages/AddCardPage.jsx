import '../index.css';
import { Top } from '../components/Top/Top.jsx';
import { CardForm } from '../components/CardForm/CardForm.jsx';

export const AddCardPage = () => {
  return (
    <div className="body-container">
      <Top title={'Add A New  Bank Card'} activeCard={'New Card'} />
      <CardForm />
    </div>
  );
};
