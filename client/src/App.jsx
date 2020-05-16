import React from 'react'
import GlobalStyle from './styles'
import Todo from './views/Todo'
import About from './views/About'

import '@modules/bootstrap/dist/css/bootstrap.min.css'
import '@modules/font-awesome/css/font-awesome.min.css'

export default () => (
    <>
        <Todo />
        <About />
        <GlobalStyle/>
    </>
)