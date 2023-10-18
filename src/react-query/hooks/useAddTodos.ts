import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (todoToSave) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      // 1 - Invalidate cache - cause refresh on specified keys
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS,
      // });

      //2 - Update data in cache directly
      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        todoToSave,
        ...todos,
      ]);
      onAdd();
      return { previousTodos };
    },
    onSuccess: (savedTodo, todoToSave) => {
      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (savedTodo === todo ? todoToSave : todo))
      );
    },
    onError: (error, todoToSave, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodos;
