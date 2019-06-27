import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({ children, rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>{children}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.object.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};
