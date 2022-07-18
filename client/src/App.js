import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Details from "./components/CardDetail/CardDetail";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/countries" element={<Home />} />
        <Route path="/countries/:id" element={<Details />} />
        <Route path="/activity" element={<Form />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
