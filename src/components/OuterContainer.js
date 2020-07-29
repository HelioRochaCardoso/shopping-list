import React from 'react';

const Box = (props) => {
    return (
        <React.Fragment>
            <div className='tc'>
                <h3><strong>My Shopping List</strong></h3>
                <p><strong>To buy</strong></p>
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    )
}

export default Box;