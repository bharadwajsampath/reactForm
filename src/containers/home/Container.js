import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Component from "./Component";

const formComponent = reduxForm({
  form: "signup"
})(Component);

export default connect()(formComponent);
