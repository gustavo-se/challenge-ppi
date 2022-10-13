import React from 'react'
import { useCurrencyConvertContext } from '../../context/CurrencyConvertContext'
import Select from './Select'

const Inputs = () => {

  const {
    amount,
    handleChangeAmount, 
    fromCurrency,
    toCurrency, 
    handleChangeFromCurrency,
    handleChangeToCurrency
  } = useCurrencyConvertContext()

  //InterChanges input values from-to
  const handleClick = () => {
    handleChangeFromCurrency(toCurrency.value)
    handleChangeToCurrency(fromCurrency.value)
  }

  return (
    <div className='col-12 col-lg-6 row align-items-center justify-content-center'>
      <div className='col-12 col-lg-8'>
        <div className='my-4 col-12 col-lg-10'>
          <label htmlFor='amount' className='form-label'>Amount</label>
          <input 
            className='form-control text-end' 
            id='amount'
            type='number'
            min='1'
            value={amount}
            onChange={(e) => handleChangeAmount(e.target.value)}
          />
        </div>
        <div className='my-4 row align-items-end'>
          <div className='col-12 col-lg-10'>
            <Select 
              label='From' 
              value={fromCurrency}
              setValue={handleChangeFromCurrency}
            />
          </div>
          <div className='col mt-5 mt-lg-0'>
            <button type='buton' onClick={() => handleClick()}>
              <img src='./img.svg' alt='change'/>
            </button>
          </div>
        </div>
        <div className='my-4 col-12 col-lg-10'>
          <Select 
            label='To' 
            value={toCurrency}
            setValue={handleChangeToCurrency}
          />
        </div>
      </div>
    </div>
  )
}

export default Inputs