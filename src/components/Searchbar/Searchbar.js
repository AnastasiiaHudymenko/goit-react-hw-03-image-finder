import React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';

let initialValues = { search: '' };

export const Searchbar = ({ onSubmit }) => {
  const handlSubmit = (values, actions) => {
    initialValues = values;
    if (values.search.trim() === '') {
      actions.resetForm();
      return toast.error('Enter a valid search');
    }
    return onSubmit(values);
  };

  return (
    <header className="Searchbar">
      <Formik initialValues={initialValues} onSubmit={handlSubmit}>
        <Form className="SearchForm">
          <Field
            className="SearchForm-input"
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
          <button className="SearchForm-button" type="submit">
            <span>Search</span>
          </button>
        </Form>
      </Formik>
    </header>
  );
};
