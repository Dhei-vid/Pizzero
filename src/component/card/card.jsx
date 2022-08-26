import { Component } from "react";
import "./card-style.css";

class Card extends Component {
  render() {
    const pizza = this.props.mealData;

    return pizza.map((meal) => {
      return (
        <div className="card--container" key={meal.id}>
          <img src={meal.image_url} alt={`${meal.title}`} />
          <h2> {meal.title} </h2>
        </div>
      );
    });
  }
}

export default Card;
