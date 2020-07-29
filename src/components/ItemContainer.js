import React from 'react';
import ItemList from './ItemList';
import ListContainer from './ListContainer';

const ItemContainer = ({items, timeStamp, quantity, onDelete, markImportant, onDone}) => {
    return items === undefined ? <ListContainer/> : (
        <React.Fragment>
            <ListContainer>
                {
                    items.map((item, i) => {
                        return (
                            <ItemList
                                key={`${item}_${i}`}
                                id={i}
                                listItem={items[i]}
                                timeStamp={timeStamp[i]}
                                itemQuantity={quantity[i]}
                                deleteItem={onDelete}
                                highlight={markImportant}
                                onDone={onDone}
                            />
                        );
                    })
                }
            </ListContainer>
        </React.Fragment>
    );
}

export default ItemContainer;