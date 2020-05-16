import React from 'react'
import PageHeader from '@/components/PageHeader'
import TodoForm from '@/components/Todo/Form'
import TodoList from '@/components/Todo/List'


export default props => {
    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm />
            <TodoList />
        </div>
    )
}