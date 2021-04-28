import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

import { books, filter } from '../actions';

import general from '../css/general.module.css';

function BooksList({
  books, removeBook, filter, changeFilter,
}) {
  return (
    <>
      <CategoryFilter handleFilterChange={changeFilter} filter={filter} />
      <section className={classnames(general.w100, general.section)}>
        {

        books.length > 0
          ? books.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleBookRemoval={() => removeBook(book)}
            />
          ))
          : <h3 style={{ textAlign: 'center' }}>No books were found!</h3>
      }
      </section>
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
