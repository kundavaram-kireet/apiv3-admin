import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

export default class App extends React.Component {
  render() {
    return (
    <div style={{textAlign: 'center'}}>
        <h1>Admin UI</h1>
        	<h2 style={{textAlign: 'left'}}> Navigation Bar </h2>
	    <section>
	      	<div className="dropdown" style={{textAlign: 'left'}}>
	      		<Button className="btn btn-primary dropdown-toggle" color="success" type="button" data-toggle="dropdown">Users
				<span className="caret"></span></Button>
	        		<ul className="dropdown-menu">
	        			<li><a href="#">User 1</a></li>
	        			<li className="divider"></li>
	   	   				<li><a href="#">User 2</a></li>
	   	   				<li className="divider"></li>
	    				<li><a href="#">User 3</a></li>
	 				 </ul>
	        </div>
	      	<div className="dropdown" style={{textAlign: 'left'}}>
	      		<Button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Datasets
				<span className="caret"></span></Button>
	        		<ul className="dropdown-menu">
	        			<li><a href="#">Dataset 1</a></li>
	        			<li className="divider"></li>
	   	   				<li><a href="#">Dataset 2</a></li>
	   	   				<li className="divider"></li>
	    				<li><a href="#">Dataset 3</a></li>
	 				 </ul>
	        </div>
	      	<div className="dropdown" style={{textAlign: 'left'}}>
	      		<Button className="btn btn-primary dropdown-toggle" color="danger" type="button" data-toggle="dropdown">API Keys
				<span className="caret"></span></Button>
	        		<ul className="dropdown-menu">
	        			<li><a href="#">API Key 1</a></li>
	        			<li className="divider"></li>
	   	   				<li><a href="#">API Key 2</a></li>
	   	   				<li className="divider"></li>
	    				<li><a href="#">API Key 3</a></li>
	 				 </ul>
	        </div>
        </section>        	
    </div>);
 
}
}