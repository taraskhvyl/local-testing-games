import {shallow, mount, render} from 'enzyme';
import React from "react";
import CardList from "./CardList";

it("expect to render cardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Test",
      username: "John John",
      email: "john.gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
