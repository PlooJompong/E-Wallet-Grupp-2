import { Link } from "react-router-dom";
import { Top } from "../components/Top";
import { Card } from "../components/Card/Card.jsx";

export const HomePage = () => {
  return (
    <>
      <Top title={"E-Wallet"} active={"Active Card"} />
      <Card
        cardColor={"orangeContainer"}
        cardNumber={"1234 5678 9101 1123"}
        chip={"chip"}
        blipp={"blipp_dark"}
        vendor={"bitcoin"}
        name={"Rachel Richter"}
        dates={"12/24"}
      />

      <Card
        cardColor={"blackContainer"}
        cardNumber={"8502 2394 9603 6920"}
        chip={"chip"}
        blipp={"blipp_light"}
        vendor={"ninja"}
        name={"Rachel Richter"}
        dates={"12/24"}
      />

      <Card
        cardColor={"purpleContainer"}
        cardNumber={"4325 0583 5891 5892"}
        chip={"chip"}
        blipp={"blipp_dark"}
        vendor={"chain"}
        name={"Rachel Richter"}
        dates={"12/24"}
      />

      <Card
        cardColor={"redContainer"}
        cardNumber={"2904 2349 5003 0928"}
        chip={"chip"}
        blipp={"blipp_dark"}
        vendor={"evil"}
        name={"Rachel Richter"}
        dates={"12/24"}
      />
      <Link to="/addCard">
        <button>Go to AddCard</button>
      </Link>
    </>
  );
};
