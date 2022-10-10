import { config } from "./config.js";

// Set colors to default values.
const baseSetup = () => {
  chrome.storage.sync.set({ colors: config.colors });
};

// On load, check if `colors` exist.
chrome.storage.sync.get(["colors"], (colors) => {
  // Initialize with base colors if not set.
  if (!Object.keys(colors).length) baseSetup();
});

// Restore default values on event.
chrome.runtime.onMessage.addListener((message) => {
  if (message === "reset-colors") baseSetup();
});
