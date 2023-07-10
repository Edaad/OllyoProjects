import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export function Profile() {
  const { payload } = useSelector((state) => state.currentUser);
  const { users } = useSelector((state) => state.allUsers);

  users.map((user) => {
    if (user.username === payload) {
      const name = user.name;
    }
  });
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Profile</h1>

      <div>Hi {name},</div>
    </>
  );
}
