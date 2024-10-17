import { useQuery } from "react-query";

const useGetTodos = () => {
  const { isLoading, error, data } = useQuery("todos", async () => {
    const response = await fetch("http://localhost:3001/api/todos");
    return response.json();
  });

  return { isLoading, error, todos: data };
};

export default useGetTodos;
