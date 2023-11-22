import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://sportopia-server-pi.vercel.app/users");
    return res.json();
  });
  return (
    <div>
      <h3 className="text-3xl font-semibold">Total Users : {users.length}</h3>
    </div>
  );
};

export default AllUsers;
