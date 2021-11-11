import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { GlobalProvider } from "./GlobalContext";

import Pokemons from "./pages/Pokemons";
import { Footer } from "./Components/Footer";
import { NotFound } from "./pages/NotFound";

export default function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <main className="AppBody">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon/:name?" component={Pokemons} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}
