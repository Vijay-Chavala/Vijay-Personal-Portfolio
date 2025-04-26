import { useState, createContext, useEffect } from "react";
import "./App.css";
import { colors, themeColors } from "./Data/Data.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
// import { Container } from "react-bootstrap";
import Home from "./Components/Home/Home";
// import AboutMe from "./Components/AboutMe/AboutMe";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Portfolio/Projects/Projects";
import PageNotFound from "./Components/PageNotFound";

export const colorsStore = createContext();

function App() {
  const [selectedColor, setSelectedColor] = useState("mainBody");
  const [themeClass, setThemeClass] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [settings, setSettings] = useState(false);
  const [myThemeColors, setMyThemeColors] = useState([]);
  const [globalColor, setGlobalColor] = useState("#222222");

  // console.log(globalColor);
  // default day mode colors
  useEffect(() => {
    const dayColors = themeColors.filter(
      (themeColor) => themeColor.category === "mainBody"
    );
    setMyThemeColors(dayColors);
  }, []);

  //toggle day night

  const toggleDayNight = () => {
    darkMode ? setSelectedColor("dark") : setSelectedColor("mainBody");
    setDarkMode(!darkMode);

    //filter colors based on day night and setting filtered theme colors to newColors

    const newColors = themeColors.filter(
      (themeColor) => themeColor.category !== selectedColor
    );
    // to avoid dark colors to apply day theme
    if (selectedColor === "dark") {
      setThemeClass(myThemeColors.colorClassName);
      setGlobalColor("#222222");
    }
    if (selectedColor === "mainBody") {
      setThemeClass(myThemeColors.colorClassName);
      setGlobalColor("#ffcaca");
    }

    console.log(myThemeColors);
    console.log(selectedColor);
    console.log(newColors);
    setMyThemeColors(newColors);
  };

  //applying clicked color to selectedColor state(Background Theme)
  const applyColor = (color) => {
    console.log("applying clicked color" + color.colorName);
    setSelectedColor(color.colorName);
  };

  const filterColors = (themeColor) => {
    if (themeColor.category === selectedColor) {
      console.log("Current selected color " + selectedColor);
      setThemeClass(themeColor.colorClassName);
      setGlobalColor(themeColor.colorCode);

      console.log("className " + themeColor.colorClassName);
      console.log("colorCode " + themeColor.colorCode);
    } else {
      setThemeClass("");
    }
  };

  return (
    <Router>
      <colorsStore.Provider value={[globalColor, setGlobalColor]}>
        <div className={`mainBody ${selectedColor} ${themeClass}`}>
          <div className={settings ? "settings settingsActive " : "settings "}>
            <div
              className="settingIcon "
              onClick={() => setSettings(!settings)}
            >
              <i className="fa fa-gear "></i>
            </div>
            <div className="dayNightIcon" onClick={() => toggleDayNight()}>
              <i
                className={
                  selectedColor === "dark"
                    ? "bi bi-brightness-high"
                    : "bi bi-moon"
                }
              ></i>
            </div>
            <div className="colorsContainer ">
              <div className="themeContainer">
                <h5>Theme</h5>
                <div className="themeColors">
                  {colors.map((color) => {
                    return (
                      <div
                        key={color.id}
                        className="colors"
                        onClick={() => applyColor(color)}
                        style={{ backgroundColor: `${color.colorCode}` }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              {selectedColor === "dark" ||
              (selectedColor === "mainBody" && myThemeColors.length < 4) ? (
                <div className="selectedColors">
                  <h5>Colors</h5>
                  <div className="frontColors">
                    {myThemeColors.map((themeColor) => {
                      return (
                        <div
                          key={themeColor.id}
                          className="colors"
                          onClick={() => filterColors(themeColor)}
                          style={{ backgroundColor: `${themeColor.colorCode}` }}
                        ></div>
                      );
                    })}
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
