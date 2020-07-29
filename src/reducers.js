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

const obj_itemsList = {
    arr_items: []
}

export const itemList = (state=obj_itemsList, action={}) => {
    switch(action.type) {
        case USER_INPUT:
            return Object.assign({}, state, {arr_items: action.payload});
        case REMOVE_ITEM:
            return Object.assign({}, state, {arr_items: action.payload});
        default:
            return state;
    }
}

const obj_timestamp = { 
    arr_timeStamps: []
}

export const timeStamps = (state=obj_timestamp, action={}) => {
    switch(action.type) {
        case TIMESTAMP:
            return Object.assign({}, state, {arr_timeStamps: action.payload});
        case REMOVE_TIMESTAMP:
            return Object.assign({}, state, {arr_timeStamps: action.payload});
        default:
            return state;
    }
}

const obj_importantItems = {
    arr_importantItem: []
}

export const itemImportant = (state=obj_importantItems, action={}) => {
    switch(action.type) {
        case ITEM_IMPORTANT:
            return Object.assign({}, state, {arr_importantItem: action.payload});
        case REMOVE_ITEM_IMPORTANT:
            return Object.assign({}, state, {arr_importantItem: action.payload});
        default:
            return state;
    }
}

const obj_itemsDone = {
    arr_itemDone: []
}

export const itemDone = (state=obj_itemsDone, action={}) => {
    switch(action.type) {
        case ITEM_DONE:
            return Object.assign({}, state, {arr_itemDone: action.payload});
        case REMOVE_ITEM_DONE:
            return Object.assign({}, state, {arr_itemDone: action.payload});
        default:
            return state;
    }
}

const obj_lastItemAdded = {
    str_lastItemAdded: ''
}

export const lastItemAdded = (state=obj_lastItemAdded, action={}) => {
    switch(action.type) {
        case LAST_ITEM_ADDED:
            return Object.assign({}, state, {str_lastItemAdded: action.payload});
        default:
            return state;
    }
}

const obj_lastItemDeleted = {
    str_lastItemDeleted: ''
}

export const lastItemDeleted = (state=obj_lastItemDeleted, action={}) => {
    switch(action.type) {
        case LAST_ITEM_DELETED:
            return Object.assign({}, state, {str_lastItemDeleted: action.payload});
        default:
            return state;
    }
}

const obj_itemQuantity = {
    arr_itemsQuantity: []
}

export const itemQuantity = (state=obj_itemQuantity, action={}) => {
    switch(action.type) {
        case ITEM_QUANTITY:
            return Object.assign({}, state, {arr_itemsQuantity: action.payload});
        case REMOVE_ITEM_QUANTITY:
            return Object.assign({}, state, {arr_itemsQuantity: action.payload});
        default:
            return state;
    }
}