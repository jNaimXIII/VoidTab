const updateColors = () => {
  chrome.storage.sync.get(["colors"], (result) => {
    const { darkBackground, lightBackground } = result.colors;

    document.body.style.setProperty("--dark-background", darkBackground);
    document.body.style.setProperty("--light-background", lightBackground);
  });
};

updateColors();

chrome.storage.onChanged.addListener(updateColors);
