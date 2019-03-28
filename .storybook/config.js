import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/App");
  require("../stories/index.js");
}

configure(loadStories, module);
