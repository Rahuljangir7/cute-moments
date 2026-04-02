import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Yes from "./pages/Yes";
import Timeline from "./pages/Timeline";
import LoveCalculator from "./pages/LoveCalculator";
import LoveLetter from "./pages/LoveLetter";
import Countdown from "./pages/Countdown";
import PhotoGallery from "./pages/PhotoGallery";
import PromiseJar from "./pages/PromiseJar";
import CompatibilityQuiz from "./pages/CompatibilityQuiz";
import MusicPlayer from "./pages/MusicPlayer";
import LoveMap from "./pages/LoveMap";
import Scrapbook from "./pages/Scrapbook";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/proposal" element={<Home />} />
      <Route path="/yes" element={<Yes />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/love-calculator" element={<LoveCalculator />} />
      <Route path="/love-letter" element={<LoveLetter />} />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/gallery" element={<PhotoGallery />} />
      <Route path="/promise-jar" element={<PromiseJar />} />
      <Route path="/quiz" element={<CompatibilityQuiz />} />
      <Route path="/music" element={<MusicPlayer />} />
      <Route path="/map" element={<LoveMap />} />
      <Route path="/scrapbook" element={<Scrapbook />} />
    </Routes>
  );
}

export default App;
