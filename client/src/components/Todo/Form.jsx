import React, { useEffect } from 'react'
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import GridColumn from '@/components/GridColumn'
import IconButton from '@/components/IconButton'
import { changeDescription, search } from '../../store/actions/todo'

const Form = props => {
    useEffect(() => {
        props.search()
    }, [])

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
                        onChange={e => props.changeDescription(e.target.value)}
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
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)