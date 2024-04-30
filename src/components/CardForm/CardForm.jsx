/* eslint-disable no-unused-vars */
// Importera nödvändiga komponenter och resurser för CardForm
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { CARD_DETAILS, updateCardDetails } from '../../data/cardDetails';
import './CardFormStyles.css';
import ChipDark from '../../assets/chip_dark.png';
import BlippDark from '../../assets/blipp_dark.png';
import BitcoinBank from '../../assets/bitcoin.png';

// Skapa och exportera CardForm-komponenten
export const CardForm = () => {
  const [number, setNumber] = useState(''); // Skapa state för kortnummer och funktion för att uppdatera det
  const [name, setName] = useState(''); // Skapa state för namn och funktion för att uppdatera det
  const [date, setDate] = useState(''); // Skapa state för datum och funktion för att uppdatera det
  const [vendor, setVendor] = useState(0); // Skapa state för leverantör och funktion för att uppdatera det
  const [ccv, setCcv] = useState(''); // Skapa state för CCV och funktion för att uppdatera det
  const [isValid, setIsValid] = useState(false);

  // Funktion för att hantera val av vendor
  function handleVendor(e) {
    // Uppdatera vendorstaten baserat på det valda alternativet i dropdown menyn
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

  // Funktion för att hantera inmatning
  const handleCardNumber = (e) => {
    // Ta bort alla icke-siffer-tecken
    const number = e.target.value.replace(/\D/g, '');
    // Lägg till mellanslag varje 4:e siffra
    const formattedValue = number.replace(/(\d{4})(?=\d)/g, '$1 ');
    setNumber(formattedValue);
  };

    // Funktion för att hantera inmatning av namn på kortinnehavare
  const handleName = (e) => {
    const name = e.target.value;
    // Ta bort alla tecken som inte är bokstäver eller mellanslag.
    const formattedName = name.replace(/[^a-zA-Z\s]/g, '');
    setName(formattedName);
  };
  // Funktion för att hantera inmatning av kortets utgångsdatum (MM/YY)
  const handleDate = (e) => {
    const inputValue = e.target.value;
    const lastChar = inputValue[inputValue.length - 1];

    if (e.keyCode === 8) {
      // Om användaren trycker på backspace
      if (inputValue.length === 4) {
        // Om längden är 4, ta bort allt
        setDate('');
      } else if (lastChar === '/') {
        // Om den sista tecknet är en slash, ta bort alla tecken utom slashen
        setDate(inputValue.substring(0, inputValue.length - 1));
      }
      return;
    }

    // Ta bort alla icke-siffer-tecken i inmatningen
    let date = inputValue.replace(/\D/g, '');
    // Kontrollera giltigheten av månaden (1-12)
    const month = date.substring(0, 2);
    if (parseInt(month, 10) > 12) {
      date = '12' + date.substring(2);
    } else if (month.length === 2 && parseInt(month, 10) < 1) {
      date = '01' + date.substring(2);
    }

    if (date.length > 2) {
      // Om längden är större än 2, lägg till slash efter de två första siffrorna
      setDate(`${date.substring(0, 2)}/${date.substring(2)}`);
    } else {
      // Annars, visa bara inmatningen
      setDate(date);
    }
  };

  // Funktion för att hantera inmatning av CCV (kortkontrollsiffror)
  const handleCCV = (e) => {
    const inputValue = e.target.value;
    // Ta bort alla icke-siffer-tecken och begränsa till maximalt 3 tecken
    const filteredValue = inputValue.replace(/\D/g, '').substring(0, 3);

    setCcv(filteredValue);
  };

  // Funktion för att hantera tillägg av kort
  const handleAddCard = () => {
  // Kontrollera om alla obligatoriska fält är ifyllda för att tillåta tillägg av kort
    if (number.length === 19 && name !== '' && date !== '') {
      // Hämta standardkortuppgifter för den valda leverantören
      const defaultCard = CARD_DETAILS[vendor];

      // Skapa nya kortdata baserat på användarens inmatning
      const newCardData = {
        cardColor: defaultCard.cardColor,
        cardNumber: number,
        chip: defaultCard.chip,
        blipp: defaultCard.blipp,
        vendor: defaultCard.vendor,
        name: name,
        dates: date,
      };

      // Uppdatera kortdetaljerna med den nya kortdatan
      updateCardDetails(newCardData);
      // Sätt isValid till true eftersom kortuppgifterna är giltiga
      setIsValid(true);
    } else {
      // Om något av de obligatoriska fälten saknas, logga ett meddelande till konsolen
      console.log('Please fill out all fields');
      // Sätt isValid till false eftersom kortuppgifterna inte är giltiga
      setIsValid(false);
    }
  };

  // Returnera JSX som representerar komponenten för att lägga till kort
  return (
    <>
     {/* Rendera en Card-komponent med dynamiska eller statiska kortdetaljer */}
      <Card
        cardColor={'greyContainer'}
        blipp={BlippDark}
        chip={ChipDark}
        vendor={BitcoinBank}
        cardNumber={number ? number : 'XXXX XXXX XXXX XXXX'}
        name={name ? name : 'Firstname Lastname'}
        dates={date ? date : 'MM/YY'}
      />

      {/* Rendera ett Form-komponent för att hantera inmatning av kortuppgifter */}
      <Form className="card-form" action={isValid ? '/' : '/addCardPage'}>
      {/* Input-fält för kortnummer med begränsning av längd och format */}
        <label>card number</label>
        <input
          type="text"
          maxLength={19}
          value={number}
          onChange={handleCardNumber}
          required
        />

        {/* Input-fält för kortinnehavarens namn med begränsning av längd och format */}
        <label>cardholder name</label>
        <input
          type="text"
          value={name}
          onChange={handleName}
          maxLength={23}
          required
        />

        {/* Div för att organisera fält för utgångsdatum och CCV */}
        <div className="card-big">
        {/* Input-fält för utgångsdatum (MM/YY) med begränsning av längd och format */}
          <div className="card-small">
            <label>valid thru</label>
            <input
              type="text"
              value={date}
              onChange={handleDate}
              maxLength={5}
              required
            />
          </div>

          {/* Input-fält för CCV (kortkontrollsiffror) med begränsning av längd och format */}
          <div className="card-small">
            <label>ccv</label>
            <input
              type="text"
              value={ccv}
              onChange={handleCCV}
              maxLength={3}
              required
            />
          </div>
        </div>

        {/* Dropdown-lista för att välja kortleverantör */}
        <label>vendor</label>
        <select defaultValue={vendor} onChange={handleVendor} required>
          <option value="0">Bitcoin</option>
          <option value="1">Ninja</option>
          <option value="2">Blockchain</option>
          <option value="3">Evil</option>
        </select>

        {/* Knapp för att lägga till kort med onClick-händelse som anropar handleAddCard-funktionen */}
        <Button className="btn btn-dark" type="submit" onClick={handleAddCard}>
          Add Card
        </Button>
      </Form>
    </>
  );
};
