import React, {useState} from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); 

    const expenseAmount = props.price;
    const expenseLocation = props.location;

    return (
        <Card className="expense-item">
            <ExpenseDate calendarDate={props.date}/> 
            <div className="expense-item__location">{expenseLocation}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
} 
export default ExpenseItem;
