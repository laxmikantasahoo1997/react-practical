import React, { useState } from "react";
import { editUser } from "../Service/api";
import { useParams } from "react-router-dom";

const TodoList = ({ deleteUserData, users, getAllUsers }) => {
  const [check, setCheck] = useState([]);
  const [user,setUser] = useState('');

  const {id} = useParams();
  console.log({id});

  const multiSelect = (id) => {
    if (check.includes(id)) {
      const result = check.filter((c) => c !== id);
      setCheck(result);
      return;
    }
    setCheck([...check, id]);
  };

  const handleMultiDelete = () => {
    for (let i of check) {
      deleteUserData(i);
    }
    getAllUsers();
    setCheck([]);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value})
}

  const updateUserDetails = async () => {
    await editUser(id,user);
    alert("Updated Successfully");
  };

  return (
    <div className="container">
      {users.length > 0 && (
        <button
          className={`btn btn-danger mt-2 btn-sm align-right ${
            check.length > 1 ? "d-block" : "d-none"
          }`}
          onClick={handleMultiDelete}
        >
          Delete All
        </button>
      )}
      <table className="table mt-5 border border-2 border-dark">
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={(e) => multiSelect(user.id)}
                />
              </th>

              <td
                style={{
                  textDecoration: check.includes(user.id)
                    ? "line-through"
                    : "none",
                }}
              >
                {user.name}
              </td>
              <td>
                <i
                  className="bi bi-pencil text-danger"
                  data-bs-toggle="modal"
                  data-bs-target=".bd-example-modal-sm"
                ></i>
              </td>
              <td>
                <i
                  className="bi bi-trash-fill text-danger"
                  onClick={() => deleteUserData(user.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <div
          className="modal fade bd-example-modal-sm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content p-3">
              <form onSubmit={updateUserDetails}>
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="Enter task to Update"
                  onChange={(e) => onValueChange(e)} 
                  name='user.name' 
                  value={user.name}
                />
             
              
                <button
                  className="btn btn-primary btn-sm w-25 mt-2"
                >
                  Update
                </button>
             
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
