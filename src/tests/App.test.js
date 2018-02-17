import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Board from '../Board/Board'

const component = shallow(<App />)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders a board', () => {
  expect(component.find(Board)).toHaveLength(1)
})
