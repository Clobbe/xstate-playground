import { createMachine } from "xstate";

export const formMachine = createMachine<
  {
    name: [];
  },
  { type: "SUBMIT" } | { type: "SUCCESS" } | { type: "ERROR" }
>({
  id: "form",
  initial: "INITIAL",
  context: { name: [] },
  states: {
    INITIAL: {},
    SUBMIT: {},
    SUCCESS: {},
    ERROR: {},
  },
});
