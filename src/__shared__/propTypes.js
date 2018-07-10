import PropTypes from "prop-types";

const dynamicFieldProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  props: PropTypes.shape({
    placeholder: PropTypes.string,
    name: PropTypes.string,
    validate: PropTypes.array
  })
});

export default dynamicFieldProps;
