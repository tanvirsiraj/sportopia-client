import { useQuery } from "@tanstack/react-query";

const useSports = () => {
  const { refetch, data: sports = [] } = useQuery({
    queryKey: ["sports"],
    queryFn: async () => {
      const res = await fetch("https://sportopia-server-pi.vercel.app/sports");

      return res.json();
    },
  });

  return [sports, refetch];
};
export default useSports;
