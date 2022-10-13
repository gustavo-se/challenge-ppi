import React from 'react'
import { useCurrencyConvertContext } from '../../context/CurrencyConvertContext'

const Select = ({label, value, setValue}) => {

  const { currencies } = useCurrencyConvertContext()

  return (
    <>
      <label htmlFor={label} className='form-label'>{label}</label>
      <select className="form-select" id={label} value={value.value} onChange={e => setValue(e.target.value)}>
        {
          currencies.map(c => (
            <option key={c.value } value={c.value}>{c.value} - {c.name}</option>
          ))
        }
      </select>
    </>
  )
}

export default Select