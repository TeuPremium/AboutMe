import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
