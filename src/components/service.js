import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Service extends Component {
    render() {
        return(
            <div className="pt-5 pb-5 service">
                <Container className="mt-5 mb-5">
                    <div className="section-header mb-5 mt-3 position-relative pb-2">
                        <h1 className="font-weight-bolder">SERVICE</h1>
                        <h2 className="position-absolute">Our Service</h2>
                    </div>
                    <Row>
                        <Col md="3" sm="6">
                            <ul className="list-unstyled">
                                <li className="mb-4 d-flex">
                                    <div className="rounded-circle text-white mr-3">
                                        <i className="fal fa-home-lg"></i>
                                    </div>
                                    <p className="mb-0 mt-3">INTERIORS</p>
                                </li>
                                <li className="mb-4 d-flex">
                                    <div className="rounded-circle text-white mr-3" style={{ padding: "15px 17px" }}>
                                        <i className="fal fa-store"></i>
                                    </div>
                                    <p className="mb-0 mt-3">ARCHITECTURE</p>
                                </li>
                                <li className="mb-4 d-flex">
                                    <div className="rounded-circle text-white mr-3" style={{ padding: "15px 20px" }}>
                                        <i className="fal fa-building"></i>
                                    </div>
                                    <p className="mb-0 mt-3">BUILDING</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md="5" sm="6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est labor. Laboris nisi ut aliquip ex ea commodo
                                consequat. Duis atate velit esse cillum dolore eu fugiat nulla pariatu.
                            </p>
                        </Col>
                        <Col md="4" sm="12">
                            <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F" 
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Service