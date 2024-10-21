import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);    
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className = "expenses">
      <ExpensesFilter 
      selected ={filteredYear} 
      onChangeFilter={changeFilterHandler} />
      {
        filteredExpenses.map((expense, i) =>{
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
    </Card>
  );
} 

export default Expenses; 