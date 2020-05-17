import React from 'react'
import IconButton from '@/components/IconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(item => 
            <tr key={item._id}>
                <td className={item.done ? "done" : ""}>{item.description}</td>
                <td>
                    <IconButton 
                        hide={!item.done}
                        style="warning" 
                        icon="undo" 
                        onClick={() => props.handleMarkAsPending(item._id)}
                    />
                    <IconButton 
                        hide={item.done}
                        style="success" 
                        icon="check" 
                        onClick={() => props.handleMarkAsDone(item._id)}
                    />
                    <IconButton 
                        hide={!item.done}
                        style="danger" 
                        icon="trash-o" 
                        onClick={() => props.handleRemove(item._id)}
                    />
                </td>
            </tr>
        )
    }
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}