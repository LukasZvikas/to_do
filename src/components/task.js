import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/';
import PropTypes from 'prop-types';

export const Task = connect(
  null,
  { deleteTask }
)(({ ID, name, description, creationDate, showForm, deleteTask }) => (
  <tr scope="row">
    <td>{ID}</td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{creationDate}</td>
    <td>
      <button onClick={showForm} className="btn btn-success">
        Update
      </button>
      <button onClick={() => deleteTask(ID)} className="btn btn-danger ml-2">
        Delete
      </button>
    </td>
  </tr>
));

Task.propTypes = {
  ID: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: PropTypes.string,
  showForm: PropTypes.func.isRequired,
  deleteTask: PropTypes.func
};

Task.defaultProps = {
  ID: Date.now(),
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: new Date().toLocaleString(),
  deleteTask: () => console.log('delete task')
};
