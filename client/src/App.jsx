import React from 'react'
import GlobalStyle from './styles'
import Menu from './components/Menu'
import Routes from './Routes'


import '@modules/bootstrap/dist/css/bootstrap.min.css'
import '@modules/font-awesome/css/font-awesome.min.css'

export default () => (
    <>
        <Routes >
            <Menu />
        </Routes>
        <GlobalStyle />
    </>
)