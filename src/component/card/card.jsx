import './card-style.css'

const Card = ({ monsters }) => {
  console.log('Card ', monsters)

  return monsters.map(meal => {
    return (
      <div className='card--container' key={meal.id}>
        <img src={meal.website} alt={`${meal.name}`} />
        <h3> {meal.name} </h3>
      </div>
    )
  })
}

export default Card
