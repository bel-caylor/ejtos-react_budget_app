import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencySelector from './components/CurrencySelector';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container text-light m-3 p-4' style={{ background: '#333333' }}>
                <h1 className='m-3'>Company's Budget Allocation</h1>
                    <div className='d-flex mt-3'>
                        {
                            // Budget component
                            <div className='flex-grow-1'>
                                <Budget />
                            </div>
                        }        

                        {
                            //Remaining component
                            <div className='flex-grow-1'>
                                <Remaining />
                            </div>
                        }        

                        {
                            //ExpenseTotal component
                            <div className='flex-grow-1'>
                                <ExpenseTotal />
                            </div>
                        }

                        {
                            //Currency component
                            <div className='flex-grow-1'>
                                <CurrencySelector />
                            </div>
                        }     
                    </div>
                    <div className='row mt-3 p-3 bg-light'>
                        {
                            //ExpenseList component
                            <div className='flex-grow-1'>
                                <ExpenseList />
                            </div>
                        }         
                    </div>
                    <div className='row mt-3'>
                        {
                            //AllocationForm component
                            <div className='flex-grow-1'>
                                <AllocationForm />
                            </div>
                        }        

                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
