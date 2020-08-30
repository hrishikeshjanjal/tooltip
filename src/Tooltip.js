import React from 'react';

const Tooltip = (props) => {

    let dir = props.state.tooltipDir;
    function tooltipStyle() {

        if (dir === 'top')
            return 'tooltipText tooltipTop'
        else if (dir === 'bottom')
            return 'tooltipText tooltipBottom'
        else if (dir === 'left')
            return 'tooltipText tooltipLeft'
        else if (dir === 'right')
            return 'tooltipText tooltipRight'

    }

    return (

        <div className="tooltip">{props.state.content}
            <span className={tooltipStyle()}>Click here to Download!</span>
        </div>

    )

}

export default Tooltip;