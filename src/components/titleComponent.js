import React from "react";
import PropTypes from "prop-types";

const title = ({ title = "" }) => <h1 className="App-title">{title}</h1>;

title.propTypes = {
  title: PropTypes.string
};

export default title;
