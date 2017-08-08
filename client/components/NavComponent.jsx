import React from 'react';

export default class NavComponent extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default">
         <div class="container-fluid">
            <div class="navbar-header">
              <li><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Users</a></li>
              <li><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">API Keys</a></li>
              <li><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dataset</a></li>
            </div>
          </div>
      </nav>);
  }
}