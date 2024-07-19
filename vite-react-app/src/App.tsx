import * as React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";

const App: React.FC = () => {
    return (
      <div className="App w-[100%] flex flex-col min-h-screen">
          <Navigator />
          <div className="flex-1 w-full sm:w-[90%] max-w-7xl mx-auto p-2 pt-0">
              <Outlet />
          </div>
          <Footer />
      </div>
    );
}

export default App;
