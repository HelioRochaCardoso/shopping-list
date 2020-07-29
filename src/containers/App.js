import React, { Component } from 'react';
import { connect } from 'react-redux';
import OuterContainer from '../components/OuterContainer';
import InputField from '../components/InputField';
import ItemContainer from '../components/ItemContainer';
import './App.css';
import { setUserInput, setImportantItem, setItemDone, setItemDeleted } from '../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    arr_items: state.itemList.arr_items,
    arr_timeStamps: state.timeStamps.arr_timeStamps,
    arr_importantItem: state.itemImportant.arr_importantItem,
    arr_itemDone: state.itemDone.arr_itemDone,
    str_lastItemAdded: state.lastItemAdded.str_lastItemAdded,
    str_lastItemDeleted: state.lastItemDeleted.str_lastItemDeleted,
    arr_itemsQuantity: state.itemQuantity.arr_itemsQuantity
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUserInput: (event, prop) => setUserInput(event, prop),
      highlightImportant: (event, prop) => setImportantItem(event, prop),
      onDone: (event, prop) => setItemDone(event, prop),
      onDeleteItem: (event, prop) => setItemDeleted(event, prop)
    }, dispatch
  )
}

const mergeProps = (propsFromState, propsFromDispatch) => {
  return Object.assign({}, propsFromState, {
    ...propsFromState,
    ...propsFromDispatch,
    getUserInput: event => propsFromDispatch.getUserInput(event, {
        arr_items: propsFromState.arr_items,
        arr_itemsQuantity: propsFromState.arr_itemsQuantity,
        arr_timeStamps: propsFromState.arr_timeStamps,
      }
    ),
    onDone: event => propsFromDispatch.onDone(event, {
        arr_items: propsFromState.arr_items,
        arr_itemDone: propsFromState.arr_itemDone
      }
    ),
    onDeleteItem: event => propsFromDispatch.onDeleteItem(event, {
        arr_items: propsFromState.arr_items,
        arr_itemsQuantity: propsFromState.arr_itemsQuantity,
        arr_timeStamps: propsFromState.arr_timeStamps,
        arr_importantItem: propsFromState.arr_importantItem,
        arr_itemDone: propsFromState.arr_itemDone
      }
    ),
    highlightImportant: event => propsFromDispatch.highlightImportant(event, {
        arr_items: propsFromState.arr_items,
        arr_importantItem: propsFromState.arr_importantItem
      }
    )
  })
}

class App extends Component {
  render() {
    const { arr_items, arr_timeStamps, arr_itemsQuantity, getUserInput, onDeleteItem, highlightImportant, onDone } = this.props;
    return (
      <OuterContainer>
        <InputField getValue={getUserInput} />
        <ItemContainer items={arr_items} timeStamp={arr_timeStamps} quantity={arr_itemsQuantity} onDelete={onDeleteItem} markImportant={highlightImportant} onDone={onDone}>
        </ItemContainer>
      </OuterContainer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
