import {React , useState} from 'react'
import './Expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expense = (props) => {

   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
   }

   const filteredExpenses = props.items.filter(expense => {
     return expense.date.getFullYear().toString() === filteredYear;
   });

  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      
      {/* one way to doing coditional */}

      {/* {filteredExpenses.length === 0 ? <p>No Expenses Found</p> : (filteredExpenses.map((expense) => (
       <ExpenseItem  
         key={expense.id}
         title={expense.title} 
         amount={expense.amount} 
         date={expense.date}
       />
       ))
      )} */}
      
    </Card>
    </li>
  )
}

export default Expense