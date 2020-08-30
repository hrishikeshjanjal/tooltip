import React from 'react';

const Dropdown = (props) => {

    const { tooltipDir, arrow, listOpen, selectDirection, displayDropdown } = props;

    function isOpen() {
        if (listOpen)
            return 'dropdownOpen'
        else
            return 'dropdownClose'
    }

    return (
        <div>
            <div className="title">Select tooltip direction :</div>
            <div className="wrapper">
                <div className="header" onClick={() => displayDropdown()}>
                    <div className="dd-title">{tooltipDir}</div>
                    <img className="arrow" src={arrow}></img>
                </div>

                <ul className={isOpen()}>
                    <li onClick={() => selectDirection('top')}>TOP</li>
                    <li onClick={() => selectDirection('bottom')}>BOTTOM</li>
                    <li onClick={() => selectDirection('left')}>LEFT</li>
                    <li onClick={() => selectDirection('right')}>RIGHT</li>
                </ul>
            </div>
        </div>
    )

}

export default Dropdown;