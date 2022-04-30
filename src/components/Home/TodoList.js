import React,{useState} from 'react';

const TodoList = ({deleteUserData,users,getAllUsers,editUserdetails}) => {
  const [check,setCheck] = useState([]);
  
  const multiSelect = (id)=>{
    if(check.includes(id)){
      const result =  check.filter(c=>c!==id);
      setCheck(result);
      return ;
    }
    setCheck( [...check,id]);
  }

  const handleMultiDelete = () =>{
    for(let i of check){
      deleteUserData(i);
    }
    getAllUsers();
    setCheck([]);
  }

  return (
    <div className='container'>
      {
        users.length >0 && <button className={`btn btn-danger mt-2 btn-sm align-right ${check.length >1 ? 'd-block':'d-none'}`}  onClick={handleMultiDelete}>Delete All</button>
      }
        <table className="table mt-5 border border-2 border-dark">
  <tbody>
    {
        users.map(user=>(
            <tr key={user.id}>
      <th scope="row" >
          <input type="checkbox" className='form-check-input'  onChange={(e)=>multiSelect(user.id)}  />
      </th>
     
      <td style={{textDecoration: check.includes(user.id) ? "line-through":'none'}}>{user.name}</td>
      <td>
      <i className="bi bi-pencil" onClick={() => editUserdetails(user.id)}></i>
      </td>
      <td>
          <i className='bi bi-trash-fill text-danger' onClick={() => deleteUserData(user.id)}></i>
      </td>
    </tr>
        ))
    }

  </tbody>
</table>
    </div>
  )
}

export default TodoList;