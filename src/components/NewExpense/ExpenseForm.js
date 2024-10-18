import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmt] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amtChangeHandler = (event) => {
        setEnteredAmt(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle("");
        setEnteredAmt("");
        setEnteredDate("");        
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    ></input>
                </div>

                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        onChange={amtChangeHandler}
                        value={enteredAmount}
                    ></input>
                </div>

                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        min="2023-01-01"
                        max="2024-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    ></input>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
