import React from 'react';

import Navbar from 'react-navbar';

export default class App extends React.Component {
  render() {
    return (
    <div style={{textAlign: 'center'}}>
        <h1>Admin UI</h1>
        	<h2 style={{textAlign: 'left'}}> Navigation Bar </h2>
	    <nav>
	      	<div className="dropdown" style={{textAlign: 'left'}}>
	      		<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Users
				<span className="caret"></span></button>
	        		<ul className="dropdown-menu">
	        			<li><a href="#">User 1</a></li>
	        			<li className="divider"></li>
	   	   				<li><a href="#">User 2</a></li>
	   	   				<li className="divider"></li>
	    				<li><a href="#">User 3</a></li>
	 				 </ul>
	        </div>
	      	<div className="dropdown" style={{textAlign: 'left'}}>
	      		<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Datasets
				<span className="caret"></span></button>
	        		<ul className="dropdown-menu">
	        			<li><a href="#">Dataset 1</a></li>
	        			<li className="divider"></li>
	   	   				<li><a href="#">Dataset 2</a></li>
	   	   				<li className="divider"></li>
	    				<li><a href="#">Dataset 3</a></li>
	 				 </ul>
	        </div>
	      	<div className="dropdown" style={{textAlign: 'left'}}>
	      		<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">API Keys
				<span className="caret"></span></button>
	        		<ul className="dropdown-menu">
	        			<li><a href="#">API Key 1</a></li>
	        			<li className="divider"></li>
	   	   				<li><a href="#">API Key 2</a></li>
	   	   				<li className="divider"></li>
	    				<li><a href="#">API Key 3</a></li>
	 				 </ul>
	        </div>
        </nav>        	
    </div>);
 
}
}