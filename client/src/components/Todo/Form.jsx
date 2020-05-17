import React from 'react'
import GridColumn from '@/components/GridColumn'
import IconButton from '@/components/IconButton'

export default props => (
    <div role="form">
        <div className="row">
            <GridColumn cols="12 9 10">
                <input 
                    type="text" 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={e => props.handleDescriptionChange(e)}
                />
            </GridColumn>

            <GridColumn cols="12 3 2" className="col-sm-12 col-md-3 col-lg-2">
                <IconButton style="primary" icon="plus" onClick={props.handleAdd}/>
                <IconButton style="info" icon="search" onClick={props.handleSearch}/>
            </GridColumn>
        </div>
    </div>
)