A fully functional, user-friendly Game Boy Advance emulator that runs directly in your browser with advanced features like save states, shaders, customizable controls, fullscreen mode, and a built-in Help Menu.

🔹 Features

mGBA WASM Core: Accurate GBA emulation in-browser.

Resizable Canvas: Automatically scales the game screen to fit your device.

Customizable Controls: Map keyboard keys or drag-touch controls anywhere on screen.

Save States: Save and load game progress at any time.

Shader Support: Apply visual filters like CRT, scanlines, or pixel smoothing.

Fullscreen Mode: Immerse yourself in full-screen gameplay.

Persistent Settings: Saves your key mappings, theme, speed, and shader preferences.

Help Menu: Detailed instructions and troubleshooting guide.

🔹 Getting Started
Prerequisites

Modern web browser (Chrome, Firefox, Safari, Edge).

Local web server (e.g., Live Server for VS Code, XAMPP, or Python http.server).

Installation

Clone or download the project files:

git clone https://github.com/yourusername/gba-emulator-pro.git
cd gba-emulator-pro


Start a local server in the project folder:

# Python example
python -m http.server


Open index.html in your browser via the server.

🔹 Usage

Click Load ROM and select your .gba file.

Use the on-screen controls or keyboard mappings to play.

Click Save State or Load State to manage your progress.

Toggle Fullscreen, adjust Speed, and apply Shaders as needed.

Click the Help button for instructions and troubleshooting tips.

Drag on-screen buttons to rearrange them for touch devices.

🔹 Controls
Action	Default Key / Button
Up	Arrow Up
Down	Arrow Down
Left	Arrow Left
Right	Arrow Right
A	Z
B	X
Start	Enter
Select	Left Shift

Key mappings are fully customizable via the Key Map button.

🔹 Help Menu

The Help Menu includes:

How to load and play ROMs.

Guide to on-screen and keyboard controls.

Instructions for save/load states.

Tips for shaders, fullscreen, and performance optimization.

Troubleshooting common issues.

🔹 Project Structure
/gba-emulator
├── index.html
├── /assets
│   ├── /images
│   └── /styles
├── /scripts
│   ├── emulator.js
│   └── ui.js
└── README.md

🔹 Contributing

Fork the repository.

Make your changes in a new branch.

Submit a pull request with a clear description of your updates.

🔹 License

This project is open-source under the MIT License. You are free to use, modify, and distribute it.

🔹 Notes

ROMs are not included; you must provide your own legally obtained GBA ROM files.

Best experienced on modern browsers; older browsers may not support WASM or advanced features.

For mobile devices, drag-and-drop on-screen controls are fully supported for touch input.
