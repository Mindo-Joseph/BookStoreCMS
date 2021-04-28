import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from '../css/book.module.css';
import general from '../css/general.module.css';

function Book({
  book: {
    id, title, category,
  },
  handleBookRemoval,
}) {
  return (
    <div className={style.book}>
      <div>
        <h4>{ category }</h4>
        <h2>{ title }</h2>
        <h5>Author</h5>
        <div className={style.links}>
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className={classnames(general.flex, general.alignCenter)}>
        <div className={classnames(style.progress, general.flex)}>
          <div className={style.progressCircle} />
          <div className={classnames(general.flex, general.column)}>
            <div className={style.percentage}>100%</div>
            <div className={style.status}>Completed</div>
          </div>
        </div>
        <div
          className={classnames(general.flex, general.column, general.justifyBetween, general.h100)}
        >
          <div>
            <div className={style.chapterLabel}>current chapter</div>
            <div className={style.chapter}>
              Chapter&nbsp;
              { id }
            </div>
          </div>
          <button
            onClick={() => handleBookRemoval({ id, title, category })}
            type="button"
            className={general.button}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

  }).isRequired,
  handleBookRemoval: PropTypes.func.isRequired,
};

export default Book;
