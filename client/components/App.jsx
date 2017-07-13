import React from 'react';

import Navbar from 'react-navbar';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Admin UI</h1>
        	<h2 style={{textAlign: 'left'}}> navi bar </h2>
      <nav>
        <ul>
          <li style={{textAlign: 'left'}}><a href="#">Users</a></li>
          <li style={{textAlign: 'left'}}><a href="#">API Keys</a></li>
          <li style={{textAlign: 'left'}}><a href="#">Dataset</a></li>
        </ul>
      </nav>        	
      </div>);
 
}
}