import React, { Component } from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

class Done extends Component {
    constructor(props) {
        super(props);
        this.state = {toggleDone: false}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = event => {
        this.setState(state => ({
            toggleDone: !state.toggleDone
        }));
        this.props.onItemDone(event);
    }

    render() {
        return (
            <div className='pointer flex self-center' id='done' onClick={this.handleClick} title='Not Done'>
                {
                    this.state.toggleDone ? <CheckBoxIcon className='green' id='doneIcon' /> : <CheckBoxOutlineBlankIcon id='checkOutIcon' />
                }
            </div>
        )
    }
}

export default Done;