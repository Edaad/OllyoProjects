import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedinUser } from "../actions/loginActions";
import Input from "../components/Input";

export function Login() {
  const dispatch = useDispatch();
  let isLoggedIn = false;

  const { users } = useSelector((state) => state.allUsers);

  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault();
    users.map((user) => {
      let output;
      if (
        user.username === currentUser.username &&
        user.password === currentUser.password
      ) {
        isLoggedIn = true;
        output = console.log("Successful Login");
        dispatch(loggedinUser(currentUser.username));
        navigate("/dashboard");
      } else if (isLoggedIn === false) {
        output = console.log("Incorrect username or password");
      }

      return output;
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCurrentUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login</h1>

      <div className="input-block">
        <form onSubmit={handleLoginClick}>
          <Input
            name="username"
            type="text"
            label=""
            placeholder="Username"
            onChange={onChangeHandler}
          />

          <Input
            name="password"
            type="password"
            label=""
            placeholder="Password"
            onChange={onChangeHandler}
          />

          <button type="submit">Login</button>
        </form>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}
