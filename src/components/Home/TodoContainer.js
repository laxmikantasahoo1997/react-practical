import React, { useState } from "react";
import { toast } from "react-toastify";
import { addUser } from "../Service/api";

const TodoContainer = ({ getAllUsers }) => {
  const [user, setUser] = useState("");

  const onValueChange = (e) => {
    setUser(e.target.value);
  };
  const addUserDetails = async (e) => {
    e.preventDefault();
    if (user) {
      await addUser(user);
      getAllUsers();
      setUser("");
    }
      
  };

  return (
    <div className="container">
      <form className="form-inline mt-3" onSubmit={(e) => addUserDetails(e)}>
        <div className="form-group d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control w-75"
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user}
            id="my-input"
            required
          />
          <button className="btn btn-primary ms-5" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoContainer;
