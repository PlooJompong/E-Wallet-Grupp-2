/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../Button/Button";
import { CARD_DETAILS } from "../../data/cardDetails";
import "./CardFormStyles.css";
import { updateCardDetails } from "../../data/cardDetails";

export const CardForm = () => {
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [vendor, setVendor] = useState(0);

  const handleCardnumber = (e) => {
    const number = e.target.value;
    setNumber(number);
    // console.log(number);
  };

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    // console.log(name);
  };

  const handleDate = (e) => {
    const date = e.target.value;
    setDate(date);
    // console.log(date);
  };

  function handleVendor(e) {
    if (e.target.value === "0") {
      setVendor(0);
    } else if (e.target.value === "1") {
      setVendor(1);
    } else if (e.target.value === "2") {
      setVendor(2);
    } else if (e.target.value === "3") {
      setVendor(3);
    }
  }

  const handleAddCard = () => {
    const defaultCard = CARD_DETAILS[vendor];

    const newCardData = {
      cardColor: defaultCard.cardColor,
      cardNumber: number,
      chip: defaultCard.chip,
      blipp: defaultCard.blipp,
      vendor: defaultCard.vendor,
      name: name,
      dates: date,
    };

    updateCardDetails(newCardData);
  };

  return (
    <>
      <form className="card-form">
        <label>card number</label>
        <input type="number" onChange={handleCardnumber} required />

        <label>cardholder name</label>
        <input
          type="text"
          placeholder="Firstname Lastname"
          onChange={handleName}
          required
        />

        <div className="card-big">
          <div className="card-small">
            <label>valid thru</label>
            <input type="text" onChange={handleDate} required />
          </div>

          <div className="card-small">
            <label>ccv</label>
            <input type="number" required />
          </div>
        </div>

        <label>vendor</label>
        <select defaultValue={vendor} onChange={handleVendor} required>
          <option value="0">Bitcoin</option>
          <option value="1">Ninja</option>
          <option value="2">Blockchain</option>
          <option value="3">Evil</option>
        </select>
      </form>

      <Link to="/" onClick={handleAddCard}>
        <Button className="btn btn-dark">Add Card</Button>
      </Link>
    </>
  );
};
