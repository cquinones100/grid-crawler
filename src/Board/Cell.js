import React from 'react'
import Man from './Man'
import redBox from './redBox.gif'

const Cell = ({ index, man, obstacle, difficulty, position }) => {

  const zIndex = index + 1

  return(
    <div key={index} className='cell' id={index}>
      {man ? <Man difficulty={difficulty} position={position}/> : ''}
      {obstacle
        ? <img className='sprite box' src={redBox} alt='box' style={{zIndex}}/>
        : ''}
    </div>
  )
}

export default Cell
