import React from 'react';
import { connect } from 'react-redux';

function BooksList({ books }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
    </table>
  );
}

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
