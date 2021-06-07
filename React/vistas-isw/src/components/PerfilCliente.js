import React, { useState } from 'react';
import './PerfilCliente.css'

export default class PCliente extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phoneNumber: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form>
                <input
                    name="firstName"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="lastName"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={this.state.phoneNumber}
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}
