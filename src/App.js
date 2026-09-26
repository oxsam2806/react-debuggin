import React, { useState } from "react";

import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [name, setName] = useState("Samuel");

  const changeName = () => {
    setName("Christinah");
  };

  return (
    <div className="app">

      <header>
        <p className="subtitle">
          REACT DEVELOPER TOOLS
        </p>

        <h1>Debugging Practice</h1>

        <p className="intro">
          Inspect the components, props and state
          using React Developer Tools.
        </p>
      </header>

      <section>

        <UserProfile
          name={name}
          profession="Full Stack Software Engineer"
          age={26}
        />

        <button
          className="main-button"
          onClick={changeName}
        >
          Change Name
        </button>

        <Counter />

      </section>

    </div>
  );
}

export default App;