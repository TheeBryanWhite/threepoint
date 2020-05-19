import React from 'react'
import axios from 'axios'

import '../sass/contact.scss'

export default class ContactForm extends React.Component {

  state = {
    "name": {"value":''},
    "email": {"value":''},
    "phone": {"value":''},
    "company": {"value":''},
    "message": {"value":''},
    "postnobills": {"value":''}
  }

  // Update the form state on input change
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: {
          valid: true,
          value: value
        },
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    // First check to see if stupid bots are filling out the form
    if (!this.state.postnobills.length > 0) {

        console.log(this.state);
        return false;

        axios.post(
            'https://bc7wldq22d.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer', this.state, {
            headers: { 
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }).then(response => {
            window.location.replace('/success');
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    } else {
        // No bots allowed.
        console.log("See you space cowboy");
    }
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="row">
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    name="name"
                    onChange={this.handleInputChange}
                    placeholder="Name"
                    type="text"
                    value={this.state.name.value}
                />
            </div>
            <div className="row">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    onChange={this.handleInputChange}
                    placeholder="Email"
                    type="email"
                    value={this.state.email.value}
                />
            </div>
            <div className="row">
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone" 
                    name="phone"
                    onChange={this.handleInputChange}
                    placeholder="Phone"
                    type="text"
                    value={this.state.phone.value}
                />
            </div>
            <div className="row">
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    name="company"
                    onChange={this.handleInputChange}
                    placeholder="Company"
                    type="text"
                    value={this.state.company.value}
                />
            </div>
            <div className="row">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message" 
                    name="message"
                    onChange={this.handleInputChange}
                    placeholder="Message"
                    rows="5"
                    value={this.state.message.value}
                />
            </div>
            <div className="row">
                <label htmlFor="postnobills">postnobills</label>
                <input
                    className="postnobills"
                    id="postnobills"
                    name="postnobills"
                    onChange={this.handleInputChange}
                    placeholder="postnobills"
                    type="text"
                    value={this.state.postnobills.value}
                />
            </div>
            <div className="row submit-container">
                <span className="mask">Send</span>
                <button type="submit">Send</button>
            </div>
        </form>
    )
  }
}
