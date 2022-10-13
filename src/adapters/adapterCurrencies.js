// Adapting the request currencies to select component
export const adapterCurrencies = (currencies) => {
  const keys = Object.keys(currencies)
  const options = keys.map((key) => {
    return {
      value: key,
      name: currencies[key].name,
      symbol: currencies[key].symbol
    }
  })
  return options
}