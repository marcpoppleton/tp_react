//import React from "react";

import { render, screen, fireEvent, getByText } from "@testing-library/react";
import ReactDOMClient from 'react-dom/client';
import { act } from 'react';
import { configure } from "@testing-library/dom";
import * as reactRedux from "react-redux";
configure({ testIdAttribute: "id" });

import { Characters } from "./GotBioExo5";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementationOnce(() =>
  {global.console.log("mocking");  
  return Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            surname: "Surname",
            name: "Name",
            resume: "Resume",
          },
        ]),
    })}
  );
});

afterEach(() => {
  fetch.mockClear();
});

test("dispatch is called when item is clicked", async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  await act( async () => {
    ReactDOMClient.createRoot(container).render(<Characters />);
  });
  fireEvent(
    getByText(container, "Surname"),
    new MouseEvent("click", {
      bubbles: true,
    })
  );
  expect(mockDispatch).toHaveBeenCalled();
});
