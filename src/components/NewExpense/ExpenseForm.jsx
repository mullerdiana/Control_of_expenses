import { useState } from "react";

import "./ExpenseForm.css";

export const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const InputChangeHandler = (e) => {
      const {name, value} = e.target;
      console.log('enteredTitle',userInput.enteredTitle);
      console.log('enteredAmount',userInput.enteredAmount);
      console.log('enteredDate',userInput.enteredDate);
    setUserInput((prevState)=>{
        return {
            ...prevState, [name]: value,
        };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = userInput;
    console.log(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={InputChangeHandler} name="enteredTitle" value={userInput.enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={InputChangeHandler}  name="enteredAmount" value={userInput.enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={InputChangeHandler}  name="enteredDate" value={userInput.enteredDate}/>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit" value="Submit">Add expense</button>
      </div>
    </form>
  );
};
