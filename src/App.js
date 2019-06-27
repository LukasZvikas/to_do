import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import RecordDashboard from './components/RecordDashboard';

const App = ({ isRecording }) => (
  <Fragment>
    <Dashboard />
    {isRecording ? <RecordDashboard /> : null}
  </Fragment>
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
