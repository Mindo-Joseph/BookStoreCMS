import React from 'react';
import classnames from 'classnames';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from '../containers/Header';
import general from '../css/general.module.css';

const App = () => (
  <div>
    <Header />
    <div className={classnames(general.flex, general.column, general.alignCenter)}>
      <div className={general.container}>
        <BooksList />
        <BooksForm />
      </div>
    </div>
  </div>
);

export default App;
