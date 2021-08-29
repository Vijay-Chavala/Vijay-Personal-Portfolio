import { useState, createContext, useEffect } from "react";
import "./App.css";
import { colors, themeColors } from "./Data/Data.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
// import { Container } from "react-bootstrap";
import Home from "./Components/Home/Home";
// import AboutMe from "./Components/AboutMe/AboutMe";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Portfolio/Projects/Projects";

export const colorsStore = createContext();

function App() {
  const [selectedColor, setSelectedColor] = useState("dark");
  const [themeClass, setThemeClass] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [settings, setSettings] = useState(false);
  const [myThemeColors, setMyThemeColors] = useState(themeColors);

  //toggle day night

  const toggleDayNight = () => {
    !darkMode ? setSelectedColor("dark") : setSelectedColor("mainBody");
    setDarkMode(!darkMode);

    //filter colors

    const newColors = themeColors.filter(
      (themeColor) => themeColor.category === selectedColor
    );
    console.log(newColors);
    setMyThemeColors(newColors);
  };

  //applying clicked color to selectedColor state
  const applyColor = (color) => {
    setSelectedColor(color.colorName);
  };
  const filterColors = (themeColor) => {
    if (themeColor.category === selectedColor) {
      setThemeClass(themeColor.colorClassName);
    } else {
      setThemeClass("");
    }
  };

  return (
    <Router>
      {/* <colorsStore.Provider> */}
      <div className={`mainBody ${selectedColor} ${themeClass}`}>
        <div className={settings ? "settings settingsActive " : "settings "}>
          <div className="settingIcon " onClick={() => setSettings(!settings)}>
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
          <div className="colorsContainer">
            <div className="themeContainer ms-3">
              <h5>Theme</h5>
              <div
                className="colors"
                onClick={() => setSelectedColor("mainBody")}
                style={{ backgroundColor: "#fff" }}
              ></div>
              {colors.map((color) => {
                return (
                  <div
                    className="colors"
                    onClick={() => applyColor(color)}
                    style={{ backgroundColor: `${color.colorCode}` }}
                  ></div>
                );
              })}
            </div>
            <div className="selectedColors ms-3">
              <h5>Colors</h5>

              {myThemeColors.map((themeColor) => {
                return (
                  <div
                    className="colors"
                    onClick={() => filterColors(themeColor)}
                    style={{ backgroundColor: `${themeColor.colorCode}` }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>

        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/:id" component={Projects} />
        </Switch>
      </div>
      {/* </colorsStore.Provider> */}
    </Router>
  );
}

export default App;
