import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navigator from "./Components/Navigator/Navigator";

function App() {
    return (
      <div className="App w-[100%] flex flex-col min-h-screen">
          <Navigator />
          <div className="flex-1 w-full sm:w-[90%] max-w-7xl mx-auto">
              <Outlet />
          </div>
          <Footer />
      </div>
    );
}

export default App;
