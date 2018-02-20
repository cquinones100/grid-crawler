import React from 'react'
import Man from './Man'
import redBox from './redBox.gif'
import { calculateDepth } from '../utils/board/calculateDepth'

const Cell = ({ index, man, obstacle, difficulty, position, target, box, space, lives }) => {

  const zIndex = calculateDepth(index, difficulty)

  let backgroundColor = ''

  if (target) { backgroundColor = 'pink' }
  if (!space) { backgroundColor = 'black' }

  return(
    <div key={index} className='cell' id={index} style={{backgroundColor}}>
      {man ? <Man difficulty={difficulty} position={position} lives={lives}/> : ''}

      {box
        ? <img className='sprite box' src={redBox} alt='box' style={{zIndex}}/>
        : ''}
    </div>
  )
}

export default Cell
