import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostData from './data.js'
import List from './components/List';
import DrawerDemo from './components/DrawerDemo'
import NavDrawer from './components/Drawer'


class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return(
    <div>
      {/* <DrawerDemo /> */}
      <NavDrawer />
    </div>
    )
  }
}

export default App;

