import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Work } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Home />
        <About />
        <Work />

        <Contact />



        <Footer />
      </Router>
    </div>
  );
}

export default App;