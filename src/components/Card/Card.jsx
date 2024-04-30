/* eslint-disable react/prop-types */
import './CardStyles.css';

// Definiera en funktionell komponent Card med props destrukturerade
export const Card = ({
  cardColor,
  blipp,
  chip,
  vendor,
  cardNumber,
  name,
  dates,
  onClick,
}) => {
  return (
    // Returnera ett <div>-element med klasser baserat på cardColor och klick-hanterare (onClick)
    <div className={`card ${cardColor}`} onClick={onClick}>
      {/* Avsnitt med ikoner för blipp, chip och leverantör */}
      <section className="icons">
        <div className="icons-flex-dir">
          <img className="blipp" src={blipp} alt="blipp icon" />
          <img className="chip" src={chip} alt="chip icon" />
        </div>
        {/* // Text som visar indexet på kortet */}
        <img className="vendor" src={vendor} alt="vendor icon" />{' '}
        {/* Bild för kortets leverantör */}
      </section>
      <p className="card-number">{cardNumber}</p>
      {/* Avsnitt för kortinformation med kortinnehavarens namn och giltighetsdatum */}
      <section className="card-info-section">
        <div className="card-holder">
          <p className="cardholder-name">cardholder name</p>
          <p className="card-name">{name}</p>
        </div>
        {/* Avsnitt för giltighetsdatum */}
        <div className="card-dates">
          <p className="valid-date">valid thru</p>
          <p className="dates"> {dates} </p>
        </div>
      </section>
    </div>
  );
};
