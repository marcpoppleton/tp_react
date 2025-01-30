import { render, screen,waitForElement } from '@testing-library/react';
import { Characters } from "./GotBioExo3";

test("renders without crashing", () => {
  render(<Characters />)
});

test("contains menu after initial render", () => {
  const { container } = render(<Characters />);
  const menu = container.querySelector(`[id="menu"]`);
  expect(menu).toBeInTheDocument();
});
test("menu is an aside tag", () => {
const { container } = render(<Characters />);
const menu = container.querySelector(`[id="menu"]`);
expect(menu).toBeInTheDocument();
expect(menu.nodeName).toBe("ASIDE");
});
test("contains main-content after initial render", () => {
  const { container } = render(<Characters />);
  const main_content = container.querySelector(`[id="main-content"]`);
  expect(main_content).toBeInTheDocument();
});
test("main-content is a section tag", () => {
  const { container } = render(<Characters />);
  const main_content = container.querySelector(`[id="main-content"]`);
  expect(main_content).toBeInTheDocument();
  expect(main_content.nodeName).toBe("SECTION");
});