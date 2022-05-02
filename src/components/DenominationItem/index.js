import './index.css'

const DenominationItem = props => {
  const {withDrawAmount, updateBalance} = props
  const {value} = withDrawAmount

  const AmountUpdated = () => {
    updateBalance(value)
  }

  return (
    <li className="amount-container">
      <button className="button" type="button" onClick={AmountUpdated}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
