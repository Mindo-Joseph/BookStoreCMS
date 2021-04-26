import PropTypes from 'prop-types';

function Book({
  book: {
    id, title, category,
  },
  handleBookRemoval,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button onClick={() => handleBookRemoval({ id, title, category })} type="button">Remove</button>
      </td>

    </tr>
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
