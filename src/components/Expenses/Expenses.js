import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'
const Expenses = (props)=>{
    const [filteredYear,setFilteredYear] = useState('2022')
    const filterChangeHandler = (selectedYear)=>{
            setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filteredYear
    })

   
    return (

        <li>
            
        <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
        <ExpenseChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
        </Card>
        </li>

    )
}
export default Expenses