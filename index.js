import { h, render } from 'preact' // eslint-disable-line
import LinksRotator from './components/LinksRotator.js'

const links = [
  {href: 'http://browserify.org/', description: 'browserify'},
  {href: 'https://github.com/mattdesl/budo', description: 'budo dev-server'},
  {href: 'https://github.com/babel/babelify', description: 'babelify transform'},
  {href: 'https://preactjs.com/', description: 'preact'},
  {href: 'https://github.com/mishoo/UglifyJS', description: 'uglifyjs'}
]

const mountPoint = window.document.createElement('div')
window.document.body.appendChild(mountPoint)

render(<LinksRotator links={links} />, mountPoint)
