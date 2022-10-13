import React from 'react'
import { useCurrencyConvertContext } from '../../context/CurrencyConvertContext'

const Header = () => {

  const {amount, fromCurrency, toCurrency} = useCurrencyConvertContext()

  return (
    <header className='d-flex'>
      <h5 
        className='mx-auto mx-lg-auto mt-lg-5 text-white text-center p-5 fs-4'
      >
        Convert {amount} {fromCurrency.name} to {toCurrency.name} - {fromCurrency.value} to {toCurrency.value}
      </h5>
    </header>
  )
}

export default Header