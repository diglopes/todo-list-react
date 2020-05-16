import React from 'react'
import GlobalStyle from './styles'
import '@modules/bootstrap/dist/css/bootstrap.min.css'
import '@modules/font-awesome/css/font-awesome.min.css'

export default () => (
    <>
        <h1 className="display-1">Hello</h1>
        <button className="btn btn-info">Click</button>
        <GlobalStyle/>
    </>
)