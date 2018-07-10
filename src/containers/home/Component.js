import React from "react";
import Dynamic from "../../__shared__/UIDynamic";
import { fields } from "./constants";

class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Dynamic fields={fields} />
      </form>
    );
  }
}

export default Component;
