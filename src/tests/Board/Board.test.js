import React from 'react'
import Board from '../../Board/Board'
import Cell from '../../Board/Cell'
import { LEVELS } from '../../constants/levels'
import { UP, DOWN, LEFT, RIGHT } from '../../constants/movementDirections'

const component = shallow(<Board level={1} style={{}} difficulty={5}/>)

describe('constructor', () => {
  it('sets its state\'s level', () => {
    expect(component.state().level).toEqual(LEVELS[0])
  })

  it('sets its states style', () => {
    const expectedStyle = {
      gridTemplateRows: 'auto auto auto auto auto ',
      gridTemplateColumns: 'auto auto auto auto auto ',
      width: '400px',
      height: '400px',
    }

    expect(component.state().style).toEqual(expectedStyle)
  })
})

describe('rendering', () => {
  it('renders cells', () => {
    expect(component.find(Cell)).toHaveLength(25)
  })
})

describe('moving the player', () => {

  it('updates state after keyDown is pressed', () => {
    component.instance().handleKeyDown({ keyCode: RIGHT })

    expect(component.state().position).toEqual(1)
  })
})
