import React from "react";
import {render} from "@testing-library/react";
import { ListItem } from "./ListComponentsExo3";

test("ListItem renders without crashing", () => {
  const props = {
    line_1: "line 1",
    onClick: () => {},
  };
  render(<ListItem {...props} />);
});

test("ListItem renders with props", async () => {
  const props = {
    line_1: "line 1",
    onClick: () => {},
  };
  const { findByText, container } = render(<ListItem {...props} />);
  const line_1 = await findByText("line 1");
  expect(line_1).toBeInTheDocument();
  expect(line_1.nodeName).toBe("H2");
  expect(container.firstChild.className).toBe("off");
});
