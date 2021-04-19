import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const items = props.items;
  return (
    <div className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
