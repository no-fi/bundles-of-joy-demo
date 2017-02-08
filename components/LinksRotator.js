// eslint-disable-next-line
import { h, Component } from 'preact'

class LinksRotator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      links: props.links
    }
    this.rotate = this.rotate.bind(this)
  }
  rotate () {
    const links = this.state.links
    const rotatedLinks = links.slice(1).concat(links[0])
    this.setState({links: rotatedLinks})
  }
  render () {
    const links = this.state.links
    return (
      <div>
        <ul>
          {links.map((link) => (
            <li>
              <a href={link.href}>{link.description}</a>
            </li>
          ))}
        </ul>
        <button onClick={this.rotate}>rotate!</button>
      </div>
    )
  }
}

export default LinksRotator
