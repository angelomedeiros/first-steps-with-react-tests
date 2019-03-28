import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/Button");
  require("../stories/App");
}

configure(loadStories, module);
