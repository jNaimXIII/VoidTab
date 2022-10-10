const colorInputFormElement = document.getElementById("color-input-form");
const darkColorInputElement = document.getElementById("dark-color-input");
const lightColorInputElement = document.getElementById("light-color-input");
const resetColorsButtonElement = document.getElementById("reset-colors-button");

// Set page backgrounds from storage values.
chrome.storage.sync.get(["colors"], (result) => {
  const colors = result.colors;

  darkColorInputElement.value = colors.darkBackground;
  lightColorInputElement.value = colors.lightBackground;
});

// Update storage values from form data.
colorInputFormElement.onsubmit = (event) => {
  event.preventDefault();

  const darkBackground = darkColorInputElement.value;
  const lightBackground = lightColorInputElement.value;

  const colors = {
    darkBackground,
    lightBackground,
  };

  chrome.storage.sync.set({ colors });
};

// Dispatch `reset-colors` event handled by `background.js`.
resetColorsButtonElement.onclick = () => {
  chrome.runtime.sendMessage("reset-colors");
};
