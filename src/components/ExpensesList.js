import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = () =>{
    const expenses= [
        { id:123123, name:'Shopping', cost:50 },
        { id:123123, name:'Holiday', cost:300 },
        { id:123123, name:'Transportation', cost:70 },
        { id:123123, name:'Fuel', cost:40 },
        { id:123123, name:'Child Care', cost:500 },
    ]
    return(
        <ul className='list-group'>
            {expenses.map((expense) =>(
                <ExpenseItem 
                id={expense.id} 
                name={expense.name} 
                cost={expense.cost}/>
            ))}
        </ul>
    )
}

export default ExpensesList ;