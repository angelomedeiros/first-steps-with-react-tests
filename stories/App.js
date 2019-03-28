import React from "react";
import { storiesOf } from "@storybook/react";
import App from "../src/App";

storiesOf("App", module)
  .add("without text", () => <App />)
  .add("with text", () => <App text="Olá" />);
