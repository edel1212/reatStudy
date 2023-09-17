import { useState, useEffect } from "react";

function CoinApp() {
  const [looad, setLoading] = useState(true);
  // ✅ 초기값을 설정해주지 않으면 `<h2>The Coing ({coins.length}) </h2>`에러 발생 초기값 설정해주는 습관을 갖자!
  //     - 이유 : 초기값 설정을 해주지 않으면 undefined 상태 이기 때문이다.
  const [coins, setCoins] = useState([]);

  const [money, setMoney] = useState(0);
  const onChangeMoney = (e) => {
    const val = e.target.value;
    if (!val) return;
    setMoney(val);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((result) => setCoins(result))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [coins]);
  return (
    <div>
      <h2>The Coing {looad ? "" : `(${coins.length}개)`} </h2>
      <label form="money">USD:</label>
      <input
        type="number"
        className="money"
        value={money}
        onChange={onChangeMoney}
      />
      <hr />
      {/* 👉 로딩 유무에 따라 */}
      {looad ? (
        // True
        <strong>Loading...</strong>
      ) : (
        //False
        <select>
          {coins.map((item, idx) => (
            <option key={idx}>
              {item.id} ({item.symbol}) : ${item.quotes.USD.price} :::::
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

// Export 시켜줌
export default CoinApp;
