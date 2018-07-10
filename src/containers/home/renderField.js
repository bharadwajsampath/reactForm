import React from "react";
import { Field } from "redux-form";
export const renderInput = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          className="form-control input"
          {...input}
          placeholder={placeholder}
          type={type}
        />
        {touched && error && <div className="error">{error.title}</div>}
      </div>
    </div>
  );
};

export const renderSelect = ({
  input,
  label,
  options,
  placeholder,
  type,
  meta: { touched, error }
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <select
          className="form-control input"
          {...input}
          placeholder={placeholder}
          type={type}
        >
          <option>----------{label}---------</option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        {touched && error && <div className="error">{error.title}</div>}
      </div>
    </div>
  );
};

export const renderContact = ({ fields, meta: { error }, title }) => (
  <div>
    <h3>{title}</h3>
    <button
      type="button"
      className="btn btn-info"
      onClick={() => fields.push()}
    >
      Add Phone Number
    </button>
    {fields.map((number, index) => (
      <div>
        <Field
          name={number}
          type="text"
          component={renderInput}
          label={`Phone #${index + 1}`}
        />
        <button className="btn" onClick={() => fields.remove(index)}>
          Remove Phone
        </button>
      </div>
    ))}
    {error && <li className="error">{error}</li>}
  </div>
);
