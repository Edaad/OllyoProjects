import { React, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/signupActions";

export function Signup() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    // setUser({ ...user, [name]: value });

    // const newUser = {
    //     ...user,
    //     [name] : value
    // };

    // setUser(newUser);

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
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

          <Input
            name="username"
            type="text"
            label=""
            placeholder="Create a username"
            onChange={onChangeHandler}
          />

          <Input
            name="password"
            type="password"
            label=""
            placeholder="Create a password"
            onChange={onChangeHandler}
          />

          <button type="submit">Create Account</button>
        </form>
        Already have an account? <Link to="/">Log in</Link>
      </div>
    </>
  );
}
