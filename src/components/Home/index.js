
import TodoContainer from "./TodoContainer";
import TodoList from "./TodoList";
import React,{useState,useEffect} from 'react';
import { getUsers, deleteUser } from '../Service/api';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      getAllUsers();
      return ()=>setUsers([]);
  }, []);

  const deleteUserData = async (id) => {
      await deleteUser(id);
      getAllUsers();
  }

  const getAllUsers = async () => {
      let response = await getUsers();
      setUsers(response.data);
  }
 


  return (
<div className="container">
<div className='text-center d-flex h-100 d-flex justify-content-center align-items-center bg-dark'>
  
     <div className="bg-white rounded rounded-3 p-5 w-75">
     <h1 style={{marginRight:'80%'}}>Todo List</h1>
      <TodoContainer getAllUsers={getAllUsers}/>
      <TodoList users={users} deleteUserData={deleteUserData} getAllUsers={getAllUsers} />
     </div>
    </div>
</div>
  );
}

export default Home;
