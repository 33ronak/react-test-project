import "./ExpenseItems.css"

function ExpenseItems() {
    const expenseDate  = new Date(2023, 7,15).toISOString();
    const expenseTitle = "Book";
    const expenseAmount = 10;
    return (
        <div className = "expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__location">Delhi</div>
            <div className="expense-item__description" >
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price" >{expenseAmount}$</div>
            </div>
        </div>
    );
} 
export default ExpenseItems;