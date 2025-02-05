//import React from "react";

import { render } from "@testing-library/react";
import { Title } from "./Title";

const mockedState = {
  character: {
    name: "MOCK CHARACTER",
  },
};
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: (callback) => {
    return callback(mockedState);
  }
}));


test("contains main-content after async fetch", async () => {
  const { getByRole } = render(<Title />);
  const h1 = await getByRole('heading', {level: 1})
  expect(h1).toBeInTheDocument();
  expect(h1.textContent).toContain("MOCK CHARACTER")
});
