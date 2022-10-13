import React from 'react'
import { useCurrencyConvertContext } from '../../context/CurrencyConvertContext'
import ValueCurrency from './ValueCurrency'

const Results = () => {

  const {
    amount, 
    fromCurrency, 
    toCurrency, 
    fromBaseRate,
    toBaseRate, 
    loadingFrom,
    loadingTo
  } = useCurrencyConvertContext()

  // Format to float with 4 digits 
  const formatNumber = (number) => {
    const numberFloat = Intl.NumberFormat("de-DE", { maximumFractionDigits: 4}).format(number)
    return ` ${numberFloat} `
  }

  const calculatedCurrency = () => {
    const calculate = amount * fromBaseRate.rates[toCurrency.value]
    return formatNumber(calculate)
  }

  return (
    <div className='col-12 col-lg-6 mx-auto d-flex justify-content-around flex-column results' >
      <div>
        <p className='fs-5 fw-semibold text-muted'>{amount} {fromCurrency.name} =</p>
        <p className='fs-3 fw-semibold'>
          {
            loadingFrom ? <span className='spinner-border text-primary' role='status'></span> 
            : !fromBaseRate ? 'Whitout information'
            :
            calculatedCurrency() + toCurrency.name
          }
        </p>
      </div>
      <div>
        <ValueCurrency 
          to={toCurrency}
          from={fromCurrency}
          loading={loadingTo}
          baseRate={toBaseRate}
          formatNumber={formatNumber}
        />
        <ValueCurrency 
          to={fromCurrency}
          from={toCurrency}
          loading={loadingFrom}
          baseRate={fromBaseRate}
          formatNumber={formatNumber}
        />
      </div>
      <div>
        <div className="alert alert-warning col-12 col-lg-10" role="alert">
          <img src='./alert.svg' alt='alert-icon' />
          <small className='ms-2'>We use the market rate. This is for informational purposes only.</small>
        </div>
      </div>
    </div>
  )
}

export default Results