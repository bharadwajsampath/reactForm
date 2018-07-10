import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { fromJS } from "immutable";
import dynamicFieldProps from "./propTypes";

const RenderDynamicFields = ({ dynamicFields }) =>
  dynamicFields.map((item, index) => {
    // const field = fromJS(item).toJS();
    return (
      <div>
        <div>one</div>
        <div>
          <Field
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            component={item.component}
            validate={item.validate}
            name={item.name}
            // {...field}
            inputProps={item.inputProps}
          />
        </div>
      </div>
    );
  });

RenderDynamicFields.propTypes = {
  dynamicFields: PropTypes.arrayOf(dynamicFieldProps)
};

const DynamicForm = ({ fields }) => {
  if (fields.length === 0) {
    return null;
  }
  const dynamicFields = RenderDynamicFields({ dynamicFields: fields });
  return dynamicFields;
};

DynamicForm.propTypes = {
  fields: PropTypes.arrayOf(dynamicFieldProps)
};

export default DynamicForm;
