import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-content">
              <h1 className="profile-text">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="amount-content">
            <p1 className="your-balance">Your Balance</p1>
            <div className="amount-container">
              <p1 className="amount">2000</p1>
              <p2 className="amount-text">In Rupees</p2>
            </div>
          </div>

          <h1 className="withdraw">Withdraw</h1>
          <p className="choosing">CHOOSE SUM (IN RUPEES)</p>
          <div className="lists">
            <ul className="lists-container">
              {denominationsList.map(eachItem => (
                <DenominationItem denominationDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
