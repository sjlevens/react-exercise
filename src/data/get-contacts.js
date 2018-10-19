/**
 * This file is called using the getContacts function and returns a Javascript Promise
 */
import { v4 } from 'uuid';
import { when } from 'q'

export default () => when([
    {
      id: v4(),
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@acme.com',
      profile: {
        company: 'Acme P/L',
        mobileNumber: '1234567890',
        contactNumber: '0987654321',
        address: {
          street1: 'Pitt',
          street2: 'street',
          city: 'Sydney',
          state: 'NSW',
          country: 'Australia'
        }
      },
      tags: ['hockey', 'rugby']
    },
    {
      id: v4(),
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@acme.com',
      profile: {
        company: 'Acme P/L',
        mobileNumber: '1234567890',
        contactNumber: '0987654321',
      },
      tags: ['tennis', 'rugby']
    },
    {
      id: v4(),
      firstName: 'James',
      lastName: 'McDonald',
      email: 'james@acme.com',
      profile: {
        company: 'Acme P/L',
        mobileNumber: '111111111',
        contactNumber: '22222222222',
        address: {
          street1: 'Pitt',
          street2: 'street',
          city: 'Sydney',
          state: 'NSW',
          country: 'Australia'
        }
      },
      tags: ['hockey', 'soccer']
    },
    {
      id: v4(),
      firstName: 'Clyde',
      lastName: 'Dale',
      email: 'clyde@postman.com',
      profile: {
        company: 'Postman',
        mobileNumber: '333333333',
        contactNumber: '031242341',
        address: {
          street1: 'George Street',
          city: 'Melbourne',
          state: 'Victoria',
          country: 'Australia'
        }
      },
      tags: ['basketball', 'afl']
    },
    {
      id: v4(),
      firstName: 'Roger',
      lastName: 'Candy',
      email: 'roger@acme.com',
      profile: {
        company: 'Acme P/L',
        mobileNumber: '1234567890',
        contactNumber: '0987654321',
        address: {
          street1: 'Pitt',
          street2: 'street',
          city: 'Sydney',
          state: 'NSW',
          country: 'Australia'
        }
      },
      tags: ['hockey', 'rugby']
    },
    {
      id: v4(),
      firstName: 'James',
      lastName: 'Bond',
      email: 'james@mi6.gov',
      profile: {
        company: 'MI6',
        mobileNumber: '1234567890',
        contactNumber: '0987654321',
        address: {
          street1: '1 Spy',
          street2: 'street',
          city: 'London',
          country: 'England'
        }
      },
      tags: ['cocktails']
    },
    {
      id: v4(),
      firstName: 'William',
      lastName: 'Wallace',
      email: 'william@wallace.com',
      profile: {
        company: 'William Company',
        mobileNumber: '1234567890',
        contactNumber: '0987654321',
        address: {
          street1: 'The Castle',
          city: 'Edinburgh',
          state: 'QLD',
          country: 'Australia'
        }
      },
      tags: ['hockey', 'rugby']
    },
    {
      id: v4(),
      firstName: 'Bill',
      lastName: 'Gates',
      email: 'bill@microsoft.com',
      profile: {
        company: 'Microsoft',
        mobileNumber: '12785456890',
        contactNumber: '0123244321',
        address: {
          street1: '1st Street',
          city: 'Seattle',
          state: 'Washington State',
          country: 'USA'
        }
      },
      tags: ['ping pong']
    },
    {
      id: v4(),
      firstName: 'Meryl',
      lastName: 'Streep',
      email: 'meryl@streep.com',
      profile: {
        company: 'Disney',
        mobileNumber: '1234567890',
        contactNumber: '09347654321',
        address: {
          street1: 'Country',
          street2: 'road',
          city: 'New York',
          state: 'New York',
          country: 'USA'
        }
      },
      tags: ['hockey', 'rugby']
    },
    {
      id: v4(),
      firstName: 'Linda',
      lastName: 'Lovelace',
      email: 'linda@coder.com',
      profile: {
        company: 'Programmers United',
        mobileNumber: '1234567890',
        contactNumber: '0987654321',
        address: {
          street1: 'Johnson',
          street2: 'street',
          city: 'San Fransisco',
          state: 'California',
          country: 'USA'
        }
      },
      tags: ['snooker', 'lacrosse']
    },
    {
      id: v4(),
      firstName: 'Kylie',
      lastName: 'Minogue',
      email: 'kylie@minogue.com',
      profile: {
        company: 'Minogue Enterprises',
        mobileNumber: '23423423543',
        contactNumber: '87098723409',
        address: {
          street1: 'Ramsay',
          street2: 'street',
          city: 'Adelaide',
          state: 'South Australia',
          country: 'Australia'
        }
      },
      tags: ['cross-fit', 'soccer']
    },
  ])
