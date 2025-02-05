import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "./ListComponentsExo3";

const mockChildComponent = jest.fn();
jest.mock("./ListItemComponentsExo3", () => {
  return {
    __esModule: true,
    ListItem: (props) => {
      mockChildComponent(props);
      return <div>mock list item</div>;
    },
  };
});

test("List renders with right number of childs", () => {
  const items = [
    { field_1: "A 1", field_2: "A 2" },
    { field_1: "B 1", field_2: "B 2" },
  ];
  const fields = ["field_1", "field_2"];
  const props = {
    items: items,
    fields: fields,
    onClick: () => {},
  };

  const { container } = render(<List {...props} />);
  screen.debug();
  expect(container.firstChild.childNodes).toHaveLength(2);
});

test("List renders with props passed to child", () => {
  const items = [{ field_1: "A 1", field_2: "A 2" }];
  const fields = ["field_1", "field_2"];
  const props = {
    items: items,
    fields: fields,
    onClick: () => {},
  };

  render(<List {...props} />);
  expect(mockChildComponent).toHaveBeenCalledTimes(1);
  expect(mockChildComponent).toHaveBeenCalledWith({
    line_1: "A 1",
    line_2: "A 2",
    onClick: () => {},
    selected: false,
  });
});
