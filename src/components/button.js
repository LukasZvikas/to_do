import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, color, onClick, disabled, marginX, marginY }) => (
  <button disabled={disabled} className={`btn ${marginX} ${marginY} ${color}`} onClick={onClick}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  marginX: PropTypes.string,
  marginY: PropTypes.string
};

Button.defaultProps = {
  name: 'button',
  color: '#000',
  onClick: null,
  disabled: false,
  marginX: 'mx-2',
  marginY: 'my-4'
};
