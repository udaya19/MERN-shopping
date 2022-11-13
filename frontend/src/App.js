import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import "./styles/app.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
