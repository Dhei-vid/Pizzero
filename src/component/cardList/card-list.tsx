import { Component } from 'react'
import { useState } from 'react'

import Card from '../card/card'
import './card-list-style.css'

const CardList = ({ meals }) => {
  return (
    <div className='card--list'>
      <Card mealData={meals} />
    </div>
  )
}

// class CardList extends Component {
//   render () {
//     const { meals } = this.props
//     console.log(meals)

//     return (
//       <div className='card--list'>
//         <Card mealData={meals} />
//       </div>
//     )
//   }
// }

export default CardList
