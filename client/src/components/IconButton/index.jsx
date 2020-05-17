import React from 'react'
import If from '@/helpers/If'

export default props => {
    return (
        <If test={!props.hide}>
            <button className={"ml-2 btn btn-" + props.style} onClick={props.onClick}>
                <i className={"fa fa-" + props.icon}></i>
            </button>
        </If>
    )
}