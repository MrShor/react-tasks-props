import React from "react";
import { figurePropertiesType } from "../../propTypes/propTypes";

const Figure = ({ figureProperties }) => {
  let currentElement;
  figureProperties.forEach((element) => {
    if (element.isActive) {
      currentElement = element;
    }
  });
  return (
    <div
      style={{
        borderColor: `${currentElement.isActive ? currentElement.color : ""}`,
      }}
      className={`figure-decription ${currentElement.name}`}
    >
      <p>Figure name: {currentElement.name}</p>
      <p>Figure color: {currentElement.color}</p>
      <p>Figure side length: {currentElement.sideLength}</p>
    </div>
  );
};

Figure.propTypes = {
  figureProperties: figurePropertiesType.isRequired,
};

export default Figure;
