import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import Card from '../UI/Card';
import './ExpenseItem.css';
function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    };

    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date ={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick = {clickHandler}>Change Title</button>
            </Card>
        </div>
    )
}


export default ExpenseItem;