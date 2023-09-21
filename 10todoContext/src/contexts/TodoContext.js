import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      /* just for references */
      // id: 1,
      // todo: "Todo Msg",
      // isComplete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  completeTodo: (id) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
