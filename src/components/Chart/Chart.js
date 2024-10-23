import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.price;
  });

  const maxValue = Math.max(...expensesOnlyArray);

  const chartData = [
    { expenseMonth: "Jan", totalExpenses: 0 },
    { expenseMonth: "Feb", totalExpenses: 0 },
    { expenseMonth: "Mar", totalExpenses: 0 },
    { expenseMonth: "Apr", totalExpenses: 0 },
    { expenseMonth: "May", totalExpenses: 0 },
    { expenseMonth: "Jun", totalExpenses: 0 },
    { expenseMonth: "Jul", totalExpenses: 0 },
    { expenseMonth: "Aug", totalExpenses: 0 },
    { expenseMonth: "Sep", totalExpenses: 0 },
    { expenseMonth: "Oct", totalExpenses: 0 },
    { expenseMonth: "Nov", totalExpenses: 0 },
    { expenseMonth: "Dec", totalExpenses: 0 }
  ];

  for (const expense of props.chartExpenses) {
    chartData[expense.date.getMonth()].totalExpenses += expense.price;
  }

  return (
    <div className="chart">
      {chartData.map((monthData) => {
        return (
          <ChartBar
            key={monthData.expenseMonth}
            label={monthData.expenseMonth}
            value={monthData.totalExpenses}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
