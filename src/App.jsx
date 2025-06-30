import "./App.css";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { MovieContext } from "./context";
import { useState } from "react";


function App() {
  const [cartData, setCartData]=useState([])
  return (
    <>
    <MovieContext.Provider value={{cartData,setCartData}}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          
          <Sidebar />
          <MovieList/>
        </div>
      </main>
      <Footer/>
      </MovieContext.Provider>
    </>
  );
}

export default App;
