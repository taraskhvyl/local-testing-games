import {shallow, mount, render} from 'enzyme';
import React from "react";
import Card from "./Card";

it("should be rendered one component", () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});
