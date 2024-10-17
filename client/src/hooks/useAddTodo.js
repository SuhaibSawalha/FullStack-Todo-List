import { useQueryClient, useMutation } from "react-query";

const useAddTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (todo) => {
      const response = await fetch("http://localhost:3001/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: todo,
        }),
      });
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const addTodo = (todo) => {
    mutation.mutate(todo);
  };

  return { addTodo };
};

export default useAddTodo;
