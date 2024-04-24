import "./CardStyle.css";

export const Card = ({
  cardColor,
  blipp,
  chip,
  vendor,
  cardNumber,
  name,
  dates,
}) => {
  return (
    <div className={`card ${cardColor}`}>
      <div className="icons">
        <div className="icons-flex-dir">
          <img
            className="blipp"
            src={`../../public/${blipp}.png`}
            alt="blipp icon"
          />
          <img
            className="chip"
            src={`../../public/${chip}.png`}
            alt="chip icon"
          />
        </div>
        <img
          className="vendor"
          src={`../../public/${vendor}.png`}
          alt="vendor icon"
        />
      </div>

      <p className="card-number">{cardNumber}</p>

      <section className="card-section">
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
