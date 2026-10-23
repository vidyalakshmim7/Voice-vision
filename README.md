# VoicePay Vision – Redesigned (Frontend Demo)

Plain HTML5 / CSS3 / JavaScript. No frameworks, no backend, no database.
**All payments are simulated. Sign-in is a demonstration, not secure authentication; passwords are never stored.**

## Run in Visual Studio Code with Live Server
1. Install VS Code, then the **Live Server** extension (Ritwick Dey) from the Extensions panel.
2. `File → Open Folder…` and choose `VoicePay_Vision`.
3. Right-click `index.html` → **Open with Live Server** (or click *Go Live* in the status bar).
4. The app opens at `http://127.0.0.1:5500/`. Use Chrome or Edge for the best voice and QR support.

The camera needs `localhost` or HTTPS, which Live Server provides. Opening the file by double-click may block the camera.

## Try it
- Register or log in with any valid email/10-digit phone and a password of 8+ characters (format checks only).
- Scan QR: use the camera (needs a browser with `BarcodeDetector`, e.g. Chrome/Edge) or type demo data:
  `VPV|Ramesh Store|Tamil Nadu|50.00`
- Pay: tick the confirmation box, then press **Pay Now (Demo)**. About 15% of demo payments fail on purpose.
- Voice Assistant: say "scan QR", "transaction history", "profile", "settings", "help", "switch to Tamil". Saying "pay" is refused: voice can never authorize a payment.

## Notes
- Speech recognition relies on the browser (Chrome/Edge); Tamil recognition and voices depend on the OS and browser.
- Local Storage keeps only preferences, the demo profile and demo transactions (key `vpv_demo`). Reset it in Settings.
- Fingerprint authentication is not implemented.
- Screen 13 (responsive view) is in Settings → *Mobile Responsive Preview*.
