import React from 'react'

export default props => (
    <header className="my-4">
        <h2 className="font-weight-bold">{props.name} <small className="font-weight-light fz-sm">{props.small}</small></h2>
    </header>
)