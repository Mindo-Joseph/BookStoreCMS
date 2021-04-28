import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from '../css/categoryFilter.module.css';
import general from '../css/general.module.css';

import { categories } from '../category';

function CategoryFilter({ handleFilterChange, filter }) {
  return (
    <div className={classnames(style.filterOuter, general.flex, general.justifyEnd)}>
      <select
        className={general.select}
        value={filter}
        onChange={({ target: { value } }) => handleFilterChange(value)}
      >
        <option value="All">All</option>
        { categories.map((c) => <option key={c} value={c}>{ c }</option>) }
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
