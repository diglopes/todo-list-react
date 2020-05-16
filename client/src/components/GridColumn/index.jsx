import React from 'react'

export default props => {

    function toCssClasses(numbers) {
    
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        if(cols[0]) classes += `col-sm-${cols[0]}`
        if(cols[1]) classes += ` col-md-${cols[1]}`
        if(cols[2]) classes += ` col-lg-${cols[2]}`
        return classes
    }

    return (
        <div className={toCssClasses(props.cols || '12')}>
            {props.children}
        </div>
    )
}