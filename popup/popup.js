const colorInputFormelement = document.getElementById("color-input-form");
const darkColorInputElement = document.getElementById("dark-color-input");
const lightColorInputElement = document.getElementById("light-color-input");
const resetColorsButtonElement = document.getElementById("reset-colors-button");

chrome.storage.sync.get(["colors"], (result) => {
  const colors = result.colors;

  darkColorInputElement.value = colors.darkBackground;
  lightColorInputElement.value = colors.lightBackground;
});

colorInputFormelement.onsubmit = (event) => {
  event.preventDefault();

  const darkBackground = darkColorInputElement.value;
  const lightBackground = lightColorInputElement.value;

  const colors = {
    darkBackground,
    lightBackground,
  };

  chrome.storage.sync.set({ colors });
};

resetColorsButtonElement.onclick = () => {
  chrome.runtime.sendMessage("reset-colors");
};
