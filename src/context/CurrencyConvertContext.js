import React, {createContext, useContext, useState, useEffect} from "react";
import { adapterCurrencies } from "../adapters/adapterCurrencies";
import { getAllCurrencies, getBaseRate } from "../utils/service";

const CurrencyConvertContext = createContext();

export function useCurrencyConvertContext() {
    return useContext(CurrencyConvertContext);
}

export function CurrencyConvertContextProvider({children}) {

  const [amount, setAmount] = useState(1)
  const [currencies, setCurrencies] = useState([])
  const [fromCurrency, setFromCurrency] = useState({value: 'USD', name: 'US Dollar', symbol: '$'})
  const [toCurrency, setToCurrency] = useState({value: 'EUR', name: 'Euro', symbol: '€'})
  const [fromBaseRate, setFromBaseRate] = useState()
  const [toBaseRate, setToBaseRate] = useState()
  const [loadingFrom, setLoadingFrom] = useState(true)
  const [loadingTo, setLoadingTo] = useState(true)

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await getAllCurrencies()
        const currenciesAdapted = adapterCurrencies(response)
        setCurrencies(currenciesAdapted)
      } catch (error) {
        setCurrencies([])
      }
    }
    getCurrencies()
  }, [])

  useEffect(() => {
    setLoadingFrom(true)
    const getRate = async () => {
      try {
        const response = await getBaseRate(fromCurrency.value)
        setFromBaseRate(response)
        setLoadingFrom(false)
      } catch (error) {
        setFromBaseRate(undefined)
        setLoadingFrom(false)
      }
    }
    getRate()
  }, [fromCurrency])

  useEffect(() => {
    setLoadingTo(true)
    const getRate = async () => {
      try {
        const response = await getBaseRate(toCurrency.value)
        setToBaseRate(response)
        setLoadingTo(false)
      } catch (error) {
        setToBaseRate(undefined)
        setLoadingTo(false)
      }
    }
    getRate()
  }, [toCurrency])
  
  const handleChangeFromCurrency = (value) => {
    const findedCurrency = currencies.find(c => value === c.value)
    setFromCurrency(findedCurrency)
  }

  const handleChangeToCurrency = (value) => {
    const findCurrency = currencies.find(c => value === c.value)
    setToCurrency(findCurrency)
  }

  const handleChangeAmount = (value) => {
   if(value < 0){
      return
    }else{
      setAmount(value)
    }
  }

  const value = {
    currencies,
    amount,
    fromCurrency,
    toCurrency,
    handleChangeAmount,
    handleChangeFromCurrency,
    handleChangeToCurrency,
    fromBaseRate,
    toBaseRate,
    loadingFrom,
    loadingTo
  };

  return <CurrencyConvertContext.Provider value={value}>{children}</CurrencyConvertContext.Provider>;
}