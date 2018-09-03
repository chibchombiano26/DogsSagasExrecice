import { connect } from "react-redux";
import renderer from "react-test-renderer";
import React from "react";
import delay from "redux-saga";
import { Provider } from "react-redux";
import store from "../../store";
import DogList from "../dogsList";

describe("Container viewver", () => {
  it("Show correct text", () => {
    const tree = renderer.create(
      <Provider store={store}>
        <DogList />
      </Provider>
    );

    const instance = tree.root;

    const component = instance.findAllByProps({ className: "App-intro" });
    expect(component[0].children[0]).toEqual("Keep clicking for new dogs");
  });

  it("there are inputs?", () => {
    const tree = renderer.create(
      <Provider store={store}>
        <DogList />
      </Provider>
    );

    const instance = tree.root;
    const inputs = instance.findAll(el => el.type == "input");

    expect(inputs).toHaveLength(0);
  });
});
