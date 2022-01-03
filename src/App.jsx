import { useState } from "react";
import "./styles/all.css";
import Intro from "./components/intro/Intro";
import About from "./components/intro/about/About";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import Roadmap from "./components/roadmap/Roadmap";
import Splash from "./components/SplashScreen.js";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ/FAQ";
import Toggle from "./components/toggle/Toggle";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes.js";

const LightTheme = {
  pageBackground: "white",
  titleColor: "black",
  tagLineColor: "black",
};
const DarkTheme = {
  pageBackground: "black",
  titleColor: "white",
  tagLineColor: "white",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Router>
        <ThemeProvider theme={themes[theme]}>
          <Navbar />
          <Splash theme={theme} setTheme={setTheme} />
          <Intro />
          <About />
          <Roadmap />
          <Team />
          <FAQ theme={theme} setTheme={setTheme} />
          <Footer theme={theme} setTheme={setTheme} />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
