import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;