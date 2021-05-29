import React,{ useContext,useState } from "react";
import {AppContext} from '../context/AppContext';
// import ViewBudget from './ViewBudget';
// import EditBudget from './EditBudget';


const Budget = () => {
  // we are using destructing and assigning state to a variable called budget here
  const { budget, dispatch } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(budget);

  const handleSaveClick = () =>{
    dispatch({
      type:'SET_BUDGET',
      payload:value
    })
    setIsEditing(false)
  }

  const handleEdit =() =>{
    setIsEditing(true)
  }
  return (
    <div className="alert alert-secondary align-items-center p-3 d-flex justify-content-between">

    { isEditing ? (
<>
      <input
      type='number'
      id='name'
			value={value}
      onChange={(event) => setValue(event.target.value)}
      >
      </input>

      <button
      type='button'
      class='btn btn-primary'
      onClick={() => handleSaveClick(value)}>
        Save
      </button>
      </>
    ):
    (

    <>
      <span>Budget: ₹{budget}</span>
      <button
      type='button'
      class='btn btn-primary'
      onClick={() => handleEdit()}>
       Edit
      </button>
      </>
   
    )
}
   
      {/* <span>Budget: ₹{budget}</span> */}
    </div>
  );
};

export default Budget;
