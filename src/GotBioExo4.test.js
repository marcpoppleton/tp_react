//import React from "react";

import { render } from "@testing-library/react";
import { configure } from '@testing-library/dom'
configure({ testIdAttribute: 'id' })

import { Characters } from "./GotBioExo4";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            surname: "Surname 1",
            name: "Name 1",
            resume: "Resume 1",
          },
        ]),
    })
  );
});

afterEach(() => {
  fetch.mockClear();
});

test("backend is called", () => {
  render(<Characters />);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith("https://iai3-react-34db9d7c5920.herokuapp.com/exos");
});

test("renders without crashing", () => {
  render(<Characters />);
});

test("does not contains menu after initial render", () => {
  const { container } = render(<Characters />);
    const menu = container.querySelector(`[id="menu"]`);
    expect(menu).toBeNull();
});
test("does not contains main-content after initial render", () => {
  const { container } = render(<Characters />);
  const main_content = container.querySelector(`[id="main-content"]`);
  expect(main_content).toBeNull();
});
test("contains menu after async fetch", async () => {
  const { findByTestId } = render(<Characters />);
  const menuAfterGet = await findByTestId("menu");
  expect(menuAfterGet).toBeInTheDocument();
});
test("menu is an aside tag after async fetch", async () => {
  const { findByTestId } = render(<Characters />);
  const menuAfterGet = await findByTestId("menu");
  expect(menuAfterGet.nodeName).toBe("ASIDE");
});
test("contains main-content after async fetch", async () => {
  const { findByTestId } = render(<Characters />);
  const menuAfterGet = await findByTestId("main-content");
  expect(menuAfterGet).toBeInTheDocument();
});
test("main-content is a section tag after async fetch", async () => {
  const { findByTestId } = render(<Characters />);
  const menuAfterGet = await findByTestId("main-content");
  expect(menuAfterGet.nodeName).toBe("SECTION");
});
