import React, { useCallback } from "react";
import "./App.css";
import { formMachine } from "./contexts/FormMachine";
import { MockForm } from "./components/organisms";
import { useMachine } from "@xstate/react";

const App = () => {
  const [state, send] = useMachine(formMachine);

  return (
    <div className="App">
      <h2>A test form</h2>
      <div>
        <MockForm />
      </div>
      <div>
        Nice to see you<h2>{state.context.name}</h2>
      </div>
    </div>
  );
};

export default App;
