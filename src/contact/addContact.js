import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


const style = {
    margin: 12,
    style: {
        height: 500,
        width: 600,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
};
export class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            firstName: '',
            lastName: '',
            email: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = this.state;
        if (firstName !== '' && lastName !== '' && email !== '') {
            var newItem = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                id: Date.now()
            };
            this.setState((prevState) => ({
                items: prevState.items.concat(newItem),
                firstName: '',
                lastName: '',
                email: ''
            }));
        } else {
            alert('fillp empty field');
        }
    }
    handleClose = () => {
         browserHistory.push('/');
    };
    renderContact() {
        return this.state.items.map((item, i) => (
            <TableRow key={i} >
                <TableRowColumn style={{ textAlign: 'center' }}>{item.firstName}</TableRowColumn>
                <TableRowColumn style={{ textAlign: 'center' }}>{item.lastName}</TableRowColumn>
                <TableRowColumn style={{ textAlign: 'center' }}>{item.email}</TableRowColumn>
            </TableRow>
        ))


    }
    render() {
        return (
            <div className="App" style={{ display: 'flex' }}>
                <Paper style={style.style} zDepth={5}>
                    <h3>Contact</h3>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <TextField
                            hintText="FirstName"
                            floatingLabelText="FirstName"
                            onChange={(e) => this.setState({ firstName: e.target.value })}
                            value={this.state.firstName}
                        /><br />
                        <TextField
                            hintText="LastName"
                            floatingLabelText="LastName"
                            onChange={(e) => this.setState({ lastName: e.target.value })}
                            value={this.state.lastName}
                        /><br />
                        <TextField
                            type="email"
                            hintText="Email"
                            floatingLabelText="Email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email}
                        /><br /><br />
                        <RaisedButton label="Save" type="submit" primary={true} style={style} />
                        <RaisedButton label="Cancel" secondary={true} style={style} onTouchTap={this.handleClose} />
                    </form>
                </Paper>

                <Paper style={style.style} zDepth={5}>
                    <Table >
                        <TableHeader displaySelectAll={false}>
                            <TableRow >
                                <TableHeaderColumn>FirstName</TableHeaderColumn>
                                <TableHeaderColumn>LastName</TableHeaderColumn>
                                <TableHeaderColumn>Email</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {this.renderContact()}
                        </TableBody>
                    </Table>
                </Paper>

            </div>
        );
    }
}
