import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
         const expenseData ={
            ...enteredExpenseData,
            id : Math.random().toString()
         }
         props.onAddExpenseData(expenseData)
         setIsEditing(false)
    }

    const[isEditing,setIsEditing] = useState(false)

    const editHandler = ()=>{
        setIsEditing(true)
    }

    const stopEditingHandler = ()=>{
        setIsEditing(false)
    }

return(
    <div className='new-expense'>
       {!isEditing && <button onClick={editHandler}>Add expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
)
}

export default NewExpense