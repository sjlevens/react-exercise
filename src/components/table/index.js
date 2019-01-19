// Table Component goes here
import React from 'react';
import Row from './row';

const Table = props => {
  const displayContacts = props.contacts.map(contact => {
    return <Row contact={contact} key={contact.id} />;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>{displayContacts}</tbody>
    </table>
  );
};
export default Table;
