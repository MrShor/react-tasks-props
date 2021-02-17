import PropTypes from "prop-types";

export const figurePropertiesType = PropTypes.shape(
  PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      sideLength: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired
).isRequired;

export const changeFigureType = PropTypes.shape(PropTypes.func.isRequired)
  .isRequired;
