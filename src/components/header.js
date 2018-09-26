import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo-designcode.svg'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ?
        'header headerScrolled' : 'header'}>
        <div className='headerWrapper'>
          <Link to="/">
            <img src={require('../images/logo-designcode.svg')} />
          </Link>
          <Link to="/courses">One</Link>
          <Link to="/courses">Two</Link>
          <Link to="/courses">Three</Link>
          <Link to="/courses"><button>Four</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
