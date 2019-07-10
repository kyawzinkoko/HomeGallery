import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return(
            <footer className="pt-3 pb-3">
                <Container>
                    <Row>
                        <Col md="5">
                            <div className="copyright text-center">
                                <p className="mb-0">Copyright &copy; 2019 Home Gallery. All right reserved</p>
                            </div>
                        </Col>
                        <Col md="7">
                            <div className="social">
                                <ul className="list-inline float-right mb-0 text-white">
                                    <li className="list-inline-item mr-3">
                                        <i className="fab fa-facebook-f"></i>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <i className="fab fa-twitter"></i>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <i className="fab fa-instagram"></i>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <i className="fab fa-facebook-f"></i>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <i className="fab fa-facebook-f"></i>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer