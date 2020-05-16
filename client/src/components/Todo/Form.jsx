import React from 'react'
import GridColumn from '@/components/GridColumn'

export default props => (
    <div role="form">
        <div className="row">
            <GridColumn cols="12 9 10">
                <input 
                    type="text" 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                />
            </GridColumn>

            <GridColumn cols="12 3 2" className="col-sm-12 col-md-3 col-lg-2">
                <button className="btn btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
            </GridColumn>
        </div>
    </div>
)