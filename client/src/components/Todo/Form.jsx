import React from 'react'

export default props => (
    <div role="form">
        <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-10">
                <input 
                    type="text" 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    />
            </div>

            <div className="col-sm-12 col-md-3 col-lg-2">
                <button className="btn btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
)