import { Component } from "react";
import Card from "../card/card";
import "./card-list-style.css";

class CardList extends Component {
  render() {
    const { meals } = this.props;
    console.log(meals);

    return (
      <div className="card--list">
        <Card mealData={meals} />
      </div>
    );

    // return meals.map((element) => {
    //   return (
    //     <div key={element.id}>
    //       <h1> {element.title} </h1>
    //     </div>
    //   );
    // });
  }
}

export default CardList;
