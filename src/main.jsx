import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

// Cool ASCII Art Console Message
console.log(
  "%c" +
    " █████╗ ██████╗  ██████╗██╗  ██╗██╗████████╗\n" +
    "██╔══██╗██╔══██╗██╔════╝██║  ██║██║╚══██╔══╝\n" +
    "███████║██████╔╝██║     ███████║██║   ██║   \n" +
    "██╔══██║██╔══██╗██║     ██╔══██║██║   ██║   \n" +
    "██║  ██║██║  ██║╚██████╗██║  ██║██║   ██║   \n" +
    "╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝   ╚═╝   \n" +
    "                                             ",
  "color: #FFD700; font-family: monospace; font-weight: bold; font-size: 12px; line-height: 1.2;"
);

console.log(
  "%c" +
    "██████╗  █████╗ ████████╗██╗  ██╗██╗\n" +
    "██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██║\n" +
    "██████╔╝███████║   ██║   ███████║██║\n" +
    "██╔══██╗██╔══██║   ██║   ██╔══██║██║\n" +
    "██║  ██║██║  ██║   ██║   ██║  ██║██║\n" +
    "╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝\n" +
    "                                     \n" +
    "       🚀  DEVELOPMENT  🚀       ",
  "color: #FFD700; font-family: monospace; font-weight: bold; font-size: 12px; line-height: 1.2;"
);

console.log(
  "%c═══════════════════════════════════════════════════════",
  "color: #FFD700; font-family: monospace; font-weight: bold;"
);

console.log(
  "%c🌐 Portfolio: https://architrathi.ca",
  "color: #10B981; font-size: 12px;"
);

console.log(
  "%c⚡ Tech Stack: React + Vite + Tailwind + Framer Motion",
  "color: #8B5CF6; font-size: 12px;"
);

console.log("%c💼 Vancouver, Canada | 🇨🇦", "color: #F59E0B; font-size: 12px;");

console.log(
  "%c🚀 Ready to build something amazing? Let's connect!",
  "color: #EF4444; font-size: 12px;"
);

console.log(
  "%c═══════════════════════════════════════════════════════",
  "color: #FFD700; font-family: monospace; font-weight: bold;"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
