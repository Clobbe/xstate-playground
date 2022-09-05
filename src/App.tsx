import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMachine } from "@xstate/react";
import { promiseMachine } from "./contexts/PromiseMachine";

const App = () => {
  const [state, send] = useMachine(promiseMachine);
  return (
    <div>
      <div>
        {state.matches("pending") && <p>Loading...</p>}
        {state.matches("rejected") && <p>Promise Rejected</p>}
        {state.matches("resolved") && <p>Promise Resolved</p>}
      </div>
      <div>
        <button onClick={() => send("RESOLVE")}>Send Resolve</button>
        <button onClick={() => send("REJECT")}>Send Reject</button>
      </div>
    </div>
  );
};

export default App;
