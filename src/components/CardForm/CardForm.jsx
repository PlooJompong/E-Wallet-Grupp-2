/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { CARD_DETAILS, updateCardDetails } from '../../data/cardDetails';
import './CardFormStyles.css';
import ChipDark from '../../assets/chip_dark.png';
import BlippDark from '../../assets/blipp_dark.png';
import BitcoinBank from '../../assets/bitcoin.png';

export const CardForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [vendor, setVendor] = useState(0);

  function handleVendor(e) {
    if (e.target.value === '0') {
      setVendor(0);
    } else if (e.target.value === '1') {
      setVendor(1);
    } else if (e.target.value === '2') {
      setVendor(2);
    } else if (e.target.value === '3') {
      setVendor(3);
    }
  }

  const handleAddCard = () => {
    // if (number.length !== 19) {
    // console.log('Hello');
    // } else {
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
    // }
  };

  // Funktion för att hantera inmatning
  const handleCardNumber = (e) => {
    // Ta bort alla icke-siffer-tecken
    const number = e.target.value.replace(/\D/g, '');

    // Lägg till mellanslag varje 4:e siffra
    const formattedValue = number.replace(/(\d{4})(?=\d)/g, '$1 ');

    setNumber(formattedValue);
  };

  const handleName = (e) => {
    const name = e.target.value;
    // Ta bort alla tecken som inte är bokstäver eller mellanslag.
    const formattedName = name.replace(/[^a-zA-Z\s]/g, '');

    setName(formattedName);
  };

  const handleDate = (e) => {
    const date = e.target.value;
    const formattedDate = date.replace(/(\d{4})(?=\d)/g, '$1 ');

    setDate(formattedDate);
  };

  return (
    <>
      <Card
        cardColor={'greyContainer'}
        blipp={BlippDark}
        chip={ChipDark}
        vendor={BitcoinBank}
        cardNumber={number ? number : 'XXXX XXXX XXXX XXXX'}
        name={name ? name : 'Firstname Lastname'}
        dates={date ? date : 'MM/YY'}
      />

      <form className="card-form">
        <label>card number</label>
        <input
          type="text"
          maxLength={19}
          value={number}
          onChange={handleCardNumber}
        />

        <label>cardholder name</label>
        <input
          type="text"
          value={name}
          // onChange={(e) => setName(e.target.value)}
          onChange={handleName}
          maxLength={23}
          required
        />

        <div className="card-big">
          <div className="card-small">
            <label>valid thru</label>
            <input
              type="text"
              // onChange={handleDate}
              value={date}
              // onChange={(e) => setDate(e.target.value)}
              onChange={handleDate}
              maxLength={5}
              required
            />
          </div>

          <div className="card-small">
            <label>ccv</label>
            <input type="text" maxLength={3} required />
          </div>
        </div>

        <label>vendor</label>
        <select defaultValue={vendor} onChange={handleVendor} required>
          <option value="0">Bitcoin</option>
          <option value="1">Ninja</option>
          <option value="2">Blockchain</option>
          <option value="3">Evil</option>
        </select>
        {/* <input type="submit" name="submit" id="submit" /> */}
      </form>

      {/* <Link to="/" onClick={handleAddCard}> */}
      <Link to="/">
        <Button className="btn btn-dark" onClick={handleAddCard}>
          Add Card
        </Button>
      </Link>
    </>
  );
};

// Regex för space och nummer
// ^[0-9\s]+$

// Amex Card: ^3[47][0-9]{13}$
// BCGlobal: ^(6541|6556)[0-9]{12}$
// Carte Blanche Card: ^389[0-9]{11}$
// Diners Club Card: ^3(?:0[0-5]|[68][0-9])[0-9]{11}$
// Discover Card: ^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$
// Insta Payment Card: ^63[7-9][0-9]{13}$
// JCB Card: ^(?:2131|1800|35\d{3})\d{11}$
// KoreanLocalCard: ^9[0-9]{15}$
// Laser Card: ^(6304|6706|6709|6771)[0-9]{12,15}$
// Maestro Card: ^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$
// Mastercard: ^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$
// Solo Card: ^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$
// Switch Card: ^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$
// Union Pay Card: ^(62[0-9]{14,17})$
// Visa Card: ^4[0-9]{12}(?:[0-9]{3})?$
// Visa Master Card: ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$
