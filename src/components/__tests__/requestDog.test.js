import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RequestDog from "../requestDog";

Enzyme.configure({ adapter: new Adapter() });

describe("Dog button action", () => {
  test("Render properly", () => {
    expect(shallow(<RequestDog />).length).toEqual(1);
  });

  test("Control not fetching", () => {
    const wrapper = shallow(<RequestDog text="Request a dog" />);
    const instance = wrapper.find("button").text();

    expect(instance).toEqual("Request a dog");
  });

  test("Control fetching", () => {
    const wrapper = shallow(
      <RequestDog isfetching={true} fetchingText="Fetching..." />
    );
    const instance = wrapper.find("button").text();
    console.log(instance);
    expect(instance).toEqual(" Fetching...");
  });
});
