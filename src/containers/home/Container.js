import { connect } from "react-redux";
import { reduxForm, getFormValues, isValid } from "redux-form";
import Component from "./Component";

const mapStateToProps = state => {
  const newProps = {
    isFormValid: isValid("signup")(state),
    formValues: getFormValues("signup")(state) || {}
  };
  return newProps;
};

const formComponent = reduxForm({
  form: "signup",
  onSubmit: values => {
    console.log(values);
  }
})(Component);

export default connect(mapStateToProps)(formComponent);
