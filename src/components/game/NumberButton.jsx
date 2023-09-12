import React from 'react'
import "./NumberButton.css"
import { useState } from 'react'

function NumberButton({number}) {

  const [ value, setValue ] = useState(null)

  return (
      <button type='button' onClick={() => {
        if(value === null) {
          setValue(number);
        }
      }}>{value}</button>
    )
  }
export default NumberButton