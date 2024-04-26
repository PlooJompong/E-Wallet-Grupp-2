/* eslint-disable no-unused-vars */
import "../index.css";
import { Link } from "react-router-dom";
import { Top } from "../components/Top/Top.jsx";
import { CardStacks } from "../components/CardStacks/CardStacks.jsx";
import { Button } from "../components/Button/Button.jsx";

export const HomePage = () => {
  return (
    <div className="body-container">
      <Top title={"E-Wallet"} activeCard={"Active Card"} />

      <CardStacks />

      <Link to="/addCard">
        <Button>Add A New Card</Button>
      </Link>
    </div>
  );
};
