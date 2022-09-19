import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import React from "react";
import Counter from "./Counter";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders unchanged content", () => {
  act(() => {
    render(<Counter />, container);
  });
  expect(container.querySelector(".content").textContent).toBe("5 * 2 = 10");
});
it("renders changed content", () => {
  act(() => {
    render(<Counter count={20}/>, container);
  });
  expect(container.querySelector(".content").textContent).toBe("20 * 2 = 40");
});
