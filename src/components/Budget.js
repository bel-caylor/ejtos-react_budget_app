import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let budgetLimit = 20000;
        if(event.target.value > budgetLimit) {
            alert("The budget cannot exceed "+ currency + budgetLimit);
            setNewBudget(budgetLimit);
            return;
        }
        if(event.target.value < totalExpenses) {
            alert("The budget cannot be lower then the spending "+ currency + totalExpenses);
            setNewBudget(totalExpenses);
            return;
        }
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span style={{ marginRight: '3px' }}>Budget: {currency + budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
