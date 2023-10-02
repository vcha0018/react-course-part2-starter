import useGeneric from "./useGeneric";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () =>
  useGeneric<Todo>("todos", "https://jsonplaceholder.typicode.com/todos", {
    staleTime: 10 * 1000,
  });

export default useTodos;
