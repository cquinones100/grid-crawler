import 'jest-enzyme'
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key]
  }

  setItem(key, item) {
    this.store[key] = item
  }
}

global.localStorage = new LocalStorageMock

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.document = Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
})
