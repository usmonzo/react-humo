import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </div>
  );
}

export default App;
