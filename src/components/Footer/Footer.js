import moment from 'moment/moment'
import React from 'react'
import { useCurrencyConvertContext } from '../../context/CurrencyConvertContext'

const Footer = () => {

  const { fromCurrency, toCurrency, fromBaseRate} = useCurrencyConvertContext()

  return (
    <div className='mx-auto py-3 text-muted footer' style={{width: '95%'}}>
      <small>Conversion from {fromCurrency.name} to {toCurrency.name} - 
      {
        fromBaseRate ? 
        ` Last updated: ${moment(fromBaseRate.date).format('D MMM YYYY')}`
        :
        '-'
      }
      </small>
    </div>
  )
}

export default Footer