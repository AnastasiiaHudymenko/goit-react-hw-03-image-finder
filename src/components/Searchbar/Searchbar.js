import React from 'react';
import { Formik, Form, Field } from 'formik';

let initialValues = { search: '' };
export const Searchbar = ({ onSubmit }) => {
  const handlSubmit = (values, actions) => {
    return onSubmit(values);
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handlSubmit}>
        <Form>
          <button type="submit">
            <span>Search</span>
          </button>
          <Field
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
