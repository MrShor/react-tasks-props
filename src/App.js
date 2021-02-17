import React from "react";
import "./App.css";
import Figure from "./components/Figure/Figure";
import FiguresList from "./components/FigureList/FiguresList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      figures: [
        {
          id: 1,
          name: "square",
          color: "#2ecc71",
          sideLength: 25,
          isActive: true,
        },
        {
          id: 2,
          name: "triangle",
          color: "#0e83cd",
          sideLength: 30,
          isActive: false,
        },
        {
          id: 3,
          name: "rhombus",
          color: "#fcd04b",
          sideLength: 20,
          isActive: false,
        },
      ],
    };
  }

  changeFigure = (nameId) => {
    this.setState((prevState) => {
      const arr = prevState.figures.map((element) => {
        const newElement = element;
        if (element.name === nameId) {
          newElement.isActive = true;
        } else {
          newElement.isActive = false;
        }
        return newElement;
      });
      const nextState = { figures: arr };
      return nextState;
    });
  };

  render() {
    const { figures } = this.state;
    return (
      <div className="App">
        <FiguresList
          figureProperties={figures}
          changeFigure={this.changeFigure}
        />
        <Figure figureProperties={figures} />
      </div>
    );
  }
}
