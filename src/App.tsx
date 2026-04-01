import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Yes from "./pages/Yes";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/proposal" element={<Home />} />
      <Route path="/yes" element={<Yes />} />
    </Routes>
  );
}

export default App;
