import React from "react";
import TitleComponent from "../titleComponent";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders properly", () => {
  const wrapper = shallow(<TitleComponent title="CodeSandbox" />);
  expect(wrapper.text()).toEqual("CodeSandbox");
});

describe("Title component", () => {
  /*
  it("render as expected", () => {
    const tree = renderer.create(
      <TitleComponent title="Welcome to Dog Saga" />
    ).toJSON();

    console.log(tree);
    //expect(tree).toMatchSnapshot();
  });
  */

  it("enzime testing", () => {});
});
