import React from "react";
import ReactDOM from "react-dom";
import { Link } from "./Link";

const LinkWrapper = (props) => <a {...props} />;
it("has an href attribute", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Link href="https://bonsaiilabs.com" LinkWrapper={LinkWrapper}>
      Bonsaiilabs
    </Link>,
    div
  );
  expect(div.querySelector('a[href="https://bonsaiilabs.com"]')).not.toBeNull();
  expect(div.textContent).toEqual("Link Text");
  ReactDOM.unmountComponentAtNode(div);
});
