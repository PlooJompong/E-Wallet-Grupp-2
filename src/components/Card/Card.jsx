/* eslint-disable react/prop-types */
import "./CardStyles.css";

export const Card = ({
  cardColor,
  blipp,
  chip,
  vendor,
  cardNumber,
  name,
  dates,
  onClick,
  index,
}) => {
  return (
    <div className={`card ${cardColor}`} onClick={onClick}>
      <section className="icons">
        <div className="icons-flex-dir">
          <img className="blipp" src={blipp} alt="blipp icon" />
          <img className="chip" src={chip} alt="chip icon" />
        </div>
        <p>index: {index}</p>
        <img className="vendor" src={vendor} alt="vendor icon" />
      </section>
      <p className="card-number">{cardNumber}</p>
      <section className="card-info-section">
        <div className="card-holder">
          <p className="cardholder-name">cardholder name</p>
          <p className="card-name">{name}</p>
        </div>
        <div className="card-dates">
          <p className="valid-date">valid thru</p>
          <p className="dates"> {dates} </p>
        </div>
      </section>
    </div>
  );
};
