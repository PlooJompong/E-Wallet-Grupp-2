import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    // Returnera JSX för att rendera innehållet på sidan för 404 Not Found.
    <>
      {/* Visa texten '404 Not Found' inuti en div-element. */}
      <div>404 Not Found</div>
      {/* Skapa en länk till startsidan ('/') som innehåller en knapp för att navigera tillbaka till startsidan. */}
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
};
