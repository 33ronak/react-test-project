import React, {useState} from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); 

    const buttonClickHandler = (event) => {
        setTitle("New Title");
    }

    const expenseAmount = props.price;
    const expenseLocation = props.location;

    return (
        <Card className="expense-item">
            <ExpenseDate calendarDate={props.date}/> 
            <div className="expense-item__location">{expenseLocation}</div>
            <div className="expense-item__description">
                <h2>{title}</h2> {}
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <button onClick={buttonClickHandler}>Change Title</button>
        </Card>
    );
} 
export default ExpenseItem;
