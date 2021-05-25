import React,{ useContext } from "react";
import {AppContext} from '../context/AppContext';

const Budget = () => {
  // we are using destructing and assigning state to a variable called budget here
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <span>Budget: ₹{budget}</span>
    </div>
  );
};

export default Budget;
