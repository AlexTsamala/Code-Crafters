import React, { useState } from 'react'
import NumberButton from './NumberButton'
import './Game.css'
import numbers from './Number';

function Game() {

  return (
    <div className='components'>
        {numbers.map((e) => {
            return (
            <NumberButton number={e.content}/>
        )
        })}
    </div>
  )
}

export default Game