import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen mx-auto overflow-x-hidden bg-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
