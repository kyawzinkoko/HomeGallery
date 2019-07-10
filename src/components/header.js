import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
	<div className="position-fixed w-100 header">
		<Container>
			<Navbar className="header-bg" expand="lg">
				<Navbar.Brand href="#home" className="text-white">
					<img width="155" height="70" src="https://expert-themes.com/html/contra/images/logo-2.png" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link className="text-white mr-3" href="#home">HOME</Nav.Link>
						<Nav.Link className="text-white mr-3" href="#link">ABOUT</Nav.Link>
						<Nav.Link className="text-white mr-3" href="#link">SERVICES</Nav.Link>
						<Nav.Link className="text-white mr-3" href="#link">PROJECTS</Nav.Link>
						<Nav.Link className="text-white mr-3" href="#link">TEAM</Nav.Link>
						<Nav.Link className="text-white mr-3" href="#link">CONTACT</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>	
	</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
