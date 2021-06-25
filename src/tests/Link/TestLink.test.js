// Link.react.test.js
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";
import Link from "../../components/UI/Link";

const { act } = renderer;

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

test("Link changes the class when hovered", () => {
  let linkComponent;

  act(() => {
    linkComponent = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>,
      container
    );
  });

  let tree = linkComponent.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="https://www.facebook.com"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Facebook
    </a>
  `);

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = linkComponent.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="hovered"
      href="https://www.facebook.com"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Facebook
    </a>
  `);

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = linkComponent.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="https://www.facebook.com"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Facebook
    </a>
  `);
});
