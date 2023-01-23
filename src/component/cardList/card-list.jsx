import Card from '../card/card'

import './card-list-style.css'

const CardList = ({ monsters }) => {
  console.log('Card List ', monsters)

  return (
    <div className='card--list'>
      <Card monsters={monsters} />
    </div>
  )
}

export default CardList
