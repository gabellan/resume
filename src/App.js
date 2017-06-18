import React, { Component } from 'react';
import Sidebar from './components/sidebar.js'
import Content from './components/content.js'

class App extends Component {
  render() {
    return (
      <div className="wrapper" >
        <Sidebar/>
        <Content/>
      </div>

    );
  }
}

export default App;
      
