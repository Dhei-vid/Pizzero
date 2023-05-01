import { PizzaRecipes } from "../../App";
import "./card-style.css";

type CardProp = {
  pizza: PizzaRecipes[];
};

const Card = ({ pizza }: CardProp) => {
  console.log(pizza);
  return (
    <>
      {pizza.map((meal) => {
        return (
          <div className="card--container" key={meal.id}>
            <img src={meal.image_url} alt={`Monster ${meal.title}`} />
            <h3> {meal.title} </h3>
          </div>
        );
      })}
    </>
  );
};

export default Card;
