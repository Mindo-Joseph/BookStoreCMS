import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

import { books, filter } from '../actions';

function BooksList({
  books, removeBook, filter, changeFilter,
}) {
  return (
    <>
      <CategoryFilter handleFilterChange={changeFilter} filter={filter} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { books.length
            ? books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleBookRemoval={() => removeBook(book)}
              />
            ))
            : <tr><td colSpan={3}>No books were found</td></tr> }
        </tbody>
      </table>
    </>
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
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const getFilteredBooks = ({ books, filter }) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(({ category }) => category === filter);
};

const mapStateToProps = (state) => ({
  books: getFilteredBooks(state),
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    removeBook: books.removeBook,
    changeFilter: filter.changeFilter,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
