import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import RecordDashboard from './components/RecordDashboard';

const App = ({ isRecording }) => (
  <div className="d-flex justify-content-center align-items-center flex-column">
    <h2 className="my-5">My To-Do</h2>
    <Dashboard />
    <RecordDashboard />
  </div>
);

const mapStateToProps = ({ toDos: { isRecording } }) => ({
  isRecording
});

App.propTypes = {
  isRecording: PropTypes.bool
};

App.defaultProps = {
  isRecording: false
};

export default connect(
  mapStateToProps,
  null
)(App);
