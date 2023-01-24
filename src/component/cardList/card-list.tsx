import Card from "../card/card";
import { PizzaRecipes } from "../../App";

import "./card-list-style.css";

type CardListProps = {
  pizza: PizzaRecipes[];
};

const CardList = ({ pizza }: CardListProps) => {
  return (
    <div className="card--list">
      <Card pizza={pizza} />
    </div>
  );
};

export default CardList;
