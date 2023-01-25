import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = (props) => {

  const saveExpenseDateHandler = (entereExpenseData) =>{
   const expenseData = {
      ...entereExpenseData,
      id: Math.random().toString()
   };
   props.onAddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
    </div>
  )
}

export default NewExpense