import { createMachine, assign } from "xstate";

export const formMachine = createMachine({
  id: "formMachine",
  context: {
    name: "No Name"
  },
  on: {
    SUBMIT: {
      actions: assign({
        name: "submit"
      })
    },
    ERROR: {
      actions: assign({
        name: () => "Oh no... something went wrong ¯_(ツ)_/¯</"
      })
    },
    RESET: {
      actions: assign({
        name: ""
      })
    }
  }
});
