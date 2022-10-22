import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import "./App.css";
import FirstNavbar from "./components/FirstNavbar/FirstNavbar";
import Header from "./components/Header/Header";
import Main from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChakraProvider>
        <FirstNavbar />
        <Navbar />
        <Header />
        <Main />
      </ChakraProvider>
    </div>
  );
}

export default App;
