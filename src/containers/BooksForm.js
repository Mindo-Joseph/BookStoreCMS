import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { books } from '../actions';
import { categories } from '../category';
import style from '../css/booksForm.module.css';
import general from '../css/general.module.css';

function BooksForm({ createBook }) {
  const [formData, setFormData] = React.useState({ title: '', category: '' });
  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(formData);
    setFormData({ title: '', category: '' });
  };
  return (
    <section className={classnames(general.w100, general.section)}>
      <form onSubmit={handleSubmit} className={classnames(general.w100, style.form)}>

        <legend>Add book</legend>
        <div className={classnames(style.formInner, general.flex)}>
          <div className={style.inputGroup}>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              className={general.input}
              required
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          <div className={style.inputGroup}>

            <select
              id="category"
              name="category"
              className={general.select}
              onChange={handleChange}
              value={formData.category}
              required
            >
              <option value="" disabled>
                Category
              </option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

          </div>
          <button className={general.button} type="submit">Save</button>
        </div>

      </form>
    </section>

  );
}
BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ createBook: books.createBook }, dispatch)
);
export default connect(null, mapDispatchToProps)(BooksForm);
