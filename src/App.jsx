import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Tokenomics from "./components/Tokenomics";
import About from "./components/About"
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tokenomics />
      <Footer />
      
    </>
  );
}

export default App;
