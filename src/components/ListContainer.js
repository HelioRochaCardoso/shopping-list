import React from 'react';

const ListContainer = (props) => {
    return (
        <div className='center mt6 ba br2 pa2 w-two-thirds bg-washed-red' style={{height: '60vh'}}>
            <ul className='list pl0'>{props.children}</ul>
        </div>
    )
}

export default ListContainer;