import React from 'react';
import PropTypes from 'prop-types';

export const Task = ({ ID, name, description, creationDate }) => (
  <tr scope="row">
    <td>{ID}</td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{creationDate}</td>
  </tr>
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
