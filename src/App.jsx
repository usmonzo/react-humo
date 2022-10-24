import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import FirstNavbar from "./components/FirstNavbar/FirstNavbar";
import Header from "./components/Header/Header";
import Main from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <FirstNavbar />
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
