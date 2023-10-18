import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGeneric = <T>(
  key: unknown,
  endpoint: string,
  queryOptions?: { [key: string]: any }
) => {
  const fetchData = () => axios.get<T[]>(endpoint).then((res) => res.data);

  return useQuery<T[], Error>({
    queryKey: [key],
    queryFn: fetchData,
    ...queryOptions,
  });
};

export default useGeneric;
