import "./App.css";
import React from "react";
import Home from "../Home";
import Navbar from "../Navbar";
import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <section>
        <Home />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
