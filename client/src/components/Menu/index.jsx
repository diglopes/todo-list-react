import React from 'react'

export default props => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i> Todo App
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <li className="navbar-nav">
                        <a className="nav-item nav-link active" href="#/todos">Tarefas</a>
                    </li>
                    <li className="navbar-nav">
                        <a className="nav-item nav-link active" href="#/about">Sobre</a>
                    </li>
            </ul>
            </div>
        </nav>
    )
}