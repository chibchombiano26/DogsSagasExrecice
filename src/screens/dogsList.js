import React, { Component } from "react";
import { connect } from "react-redux";
import { API_CALL_REQUEST } from "../actions/dogs";
import { TitleComponent } from "../components/index";

class DogList extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <TitleComponent title="Welcome to Dog Saga" />
          <img src={dog.message} className="App-logo" alt="logo" />
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    fetching: state.dog.fetching,
    dog: state.dog.dog,
    error: state.dog.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () =>
      dispatch({
        type: API_CALL_REQUEST
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogList);
