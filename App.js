import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  </>
);

export default App;
