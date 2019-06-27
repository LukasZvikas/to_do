import React from 'react';
import PropTypes from 'prop-types';

export const Task = ({ ID, name, description, creationDate }) => (
  <div className="col-10 bg-white d-flex justify-content-between p-3 border border-light">
    <div>{ID}</div>
    <div>{name}</div>
    <div>{description}</div>
    <div>{creationDate}</div>
  </div>
);

Task.propTypes = {
  ID: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: PropTypes.string
};

Task.defaultProps = {
  ID: Date.now(),
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: new Date().toISOString()
};
