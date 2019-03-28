import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("testing app component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should be render app correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a header element", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("should have a h1 element", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("should have a h1 element with text 'hello world'", () => {
    wrapper.setProps({ text: "hello world" });
    expect(wrapper.contains(<h1>hello world</h1>)).toEqual(true);
  });
});
