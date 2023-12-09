import './index.css'

const DenominationItem = props => {
  const {denominationDetails} = props
  const {value} = denominationDetails

  return (
    <li className="list-container">
      <p className="amount-value">{value}</p>
    </li>
  )
}

export default DenominationItem
