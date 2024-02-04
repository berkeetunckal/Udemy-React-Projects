import { useState } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootsrap from "./images/bootstrap5.png";
import CcSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
function App() {
  return (
    <>
      <div className="App">
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Kurslarım</p>
          </div>
        </section>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={Angular}
                  title="Angular"
                  description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid temporibus at, quae illo reiciendis rem animi provident dolorum dolor numquam autem. 
            Nulla modi at aperiam in deserunt! Aperiam, officiis. Similique!
            "
                />
              </div>
              <div className="column">
                <Course
                  image={Bootsrap}
                  title="Boostrap"
                  description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid temporibus at, quae illo reiciendis rem animi provident dolorum dolor numquam autem. 
            Nulla modi at aperiam in deserunt! Aperiam, officiis. Similique!
            "
                />
              </div>
              <div className="column">
                <Course
                  image={KompleWeb}
                  title="Komple Web"
                  description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid temporibus at, quae illo reiciendis rem animi provident dolorum dolor numquam autem. 
            Nulla modi at aperiam in deserunt! Aperiam, officiis. Similique!
            "
                />
              </div>
              <div className="column">
                <Course
                  image={CcSharp}
                  title="Frontend"
                  description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid temporibus at, quae illo reiciendis rem animi provident dolorum dolor numquam autem. 
            Nulla modi at aperiam in deserunt! Aperiam, officiis. Similique!
            "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
