import React from 'react';
import PropTypes from 'prop-types';

export const Task = ({ ID, name, description, creationDate }) => (
  <tr scope="row">
    <td>{ID}</td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{creationDate}</td>
    <td>
      <button className="btn btn-success">Update</button>
    </td>
  </tr>
);

Task.propTypes = {
  ID: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: PropTypes.string
};

Task.defaultProps = {
  ID: Date.now(),
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: new Date().toLocaleString()
};
