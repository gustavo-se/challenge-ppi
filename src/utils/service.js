import axios from 'axios'

const VAT_URLS = {
  GET_CURRENCIES : 'https://api.vatcomply.com/currencies',
  GET_RATES: (currency) => `https://api.vatcomply.com/rates?base=${currency}`
}

export const getAllCurrencies = async () => {
  const response = await axios.get(VAT_URLS.GET_CURRENCIES)
  return response.data
}

export const getBaseRate = async (currency) => {
  const response = await axios.get(VAT_URLS.GET_RATES(currency))
  return response.data
}