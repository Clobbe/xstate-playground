import React from "react";
import "./App.css";
import { useMachine } from "@xstate/react";
import { formMachine } from "./contexts/FormMachine";
import { MockForm } from "./components/organisms";

const App = () => {
  const [state, send] = useMachine(formMachine);
  // const onSubmit = useCallback((data) => {
  //   //skicka data från form till FormMachine
  //   send("STORE_FORM_DATA", data);
  // }, []);

  const onSubmit = (data: string) => {
    console.log("onSubmit called", data);
  };

  return (
    <div className="App">
      <h2>A test form</h2>
      {state && (
        <div>
          <MockForm onSubmit={onSubmit} />
        </div>
      )}
    </div>
  );
};

export default App;
