// Initialize the emulator
const canvas = document.getElementById('gba-screen');
const ctx = canvas.getContext('2d');

// Load the mGBA WASM core
const mGBA = new mGBA.WASM();

// Set up the emulator
mGBA.setCanvas(canvas);
mGBA.loadROM('path/to/your/rom.gba');

// Handle control inputs
function handleInput(key) {
  mGBA.keyDown(key);
}

// Handle save/load states
function saveState() {
  const state = mGBA.saveState();
  localStorage.setItem('gba-state', JSON.stringify(state));
}

function loadState() {
  const state = JSON.parse(localStorage.getItem('gba-state'));
  if (state) {
    mGBA.loadState(state);
  }
}

// Handle fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Export functions for UI interactions
export { handleInput, saveState, loadState, toggleFullscreen };
