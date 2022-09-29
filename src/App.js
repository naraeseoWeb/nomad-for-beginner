import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoinPrice, setSelectedCoinPrice] = useState('');
  const [budget, setBudget] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const selectChangeHandler = (e) => {
    setSelectedCoinPrice(e.target.value);
    console.log(selectedCoinPrice, 'e');
  };
  // console.log(selectedCoinPrice, 'selectedCoinPrice');

  const inputChangeHandler = (e) => {
    setBudget(e.target.value);
  };

  const convertHandler = () => {
    setResult((budget / selectedCoinPrice).toFixed(2));
    console.log(selectedCoinPrice, 'selectedCoinPrice');
    console.log(budget, 'budget');
  };

  // console.log(budget, 'budget');
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectChangeHandler}>
          <option>Select Coins</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(2)}
            </option>
          ))}
        </select>
      )}
      <div>
        <h3>Converter</h3>
        <form onSubmit={submitHandler}>
          <input
            type='number'
            placeholder='Budget'
            onChange={inputChangeHandler}
          />
          <button onClick={convertHandler}>Convert</button>
        </form>
        <p>Budget: $ {budget}</p>
        <p>Numbers of coin: {result}</p>
      </div>
    </div>
  );
}

export default App;
