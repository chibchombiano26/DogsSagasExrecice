import React from "react";
import PropTypes from "prop-types";

const requestDog = ({
  isfetching = false,
  action = null,
  fetchingText = "Fetching...",
  text = "Request a Dog"
}) => (
  <div>
    {isfetching ? (
      <button disabled> {fetchingText}</button>
    ) : (
      <button onClick={action}>{text}</button>
    )}
  </div>
);

export default requestDog;

requestDog.propTypes = {
  isfetching: PropTypes.bool,
  action: PropTypes.func,
  fetchingText: PropTypes.string,
  text: PropTypes.string
};
