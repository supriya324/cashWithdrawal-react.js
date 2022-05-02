import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Amount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({Amount: prevState.Amount - value}))
  }

  render() {
    const {Amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="para"> {initial} </p>
            </div>
            <p className="heading">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading"> Your Balance</p>
            <p className="amount">
              {Amount}
              <br />
              <span className="head"> InRupees</span>
            </p>
          </div>
          <p className="withdraw-heading"> Withdraw</p>
          <p className="sum-para"> CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                withDrawAmount={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
