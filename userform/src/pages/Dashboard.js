import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <Link to="/profile">Profile </Link>
      <div className="input-block"></div>
    </>
  );
}
