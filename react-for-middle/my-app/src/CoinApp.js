import React, { useState, useEffect } from "react";

function CoinApp() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);

  const onChangeMoney = (e) => {
    const val = e.target.value;
    if (!val) return;
    setMoney(val);
  };

  const calculateCoinsForMoney = (usdPrice) => {
    if (usdPrice === 0 || money === 0) return 0;
    return money / usdPrice;
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((result) => setCoins(result))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [money]);

  return (
    <div>
      <h2>The Coing {loading ? "" : `(${coins.length}개)`}</h2>
      <label htmlFor="money">USD:</label>
      <input
        type="number"
        id="money"
        className="money"
        value={money}
        onChange={onChangeMoney}
      />
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((item, idx) => (
            <option key={idx}>
              {item.id} ({item.symbol}) : ${item.quotes.USD.price} :::::{" "}
              {calculateCoinsForMoney(item.quotes.USD.price)} coins
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CoinApp;
