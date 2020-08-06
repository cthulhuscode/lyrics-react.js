import React from "react";
import PropTypes from "prop-types";

const Error = ({ msg }) => {
  return <span className="badge badge-pill badge-danger p-1 mb-3">{msg}</span>;
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
