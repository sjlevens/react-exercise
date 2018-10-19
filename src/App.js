import React, { Component } from 'react'

import './App.css'

import Header from './header'
import Table from './table'

import getContacts from './data/get-contacts'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      nameFilter: '',
      stateFilter: '',
    }
  }

  render() {
    return (
      <div>
        {/*<Header />*/}
        <div className="Toolbar" >
        </div>
        {/*<Table />*/}
      </div>
    )
  }
}

export default App
