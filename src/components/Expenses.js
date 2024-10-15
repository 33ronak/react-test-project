import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
  return (
    <div className = "expenses">
      {
        props.expenses.map((expense, i) =>{
          return (
            <ExpenseItem 
            key = {expense.id}
            date = {expense.date} 
            title = {expense.title} 
            price = {expense.price} 
            location = {expense.location}
            />
          );
        })
      }
    </div>
  );
} 

export default Expenses; 