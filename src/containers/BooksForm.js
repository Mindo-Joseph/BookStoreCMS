import React from 'react';

import { categories } from '../category';

function BooksForm() {
  const [formData, setFormData] = React.useState({ title: '', category: '' });
  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add book</legend>
        <div>
          <label htmlFor="title">
            Title&nbsp;
            <input
              id="title"
              type="text"
              name="title"
              required
              onChange={handleChange}
              value={formData.title}
            />
          </label>
        </div>
        <div>
          <label htmlFor="category">
            Category&nbsp;
            <select
              id="category"
              name="category"
              onChange={handleChange}
              value={formData.category}
              required
            >
              <option value="" disabled>
                Select your option
              </option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Save</button>
      </fieldset>
    </form>
  );
}

export default BooksForm;
