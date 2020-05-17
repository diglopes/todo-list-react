import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PageHeader from '@/components/PageHeader'
import TodoForm from '@/components/Todo/Form'
import TodoList from '@/components/Todo/List'

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:3004" : ""
const url = baseUrl + '/api/todo'

export default props => {
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        fetchTasks()        
    }, [])

    const handleAdd = () => {
         axios.post(url, {description}).then(({data}) => {
            setDescription("")
            fetchTasks()
         })
    }

    const handleRemove = (id) => {
        const isConfirmed = confirm('Realmente deseja excluir essa tarefa?')
        if(isConfirmed) {
            axios.delete(`${url}/${id}`).then(() => {
                setTasks(getUpdatedList({ _id: id }, true))
            })
        }
    }

    const handleMarkAsDone = (id) => {
        axios.put(`${url}/${id}`, { done: true }).then(({data}) => {
            setTasks(getUpdatedList(data))
        })
    }
    
    const handleMarkAsPending = (id) => {
        axios.put(`${url}/${id}`, { done: false }).then(({data}) => {
            setTasks(getUpdatedList(data))
        })
    }

    const getUpdatedList = (data, remove) => {
        const index = tasks.findIndex(task => task._id === data._id)
        const updatedTaskList = [...tasks]
        remove ? updatedTaskList.splice(index, 1) : updatedTaskList[index] = data        
        return updatedTaskList
    }

    const fetchTasks = (description = "") => {
        const query = description ? `&description__regex=/${description}/i` : ""                
        axios.get(`${url}?sort=-createdAt${query}`).then(({data}) => {
            setTasks(data)
        })
    }

    const handleSearch = () => {
        console.log('teste...');
        
        fetchTasks(description)
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
                handleSearch={handleSearch}
            />
            <TodoList 
                list={tasks} 
                handleRemove={handleRemove}
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
            />
        </div>
    )
}