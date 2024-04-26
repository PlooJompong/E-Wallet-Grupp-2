/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { CARD_DETAILS } from '../../data/cardDetails';
import './CardFormStyles.css';

export const CardForm = () => {
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [ccv, setCcv] = useState();
  const [vendor, setVendor] = useState('');

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
    const newCard = {
      cardColor: 'orangeContainer', // You might want to generate this dynamically
      cardNumber: number,
      // chip: Chip, // Assuming Chip is imported from somewhere
      // blipp: BlippDark, // Assuming BlippDark is imported from somewhere
      vendor: vendor,
      name: name,
      dates: date,
    };
    // Create a new array by spreading the existing CARD_DETAILS and adding the new card
    const updatedCardDetails = [...CARD_DETAILS, newCard];
    // Update the CARD_DETAILS array
    // You may want to use state management like Redux or Context API for this in a real application
    // console.log(updatedCardDetails);
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

      <Link to="/">
        <Button className="btn btn-dark" onClick={handleAddCard}>
          Add Card
        </Button>
      </Link>
    </>
  );
};
