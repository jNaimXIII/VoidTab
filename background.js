import { config } from "./config.js";

const baseSetup = () => {
  chrome.storage.sync.set({ colors: config.colors });
};

chrome.storage.sync.get(["colors"], (colors) => {
  if (!Object.keys(colors).length) baseSetup();
});

chrome.runtime.onMessage.addListener((message) => {
  if (message === "reset-colors") baseSetup();
});
