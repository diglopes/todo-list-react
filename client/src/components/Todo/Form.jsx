import React, { useEffect } from 'react'
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import GridColumn from '@/components/GridColumn'
import IconButton from '@/components/IconButton'
import { changeDescription, search, add } from '../../store/actions/todo'

const Form = props => {
    const { description, add, search, changeDescription } = props

    useEffect(() => {
        search()
    }, [])

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    const clear = () => {
        search()
        changeDescription("")
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
                        value={description}
                        onChange={e => changeDescription(e.target.value)}
                        onKeyUp={keyHandler}
                    />
                </GridColumn>
    
                <GridColumn cols="12 3 2" className="col-sm-12 col-md-3 col-lg-2">
                    <IconButton style="primary" icon="plus" onClick={() => add(description)}/>
                    <IconButton style="info" icon="search" onClick={() => search(description)}/>
                    <IconButton style="light" icon="close" onClick={clear}/>
                </GridColumn>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ description: state.todo.description })
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)