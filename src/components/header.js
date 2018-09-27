import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo-designcode.svg'
import './header.css'
import StripeCheckout from 'react-stripe-checkout'

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

  handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
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
          <StripeCheckout
            amount={5000}
            token={this.handlePurchase}
            stripeKey={'shhhbabby'}>
            <button>Buy</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

export default Header
