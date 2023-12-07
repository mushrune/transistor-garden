import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
    return (
      <div className="App flex flex-col min-h-screen">
          <div className="flex-1 w-[95%] max-w-7xl mx-auto">
              <Outlet />
          </div>
          <Footer />
      </div>
    );
}

export default App;
