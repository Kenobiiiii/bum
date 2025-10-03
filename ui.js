import { handleInput, saveState, loadState, toggleFullscreen } from './emulator.js';

// Control button setup
const controls = [
  { id: 'up', key: 'ArrowUp' },
  { id: 'down', key: 'ArrowDown' },
  { id: 'left', key: 'ArrowLeft' },
  { id: 'right', key: 'ArrowRight' },
  { id: 'a', key: 'KeyZ' },
  { id: 'b', key: 'KeyX' },
  { id: 'start', key: 'Enter' },
  { id: 'select', key: 'ShiftLeft' }
];

const controlsContainer = document.getElementById('controls');

// Create control buttons
controls.forEach(control => {
  const button = document.createElement('button');
  button.id = control.id;
  button.textContent = control.id.toUpperCase();
  button.addEventListener('click', () => handleInput(control.key));
  controlsContainer.appendChild(button);
});

// Menu buttons
document.getElementById('save-state').addEventListener('click', saveState);
document.getElementById('load-state').addEventListener('click', loadState);
document.getElementById('fullscreen').addEventListener('click', toggleFullscreen);

// Help modal
const helpModal = document.getElementById('help-modal');
const helpButton = document.getElementById('help');
const closeButton = document.querySelector('.close');

helpButton.addEventListener('click', () => {
  helpModal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  helpModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === helpModal) {
    helpModal.style.display = 'none';
  }
});
