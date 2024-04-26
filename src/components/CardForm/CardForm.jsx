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
  const [ccv, setCcv] = useState();
  const [vendor, setVendor] = useState("");

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

  const handleCcv = (e) => {
    const ccv = e.target.value;
    setCcv(ccv);
    // console.log(ccv);
  };

  const handleVendor = (e) => {
    setVendor(e.target.value);
    console.log(vendor);
  };

  const handleAddCard = () => {
    // Skapa ett nytt kortobjekt med den insamlade informationen från formuläret
    const newCardData = {
      cardColor: "newCard", // Fyll i önskade värden härifrån (t.ex. via state)
      cardNumber: number,
      chip: "", // Fyll i önskade värden härifrån (t.ex. via state)
      blipp: "", // Fyll i önskade värden härifrån (t.ex. via state)
      vendor: "", // Fyll i önskade värden härifrån (t.ex. via state)
      name: name,
      dates: date,
    };

    // Anropa updateCardDetails-funktionen för att lägga till det nya kortet
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
            <input type="number" onChange={handleCcv} required />
          </div>
        </div>

        <label>vendor</label>
        <select defaultValue={vendor} onChange={handleVendor} required>
          <option value="" disabled hidden></option>
          <option value="bitcoin_bank">Bitcoin</option>
          <option value="ninja_bank">Ninja</option>
          <option value="block_chain">Blockchain</option>
          <option value="evil_corp">Evil</option>
        </select>
      </form>

      <Link to="/" onClick={handleAddCard}>
        <Button className="btn btn-dark">Add Card</Button>
      </Link>
    </>
  );
};
