import React from 'react'
import { connect } from 'react-redux'
import GridColumn from '@/components/GridColumn'
import IconButton from '@/components/IconButton'

const Form = props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
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
                        onKeyUp={keyHandler}
                    />
                </GridColumn>
    
                <GridColumn cols="12 3 2" className="col-sm-12 col-md-3 col-lg-2">
                    <IconButton style="primary" icon="plus" onClick={props.handleAdd}/>
                    <IconButton style="info" icon="search" onClick={props.handleSearch}/>
                    <IconButton style="light" icon="close" onClick={props.handleClear}/>
                </GridColumn>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ description: state.todo.description })

export default connect(mapStateToProps)(Form)