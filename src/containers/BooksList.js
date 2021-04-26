import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Book from '../components/Book';
import { books } from '../actions';

function BooksList({ books, removeBook }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            handleBookRemoval={() => removeBook(book)}
          />
        ))}
      </tbody>
    </table>
  );
}
BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,

    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    removeBook: books.removeBook,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
