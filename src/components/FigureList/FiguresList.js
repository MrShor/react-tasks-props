import React from "react";
import {
  figurePropertiesType,
  changeFigureType,
} from "../../propTypes/propTypes";

const FiguresList = ({ figureProperties, changeFigure }) => (
  <div className="figures-list">
    <h4 className="title">Choose a figure</h4>
    {figureProperties.map((element) => (
      <p
        className={`figure-row${element.isActive ? " is-active" : ""}`}
        key={element.id}
      >
        <button
          style={{
            backgroundColor: `${element.isActive ? element.color : ""}`,
          }}
          onClick={() => changeFigure(element.name)}
          type="button"
        >
          {element.name}
        </button>
      </p>
    ))}
  </div>
);

FiguresList.propTypes = {
  figureProperties: figurePropertiesType.isRequired,
  changeFigure: changeFigureType.isRequired,
};

export default FiguresList;
