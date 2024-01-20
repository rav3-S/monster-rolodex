import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster; // destructuring. Makes it easier if changing name => username in future. Only change in one place
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
