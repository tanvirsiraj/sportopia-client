import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useSelectedclass = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: selectedClassess = [] } = useQuery({
    queryKey: ["selectedclass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedclass?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [selectedClassess, refetch];
};

export default useSelectedclass;
