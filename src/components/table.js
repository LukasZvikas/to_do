import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({ children, rows }) => {
  return (
    <div className="table-responsive-sm w-100">
      <table className="table">
        <thead>
          <tr>{children}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};
