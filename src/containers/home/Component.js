import React from "react";
import Dynamic from "../../__shared__/UIDynamic";
import { fields, contactFieldArray, guardianDetails } from "./constants";

class Component extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      contactFields: []
    });
  }
  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      isFormValid,
      formValues
    } = this.props;
    const showGaurdianDetailsSection = formValues.guardianConsent;
    return (
      <form className="col-md-9" onSubmit={handleSubmit}>
        <h1>Dynamic Forms Example</h1>
        <Dynamic fields={fields} />
        {contactFieldArray("contact")}
        {showGaurdianDetailsSection ? (
          <div>
            <h3>Gardian Details</h3>
            <Dynamic fields={guardianDetails} />
            {contactFieldArray("gaurdianContact")}
          </div>
        ) : null}
        <div className="btn-wrapper">
          <button disabled={!isFormValid} className="btn btn-default btn-right">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Component;
