import React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import css from './Searchbar.module.css';

let initialValues = { search: '' };

export const Searchbar = ({ onSubmit }) => {
  const handlSubmit = (values, actions) => {
    initialValues = values;
    if (values.search.trim() === '') {
      return toast.error('Enter a valid search');
    }
    return onSubmit(values);
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handlSubmit}>
        <Form className={css.form}>
          <Field
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <span>Search</span>
          </button>
        </Form>
      </Formik>
    </header>
  );
};
