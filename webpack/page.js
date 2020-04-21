/* eslint-env browser */
require('styles/index.scss')
const { createElement } = require('react')
const { render, unmountComponentAtNode } = require('react-dom')

global.render = Component => {
  const el = document.querySelector('#mountpoint')
  unmountComponentAtNode(el)
  render(createElement(Component), el)
}
