import { getAuthUser } from "../lib/api.js";
import { useQuery } from "@tanstack/react-query";

const useAuthUser = () => {
  // tanstack Query
  // get => we use query for get request
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // auth check
  });

  return { isLoading: authUser.isLoading, authUser: authUser.data?.user }; // {? : used, in case if authData is undefiend ,code doesn't break}
};

export default useAuthUser;
