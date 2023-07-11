import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { React } from "react";

export function Dashboard() {
  let fullName;

  const { username } = useSelector((state) => state.currentUser);
  const { users } = useSelector((state) => state.allUsers);

  users.map((user) => {
    if (user.username === username) {
      fullName = user.name;
    }
  });
  return (
    <>
      <nav>
        <Link to="/profile">Profile </Link>
      </nav>

      <h1 style={{ textAlign: "center" }}>Dashboard</h1>

      <div className="input-block">
        <div>Welcome, {fullName}</div>
      </div>
    </>
  );
}
