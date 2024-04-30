// Importera CSS-stilen för den här sidan från index.css i överordnade mappen.
import { Top } from '../components/Top/Top.jsx';
import { CardForm } from '../components/CardForm/CardForm.jsx';
import '../index.css';

export const AddCardPage = () => {
  return (
    // Returnera JSX för att rendera innehållet på sidan.
    <div className="body-container">
      {/* Rendera Top-komponenten med specifika prop-värden för titel och aktivt kort. */}
      <Top title={'Add A New  Bank Card'} activeCard={'New Card'} />
      {/* Rendera CardForm-komponenten för att visa ett formulär för att lägga till kort. */}
      <CardForm />
    </div>
  );
};
