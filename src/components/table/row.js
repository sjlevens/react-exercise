// Row Component goes here
import React from 'react';

class Row extends React.Component {
  displayState = () => {
    if ('address' in this.props.contact.profile) {
      if ('state' in this.props.contact.profile.address) {
        return this.props.contact.profile.address.state;
      }
    }
    return 'Unknown';
  };
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
