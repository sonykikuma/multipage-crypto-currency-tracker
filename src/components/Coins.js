import React from "react";
import Coinitem from "./Coinitem";
import "./Coins.css";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">volume</p>

          <p className="hide-mobile">Mkt cap</p>
        </div>
        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <Coinitem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
