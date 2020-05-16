import React from 'react'
import { Link } from 'react-router-dom'

export default props => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> Todo App
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <li className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Tarefas</Link>
                    </li>
                    <li className="navbar-nav">
                        <Link to="/about" className="nav-item nav-link active">Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}