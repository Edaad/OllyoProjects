import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/signupActions";
import Indicator from "../components/Indicator";

export function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.allUsers);
  const [user, setUser] = useState({});
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "username") {
      users.map((user) => {
        if (value !== user.username) {
          setUsernameValid(true);
        } else {
          console.log("username already exists");
          setUsernameValid(false);
        }
      });
    }
  };

  const confirmHandler = (event) => {
    if (event.target.value === user.password) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (usernameValid && passwordValid) {
      dispatch(addUser(user));
      navigate("/");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign up</h1>

      <div className="input-block">
        <form onSubmit={onSubmitHandler}>
          <Input
            name="name"
            type="text"
            label=""
            placeholder="Enter your name"
            onChange={onChangeHandler}
          />

          <div className="indicatorfield">
            <Input
              name="username"
              type="text"
              label=""
              placeholder="Create username"
              onChange={onChangeHandler}
            />

            <Indicator status={usernameValid} notEmpty={user.username} />
          </div>

          <Input
            name="password"
            type="password"
            label=""
            placeholder="Create password"
            onChange={onChangeHandler}
          />
          <div className="indicatorfield">
            <Input
              name="confirm-password"
              type="password"
              label=""
              placeholder="Confirm password"
              onChange={confirmHandler}
            />

            <Indicator status={passwordValid} notEmpty={user.password} />
          </div>

          <button type="submit">Create Account</button>
        </form>
        Already have an account? <Link to="/">Log in</Link>
      </div>
    </>
  );
}
