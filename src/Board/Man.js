import React from 'react'
import ManSprite from './ManSprite.gif'

const Man = ({ difficulty, position, lives }) => {

  const zIndex = position
  const opacity = (lives + 1) * 0.2

  return <img
    className='sprite man'
    style={{zIndex, opacity}}
    src={ManSprite} alt='player'
  />
}


export default Man
