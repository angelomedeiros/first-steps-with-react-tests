import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("testing app component", () => {
  it("should be render app correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
