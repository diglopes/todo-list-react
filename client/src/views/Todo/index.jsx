import React, { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import TodoForm from '@/components/Todo/Form'
import TodoList from '@/components/Todo/List'

export default props => {
    const [description, setDescription] = useState("")

    const handleAdd = () => {
        console.log('Adding...');   
    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }

    return (
        <div>
            {description}
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm 
                handleAdd={handleAdd} 
                description={description}
                handleDescriptionChange={handleDescriptionChange}
            />
            <TodoList />
        </div>
    )
}