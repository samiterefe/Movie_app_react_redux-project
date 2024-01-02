import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
       <BrowserRouter>
       <div className="container">
       <Header></Header>
      <Routes>
        
        <Route path="/" exact element={<Home />}>
        <Route path="/movie/:imdbID" component={MovieDetail} />
        <Route component={PageNotFound} />
        </Route>
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
   
        
      
     
    </div>
  );
}

export default App;
