import { Component } from "react";
import "./card-style.css";

class Card extends Component {
  render() {
    const pizza = this.props.mealData;

    return pizza.map((meal) => {
      return (
        <div className="card--container" key={meal.id}>
          <img src={meal.image_url} alt={`${meal.title}`} />
          <h3> {meal.title} </h3>
        </div>
      );
    });
  }
}

export default Card;
