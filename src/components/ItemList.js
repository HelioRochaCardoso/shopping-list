import React from 'react';
import Done from './Done';
import ItemInfo from './ItemInfo';

const ItemList = ({listItem, timeStamp, itemQuantity, deleteItem, id, highlight, onDone}) => {
    return (
        <li className='tl list flex itemList justify-center' id={`itemList_${id}`}>
            <Done onItemDone={onDone}/>
            <ItemInfo
                time={timeStamp}
                markImportant={highlight}
                id={id}
                item={listItem}
                quantity={itemQuantity}
                deleteItem={deleteItem}
            />
        </li>
    );
}

export default ItemList;