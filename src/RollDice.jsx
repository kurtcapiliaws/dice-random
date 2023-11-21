import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "fas fa-dice-one",
      die2: "fas fa-dice-one",
      rolling: false,
    };
  }

  roll = () => {
    this.setState({ rolling: true });

    setTimeout(() => {
      const newDie1 = this.getRandomFace();
      const newDie2 = this.getRandomFace();

      this.setState({
        die1: newDie1,
        die2: newDie2,
        rolling: false,
      });
    }, 500);
  };

  getRandomFace = () => {
    const faces = ["one", "two", "three", "four", "five", "six"];
    const randomIndex = Math.floor(Math.random() * faces.length);
    return `fas fa-dice-${faces[randomIndex]}`;
  };

  render() {
    const { die1, die2, rolling } = this.state;

    return (
      <div className="RollDice">
        <h1>DICE GAME</h1>
        <div>
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <div>
          <button onClick={this.roll} disabled={rolling}>
            {rolling ? "Rolling..." : "Roll Dice"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
