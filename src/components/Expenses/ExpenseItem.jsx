import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card'
import './ExpenseItem.css';
import { useState } from 'react';

export const ExpenseItem = ({date, title, amount}) => {
  const [titleExpense, setTitleExpense] = useState(title);
 const clickHandler = () => {
    setTitleExpense('clique')
 }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{titleExpense}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
