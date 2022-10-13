import React from 'react'

const ValueCurrency = ({to, from, loading, baseRate, formatNumber}) => {
  return (
    <span className='fs-6 fw-semibold text-muted d-block'>
      1 {to.symbol} = 
      {
        loading ? <span className='spinner-border spinner-border-sm text-primary' role='status'></span> 
        :
        !baseRate ? <span className='fs-6 fw-semibold text-muted d-block'>Whitout information</span>
        :
        formatNumber(baseRate.rates[from.value])
      }
        {from.symbol}
    </span>
  )
}

export default ValueCurrency