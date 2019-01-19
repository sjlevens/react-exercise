// Row Component goes here
import React from 'react';

class Row extends React.Component {
  //Check if there is a state attached and return it
  displayState = () => {
    if ('address' in this.props.contact.profile) {
      if ('state' in this.props.contact.profile.address) {
        return this.props.contact.profile.address.state;
      }
    }
    return 'Unknown';
  };
  //Check if first and last name, will work if there is onle one or the other
  displayName = () => {
    let fullName = '';
    if ('firstName' in this.props.contact) {
      fullName = `${this.props.contact.firstName} `;
    }
    if ('lastName' in this.props.contact) {
      fullName = `${fullName}${this.props.contact.lastName}`;
    }
    return fullName;
  };
  render() {
    return (
      <tr>
        <td data-label="Name">{this.displayName()}</td>
        <td data-label="email">{this.props.contact.email}</td>
        <td data-label="company">{this.props.contact.profile.company}</td>
        <td data-label="state">{this.displayState()}</td>
      </tr>
    );
  }
}

export default Row;
