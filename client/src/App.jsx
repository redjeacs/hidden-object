import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
