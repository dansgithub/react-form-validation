import React, { Component } from "react";

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
        this.validatePostcode();
    }

    validateName = () => {
        if(this.state.name.length > 3) {
            console.log('validate length and if number is in string');
        }
    };

    validateMail = () => {
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(regex.test(this.state.mail)) {
            console.log('your email is valid');
        }
    };

    validateSurname = () => {
        console.log(this.state.surname);
    };

    validatePostcode = () => {
        console.log(this.state.postcode);
    };

    render() {
        const classes = ['form-input'].join('');

        return (
            <form className="card" onSubmit={this.handleSubmit}>

                <div className="form-item">
                    <label className="form-label" htmlFor="email">E-Mail</label>
                    <input className={classes} onChange={this.handleMail} id="email" type="text" value={this.state.mail}/>
                </div>

                <div className="form-group">
                    <div className="form-item">
                        <label className="form-label" htmlFor="name">Name</label>
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

                <button className="form-button">Bewerben</button>
            </form>
        );
    }
}

export default FormValidation;
