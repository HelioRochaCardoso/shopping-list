export const verifyUserInput = (event, stateVal) => {
  let form = document.querySelector('#form'),
  item = form.itemField,
  quantity = form.inputQuantity,
  regex = /(^[^- ][a-zA-Z -]+$|^[a-zA-Z]*$)/g,
  validUserInput = (item.value.length > 0 && item.value.match(regex) !== null),
  validQuantity = (parseInt(quantity.value) > 0 && parseInt(quantity.value) < 100),
  itemDuplicate = (stateVal.indexOf(item.value) > -1) || 
                  stateVal.indexOf(item.value+'s') > -1 || 
                  stateVal.indexOf(item.value.slice(0, -1)) > -1,
  placeholderShowing = document.querySelector('#itemField:placeholder-shown');

  if(event.keyCode === 13 || event.target.id === 'submitBtn') {
    if(placeholderShowing !== null) {
      return false;
    } else if(itemDuplicate) {
      if(stateVal[stateVal.indexOf(item.value+'s')]) alert(`${item.value} already on the list as ${stateVal[stateVal.indexOf(item.value+'s')]}`);
      else if(stateVal[stateVal.indexOf(item.value.slice(0, -1))]) alert(`${item.value} already on the list as ${stateVal[stateVal.indexOf(item.value.slice(0, -1))]}`);
      else alert(`${item.value} already on the list`);
      return false;
    } else if(!validUserInput || !validQuantity) {
        return false;
    } else {  
      return true;
    }
  }
  else return false
}

export const defaultInputField = event => {
  let div = document.querySelector('#form').elements;
  div.itemField.value = '';
  div.inputQuantity.value = '1';
}

export const getTimeStamp = date => {
  let hour = date.getHours(),
  minute = date.getMinutes(),
  seconds = date.getSeconds();
  hour = hour <= 9 ? '0' + hour : hour;
  minute = minute <= 9 ? '0' + minute : minute;
  seconds = seconds <= 9 ? '0' + seconds : seconds;
  const timeAdded = `Added at ${hour}:${minute}:${seconds}`;
  return timeAdded;
}

export const splicingArray = (arr, index, removeQuantity = 0, itemToAdd = undefined) => {
  itemToAdd === undefined ? arr.splice(index, removeQuantity) : arr.splice(index, removeQuantity, itemToAdd);
  return arr;
}

export const highlightImportant = (event, index, stateVal) => {
  const obj_Edit = {
    state: stateVal,
    event: event.target,
    action: 'important',
    id: index
  },
  editedAttr = editCSSAttr(obj_Edit);

  return editedAttr;
}

export const setDone = (stateVal, index) => {
  const obj_Edit = {
    state: stateVal,
    id: index
  },
  editedAttr = editCSSAttr(obj_Edit);

  return editedAttr;
}

export const editCSSAttr = obj => {
  let { action, id, state: {arr_importantItem}, state: {arr_itemDone} } = obj,
  targetElem = document.querySelector(`#item_${id}`),
  targetElemName = targetElem.textContent,
  CSSImportant = 'red b',
  CSSDone = 'strike',
  hasAttr,
  index;

  if(action === 'important') {
    hasAttr = targetElem.className.indexOf(CSSImportant) > -1;
    if(hasAttr) {
      index = arr_importantItem.indexOf(targetElemName);
      targetElem.className = targetElem.className.replace(CSSImportant, '');
      targetElem.title = '';
      return splicingArray(arr_importantItem, index, 1);
    } else {
      targetElem.className += ` ${CSSImportant}`;
      targetElem.title = 'Important Item';
      return [...arr_importantItem, targetElemName];
    }
  } else {
    hasAttr = targetElem.className.indexOf(CSSDone) > -1;
    let done = document.querySelector('#done'),
    inner_container = document.querySelector(`#inner_container_${id}`);
    if(hasAttr) {
      index = arr_itemDone.indexOf(targetElemName);
      targetElem.className = targetElem.className.replace(CSSDone, '');
      done.title = 'Not Done';
      inner_container.style.cssText = '';
      return splicingArray(arr_itemDone, index, 1);
    } else {
      targetElem.className += ` ${CSSDone}`;
      done.title = 'Done';
      inner_container.style.cssText = 'width: 100%; height: 100%; z-index: 2; opacity: 0.4; pointer-events: none; filter: alpha(opacity = 50)';
      return [...arr_itemDone, targetElemName];
    }
  }
}