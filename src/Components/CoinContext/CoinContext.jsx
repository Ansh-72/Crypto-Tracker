import { createContext,  useEffect, useState } from "react";


export const CoinContext = createContext()

const ContextProvider = (props) => {
  const [Coins, SetCoins] = useState([])
  const [Currency, SetCurrency] = useState({
    name: "USD",
    symbol:"$"
  })

  const FetchCoins = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': '		CG-t5fgyYpMXguR3WCMkAoVfvKb'
      }
    };

    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${Currency.name}
`, options)
      .then(res => res.json())
      .then(res => SetCoins(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    FetchCoins();
  }, [Currency])

  const ContextValue = {
    Currency, SetCurrency, Coins
  }

  return (
    <CoinContext.Provider value={ContextValue}>
      {props.children}
    </CoinContext.Provider>
  )
}
export default ContextProvider