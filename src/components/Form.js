import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";

class FormValidation extends Component {
    state = {
        mail: '',
        name: '',
        surname: '',
        city: '',
        street: '',
        streetNumber: '',
        postcode: '',

        isLoading: false,
        mailError: false,
        nameError: false,
        surnameError: false,
        streetError: false,
        streetNumberError: false,
        cityError: false,
        postcodeError: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading: true});

        setTimeout(() => {
            this.handleValidation();
            this.setState({isLoading: false})
        }, 100);
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
        this.validateCity();
        this.validatePostcode();
    }

    validateMail = () => {
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(!regex.test(this.state.mail)) {
            this.setState({
                mailError: true
            });
        }
    };

    validateName = () => {
        const regex = /^[a-z ,.'-]+$/i;

        if(!regex.test(this.state.name)) {
            this.setState({
                nameError: true
            });
        }
    };

    validateSurname = () => {
        const regex = /^[a-z ,.'-]+$/i;

        if(!regex.test(this.state.surname)) {
            this.setState({
                surnameError: true
            });
        }
    };

    validateStreet = () => {
        const regex = /^([^0-9]*)$/;

        if((!regex.test(this.state.street))) {
            this.setState({
                streetError: true
            });
        } else if(this.state.street.length === 0) {
            this.setState({
                streetError: true
            })
        }
    };

    validateStreetNumber = () => {
        const regex = /^([^0-9]*)$/;

        if((regex.test(this.state.streetNumber))) {
            this.setState({
                streetNumberError: true
            });
        }
    };

    validateCity = () => {
        const regex = /^-?\d*\.?\d*$/;

        if(regex.test(this.state.city)) {
            this.setState({
                cityError: true
            });
        }
    };

    validatePostcode = () => {
        const regex = /^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/;

        if(!regex.test(this.state.postcode)) {
            this.setState({
                postcodeError: true
            });
        }
    };

    render() {
        const classes = ['form-input'];


        return (
            <form className="card" onSubmit={this.handleSubmit}>

                <div className="form-item">
                    <label className="form-label" htmlFor="email">E-Mail Adresse</label>
                    <input className={this.state.mailError ? 'form-error' : 'form-input'} onChange={this.handleMail} id="email" type="text" value={this.state.mail}/>
                    {this.state.mailError && <span>Please check your mail again</span>}
                </div>

                <div className="form-group">
                    <div className="form-item">
                        <label className="form-label" htmlFor="name">Vorname</label>
                        <input className={this.state.nameError ? 'form-error' : 'form-input'} onChange={this.handleName} id="name" type="text" value={this.state.name}/>
                        {this.state.nameError && <span>Please check your name again</span>}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="surname">Nachname</label>
                        <input className={this.state.surnameError ? 'form-error' : 'form-input'} onChange={this.handleSurname} id="surname" type="text" value={this.state.surname}/>
                        {this.state.surnameError && <span>Please check your surname again</span>}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="street">Straße</label>
                        <input className={this.state.streetError ? 'form-error' : 'form-input'} onChange={this.handleStreet} id="street" type="text" value={this.state.street}/>
                        {this.state.streetError && <span>Please check your street again</span>}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="streetNumber">Straßennummer</label>
                        <input className={this.state.streetNumberError ? 'form-error' : 'form-input'} onChange={this.handleStreetNumber} id="streetNumber" type="text" value={this.state.streetNumber}/>
                        {this.state.streetNumberError && <span>Please check your street number again</span>}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="city">Stadt</label>
                        <input className={this.state.cityError ? 'form-error' : 'form-input'} onChange={this.handleCity} id="city" type="text" value={this.state.city}/>
                        {this.state.cityError && <span>Please check your city again</span>}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="postcode">Postleitszahl</label>
                        <input className={this.state.postcodeError ? 'form-error' : 'form-input'} onChange={this.handlePostcode} id="postcode" type="text" value={this.state.postcode}/>
                        {this.state.postcodeError && <span>Please check your postcode again</span>}
                    </div>
                </div>

                {this.state.isLoading && <LoadingSpinner message="... Validating"/>}

                <button className="form-button">Bewerben</button>
            </form>
        );
    }
}

export default FormValidation;
