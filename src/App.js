import { useState, createContext, useEffect, useMemo } from "react";
import "./App.css";
import { colors, themeColors } from "./Data/Data.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Portfolio/Projects/Projects";
import PageNotFound from "./Components/PageNotFound";

// Accent colour used for the inline illustrations when no accent is picked.
// Mirrors --theme-color in index.css for the matching theme.
const DEFAULT_ACCENT = { light: "#222222", dark: "#ff9d9d" };

export const colorsStore = createContext(DEFAULT_ACCENT.light);

const prefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: dark)").matches;

function App() {
  // The background theme: "mainBody" (light), "dark", or one of the palettes
  // in `colors`. Only ever one at a time — they all set --main-color.
  const [selectedColor, setSelectedColor] = useState(
    () => localStorage.getItem("selectedColor") || (prefersDark() ? "dark" : "mainBody")
  );

  // The accent class, e.g. "pinky". Sets --theme-color on top of the theme.
  const [accentClass, setAccentClass] = useState(
    () => localStorage.getItem("accentClass") || ""
  );

  const [settings, setSettings] = useState(false);

  const isDark = selectedColor === "dark";

  useEffect(() => {
    localStorage.setItem("selectedColor", selectedColor);
    localStorage.setItem("accentClass", accentClass);
  }, [selectedColor, accentClass]);

  // Accents are theme-specific: the dark set is too bright for the light
  // theme and vice versa. Derived, so it can never drift out of sync with
  // the theme the way a separate state value could.
  const accentOptions = useMemo(
    () =>
      themeColors.filter(
        (themeColor) => themeColor.category === (isDark ? "dark" : "mainBody")
      ),
    [isDark]
  );

  // The palettes in `colors` replace the light/dark theme entirely, so there
  // is no matching accent set to offer for them.
  const showAccents = selectedColor === "dark" || selectedColor === "mainBody";

  const globalColor =
    themeColors.find(
      (themeColor) => themeColor.colorClassName === accentClass
    )?.colorCode ?? (isDark ? DEFAULT_ACCENT.dark : DEFAULT_ACCENT.light);

  const toggleDayNight = () => {
    setSelectedColor(isDark ? "mainBody" : "dark");
    // The current accent belongs to the theme we are leaving.
    setAccentClass("");
  };

  // "mainBody" is both the base class and the name of the light theme, so
  // dedupe rather than emitting it twice.
  const themeClassName = [
    ...new Set(["mainBody", selectedColor, accentClass].filter(Boolean)),
  ].join(" ");

  return (
    <Router>
      <colorsStore.Provider value={globalColor}>
        <div className={themeClassName}>
          <div className={settings ? "settings settingsActive " : "settings "}>
            <button
              type="button"
              className="settingIcon"
              onClick={() => setSettings(!settings)}
              aria-expanded={settings}
              aria-label={settings ? "Close theme settings" : "Open theme settings"}
            >
              <i className="fa fa-gear" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="dayNightIcon"
              onClick={toggleDayNight}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              <i
                className={isDark ? "bi bi-brightness-high" : "bi bi-moon"}
                aria-hidden="true"
              ></i>
            </button>
            <div className="colorsContainer ">
              <div className="themeContainer">
                <h5>Theme</h5>
                <div className="themeColors">
                  {colors.map((color) => (
                    <button
                      type="button"
                      key={color.id}
                      className="colors"
                      onClick={() => setSelectedColor(color.colorName)}
                      aria-pressed={selectedColor === color.colorName}
                      aria-label={`${color.colorName} theme`}
                      style={{ backgroundColor: color.colorCode }}
                    ></button>
                  ))}
                </div>
              </div>
              {showAccents ? (
                <div className="selectedColors">
                  <h5>Colors</h5>
                  <div className="frontColors">
                    {accentOptions.map((themeColor) => (
                      <button
                        type="button"
                        key={themeColor.id}
                        className="colors"
                        onClick={() => setAccentClass(themeColor.colorClassName)}
                        aria-pressed={accentClass === themeColor.colorClassName}
                        aria-label={`${themeColor.colorClassName} accent colour`}
                        style={{ backgroundColor: themeColor.colorCode }}
                      ></button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </colorsStore.Provider>
    </Router>
  );
}

export default App;
