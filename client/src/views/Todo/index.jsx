import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PageHeader from '@/components/PageHeader'
import TodoForm from '@/components/Todo/Form'
import TodoList from '@/components/Todo/List'

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:3004" : ""
const url = baseUrl + '/api/todo'

export default props => {
    
    const [description, setDescription] = useState("")

    const handleAdd = () => {
         axios.post(url, {description}).then(({data}) => {
            setDescription("")
         })
    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }

    return (
        <div>
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