# PrepMaster

PrepMaster is a web-based interactive project (possibly a game or educational tool) built using HTML, CSS, and JavaScript. It is designed to run directly in modern web browsers.

## 🚀 Features

- Responsive front-end
- Engaging animations (`animations.js`)
- Beautiful UI with image assets
- No backend required

## 🗂 Project Structure

```
PrepMaster/
├── index.html          # Main HTML file
├── style.css           # Styling
├── Script.js           # Main JavaScript logic
├── animations.js       # Animation handling
├── images/             # Image assets
├── package.json        # Node.js metadata (optional)
└── README.md
```

## 🛠 Installation & Usage

### Option 1: Run Locally (no dependencies)

1. Download or clone the repo:
   ```bash
   git clone https://github.com/Samuelthenm/PrepMaster/PrepMaster.git
   cd PrepMaster
   ```

2. Open `index.html` in your browser:
   - You can double-click it, or
   - Serve it via a simple Python HTTP server:

   ```bash
   python -m http.server
   ```

   Then open `http://localhost:8000` in your browser.

### Option 2: Deploy Online

You can deploy this project easily using:

- **GitHub Pages**
- **Netlify**
- **Vercel**

#### Deploy with GitHub Pages:

1. Push the project to a GitHub repo.
2. In repo settings → Pages → Set source to main branch → `/root`.
3. Your site will be live at `https://yourusername.github.io/PrepMaster`.

## 📦 Optional: Node.js Usage

If you're planning to use Node.js features listed in `package.json`, install dependencies:

```bash
npm install
```

Then start a local dev server (e.g., using `lite-server` or `http-server`):

```bash
npx http-server
```

## 📄 License

MIT License. Free to use and modify.

---

Made with ❤️ by [Luis Then]
