import React from 'react'
import ManSprite from './ManSprite.gif'

const Man = ({ difficulty, position }) => {

  const zIndex = position + 1
  return <img
    className='sprite man'
    style={{zIndex}}
    src={ManSprite} alt='player'
  />
}


export default Man
