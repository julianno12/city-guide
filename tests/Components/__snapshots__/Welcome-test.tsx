import React from "react";
import renderer from "react-test-renderer";

import Welcome from "../../../src/Pages/Onboarding/Welcome";

test("renders correctly", () => {
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchSnapshot();
});
