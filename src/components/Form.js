import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";

class FormValidation extends Component {
    state = {
        mail: '',
        name: '',
        surname: '',
        city: '',
        streetNumber: '',
        postcode: '',
        isLoading: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading: true});

        setTimeout(() => {
            this.handleValidation();
            this.setState({isLoading: false})
        }, 1000);
    };

    handleMail = (e) => {
        this.setState({mail: e.target.value})
    };

    handleName = (e) => {
        this.setState({name: e.target.value})
    };

    handleSurname = (e) => {
        this.setState({surname: e.target.value})
    };

    handleStreetNumber = (e) => {
        this.setState({streetNumber: e.target.value})
    };

    handleStreet = (e) => {
        this.setState({street: e.target.value})
    };

    handleCity = (e) => {
        this.setState({city: e.target.value})
    };

    handlePostcode = (e) => {
        this.setState({postcode: e.target.value})
    };

    handleValidation() {
        this.validateMail();
        this.validateName();
        this.validateSurname();
        this.validateStreet();
        this.validateStreetNumber();
        this.validatePostcode();
    }

    validateMail = () => {
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(regex.test(this.state.mail)) {
            console.log('your email is valid');
        }
    };

    validateName = () => {
        const regex = /^[a-z ,.'-]+$/i;

        if(regex.test(this.state.name)) {
            console.log('your name is valid');
        }
    };

    validateSurname = () => {
        const regex = /^[a-z ,.'-]+$/i;

        if(regex.test(this.state.surname)) {
            console.log('your surname is valid');
        }
    };

    validateStreet = () => {
        const regex = /^([^0-9]*)$/;

        if(regex.test(this.state.street)) {
            console.log('your street is valid');
        }
    };

    validateStreetNumber = () => {
        const regex = /^([^0-9]*)$/;

        if(regex.test(this.state.streetNumber)) {
            console.log('your streetnumber is valid');
        }
    };

    validatePostcode = () => {
        const regex = /^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/;

        if(regex.test(this.state.postcode)) {
            console.log('your postcode is valid');
        }
    };

    render() {
        const classes = ['form-input'].join('');

        return (
            <form className="card" onSubmit={this.handleSubmit}>

                <div className="form-item">
                    <label className="form-label" htmlFor="email">E-Mail Adresse</label>
                    <input className={classes} onChange={this.handleMail} id="email" type="text" value={this.state.mail}/>
                </div>

                <div className="form-group">
                    <div className="form-item">
                        <label className="form-label" htmlFor="name">Vorname</label>
                        <input className={classes} onChange={this.handleName} id="name" type="text" value={this.state.name}/>
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="surname">Nachname</label>
                        <input className={classes} onChange={this.handleSurname} id="surname" type="text" value={this.state.surname}/>
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="surname">Straße</label>
                        <input className={classes} onChange={this.handleStreet} id="surname" type="text" value={this.state.street}/>
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="surname">Straßennummer</label>
                        <input className={classes} onChange={this.handleStreetNumber} id="surname" type="text" value={this.state.streetNumber}/>
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="surname">Stadt</label>
                        <input className={classes} onChange={this.handleCity} id="surname" type="text" value={this.state.city}/>
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="postcode">Postleitszahl</label>
                        <input className={classes} onChange={this.handlePostcode} id="postcode" type="text" value={this.state.postcode}/>
                    </div>
                </div>

                {this.state.isLoading && <LoadingSpinner message="... Validating"/>}

                <button className="form-button">Bewerben</button>
            </form>
        );
    }
}

export default FormValidation;
