import React from 'react'
import { BrowserRouter, Route, Switch ,Redirect } from 'react-router-dom'
import Todo from './views/Todo'
import About from './views/About'

export default (props) => (
    <BrowserRouter>
        {props.children}
        <div className="container">
            <Switch>
                <Route path="/" component={Todo} exact />
                <Route path="/about" component={About}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    </BrowserRouter>
)