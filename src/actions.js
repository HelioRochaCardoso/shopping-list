import {
    USER_INPUT,
    TIMESTAMP,
    ITEM_IMPORTANT,
    ITEM_DONE,
    LAST_ITEM_ADDED,
    LAST_ITEM_DELETED,
    ITEM_QUANTITY,
    REMOVE_ITEM,
    REMOVE_TIMESTAMP,
    REMOVE_ITEM_IMPORTANT,
    REMOVE_ITEM_DONE,
    REMOVE_ITEM_QUANTITY
} from './constants';

import {
    getTimeStamp,
    verifyUserInput,
    defaultInputField,
    highlightImportant,
    splicingArray,
    setDone
} from './functions';

export const setUserInput = (event, stateProps) => (dispatch) => {
    let timeStamp = getTimeStamp(new Date()),
    formElements = document.querySelector('#form').elements,
    { arr_items, arr_itemsQuantity, arr_timeStamps } = stateProps,
    verifiedInput = verifyUserInput(event, arr_items),
    item = formElements.itemField.value,
    quantity = formElements.inputQuantity.value;

    if(verifiedInput) {
        dispatch({ type: USER_INPUT, payload: [...arr_items, item.trim()] });
        dispatch({ type: ITEM_QUANTITY, payload: [...arr_itemsQuantity, parseInt(quantity)] });
        dispatch({ type: TIMESTAMP, payload: [...arr_timeStamps, timeStamp] });
        dispatch({ type: LAST_ITEM_ADDED, payload: item.trim() });
        defaultInputField(event);
    }
}

export const setImportantItem = (event, stateProps) => dispatch => {
    let elemName = event.target.closest('.itemList').querySelector('span').textContent,
    { arr_items, arr_importantItem } = stateProps,
    indexImportant = arr_importantItem.indexOf(elemName),
    indexElem = arr_items.indexOf(elemName),
    importantItem = highlightImportant(event, indexElem, stateProps);
    
    if(indexImportant > -1) {
        dispatch({ type: REMOVE_ITEM_IMPORTANT, payload: importantItem });
    } else {
        dispatch({ type: ITEM_IMPORTANT, payload: importantItem });
    }
}

export const setItemDone = (event, stateProps) => dispatch => {
    let { arr_items, arr_itemDone } = stateProps,
    elemName = event.target.closest('.itemList').querySelector('span').textContent,
    indexElem = arr_items.indexOf(elemName),
    indexDone = arr_itemDone.indexOf(elemName),
    doneItem = setDone(stateProps, indexElem);

    if(indexDone > -1) {
        dispatch({ type: REMOVE_ITEM_DONE, payload: doneItem });
    } else {
        dispatch({ type: ITEM_DONE, payload: doneItem });
    }
}

export const setItemDeleted = (text, stateProps) => (dispatch) => {
    const { arr_itemsQuantity, arr_items, arr_timeStamps, arr_importantItem, arr_itemDone } = stateProps,
    itemDOMElement = text.target.closest('.itemList').querySelector('span'),
    itemToDelete = itemDOMElement.textContent,
    itemIndex = itemDOMElement.id;

    dispatch({ type: LAST_ITEM_DELETED, payload: itemToDelete });
    dispatch({ type: REMOVE_ITEM_QUANTITY, payload: splicingArray(arr_itemsQuantity, itemIndex, 1) });
    dispatch({ type: REMOVE_ITEM, payload: splicingArray(arr_items, itemIndex, 1) });
    dispatch({ type: REMOVE_TIMESTAMP, payload: splicingArray(arr_timeStamps, itemIndex, 1) });

    if(arr_importantItem.indexOf(itemToDelete) > -1) {
        dispatch({
            type: REMOVE_ITEM_IMPORTANT,
            payload: splicingArray(arr_importantItem, itemIndex, 1)
        });
    }
    if(arr_itemDone.indexOf(itemToDelete) > -1) {
        dispatch({
            type: REMOVE_ITEM_DONE,
            payload: splicingArray(arr_itemDone, itemIndex, 1)
        })
    }
}