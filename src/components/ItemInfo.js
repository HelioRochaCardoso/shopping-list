import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const ItemInfo = ({ time, id, markImportant, item, quantity, deleteItem }) => {
    return (
        <Tooltip title={time} placement='right' id={`tooltip_${id}`} arrow>
            <div className='flex justify-between items-center w-100' id={`inner_container_${id}`}>
                <div className='flex justify-between w4'>
                        <span
                            className='pointer'
                            id={`item_${id}`}
                            onClick={markImportant}
                        >
                            {item}
                        </span>
                        <span>
                            <Badge badgeContent={quantity} color="error" title='Quantity'/>
                        </span>
                </div>
                <IconButton
                    id={`delete_${id}`}
                    aria-label="delete"
                    onClick={deleteItem}
                    title={`Delete ${item}`}
                >
                    <IndeterminateCheckBoxRoundedIcon id={`delete_${id}`}/>
                </IconButton>
            </div>
        </Tooltip>
    )
}

export default ItemInfo;