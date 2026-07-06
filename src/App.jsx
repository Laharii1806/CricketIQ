import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Players from "./pages/Players";
import Analytics from "./pages/Analytics";
import Predictor from "./pages/Predictor";
import AIEngine from "./components/AIEngine";

import AIChatBox from "./components/AIChatBox";

function App() {
  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/predictor" element={<Predictor />} />
      </Routes>
      <AIEngine/>
      <AIChatBox/>
    </>
  );
}



export default App;