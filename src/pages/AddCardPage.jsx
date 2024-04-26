// import { Link } from 'react-router-dom';
import { Top } from '../components/Top/Top.jsx';
// import { Button } from '../components/Button/Button.jsx';
import { Card } from '../components/Card/Card.jsx';
import { CardForm } from '../components/CardForm/CardForm.jsx';
import ChipDark from '../assets/chip_dark.png';
import BlippDark from '../assets/blipp_dark.png';
import BitcoinBank from '../assets/bitcoin.png';

export const AddCardPage = () => {
  return (
    <>
      <Top title={'Add A New  Bank Card'} activeCard={'New Card'} />
      <Card
        cardColor={'greyContainer'}
        blipp={BlippDark}
        chip={ChipDark}
        vendor={BitcoinBank}
        cardNumber={'XXXX XXXX XXXX XXXX'}
        name={'FIRSTNAME LASTNAME'}
        dates={'MM/YY'}
      />
      <CardForm />
      {/* <Link to="/">
        <Button className="btn btn-dark">Add Card</Button>
      </Link> */}
    </>
  );
};
