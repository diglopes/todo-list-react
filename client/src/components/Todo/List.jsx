import React from 'react'
import IconButton from '@/components/IconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(item => 
            <tr key={item._id}>
                <td>{item.description}</td>
               
            </tr>
        )
    }
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}