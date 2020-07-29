import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
});

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleTextError: false,
            toggleNumberError: false
        }

        this.handleText = this.handleText.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
    }

    handleText = () => {
        let regex = /(^[^- ][a-zA-Z -]+$|^[a-zA-Z]*$)/g,
        item = document.querySelector('#itemField'),
        validUserInput = (item.value.length > 0 && item.value.match(regex) !== null),
        placeholderShowing = document.querySelector('#itemField:placeholder-shown');

        if(validUserInput) this.setState({ toggleTextError: false });
        if(!validUserInput) {
            if(placeholderShowing !== null) return this.setState({ toggleTextError: false });

            this.setState({ toggleTextError: true });
        }
    }

    handleNumber = () => {
        let quantity = document.querySelector('#inputQuantity'),
        validQuantity = (parseInt(quantity.value) > 0 && parseInt(quantity.value) < 100);

        if(validQuantity) this.setState({ toggleNumberError: false });
        if(!validQuantity) this.setState({ toggleNumberError: true });
    }

    render() {
        const { classes } = this.props;

        return (
            <form id='form' className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="itemField"
                    label="Item"
                    type="text"
                    placeholder='add item'
                    error={this.state.toggleTextError}
                    onKeyUp={this.props.getValue}
                    onChange={this.handleText}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="inputQuantity"
                    label="Quantity"
                    type="number"
                    error={this.state.toggleNumberError}
                    onKeyUp={this.props.getValue}
                    onChange={this.handleNumber}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue='1'
                    InputProps={{ inputProps: {min: 1, max: 99} }}
                />
                <input
                    type='button'
                    id='submitBtn'
                    className='f7 dim ba ph3 pv2 mb2 dib black'
                    value='Enter'
                    onClick={this.props.getValue}
                />
            </form>
        )
    }
}

export default withStyles(styles)(InputField);