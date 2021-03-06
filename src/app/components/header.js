import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAccount } from 'app/actions/accounts'
import { Link } from 'react-router-dom';
import style from './header.scss';
import Helpers from 'app/helpers';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/"><h1 className="site-title">TokoFlix</h1></Link>
        <h3 className='balance'> { Helpers.convertToRupiah(this.props.account.balance) }</h3>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.Accounts.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccount: () => dispatch(getAccount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)