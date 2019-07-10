import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Team extends Component {
    render() {
        return(
            <div className="teams pt-5 mb-5">
                <Container>
                    <div className="section-header mb-5 mt-3 position-relative pb-2">
                        <h1 className="font-weight-bolder">TEAM</h1>
                        <h2 className="position-absolute">MEET OUR TEAM</h2>
                    </div>

                    <Row>
                        <Col md="4" sm="12" className="mb-4">
                            <div className="img-hover">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                className="img-fluid position-relative" />
                                <h3 className="position-absolute p-2 text-center"><a className="text-white align-middle text-decoration-none">Aung Aung</a></h3>
                            </div>
                            <span>CEO</span>
                        </Col>
                        <Col md="4" sm="12" className="mb-4">
                            <div className="img-hover">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                className="img-fluid position-relative" />
                                <h3 className="position-absolute p-2 text-center"><a className="text-white align-middle text-decoration-none">Aung Aung</a></h3>
                            </div>
                            <span>CTO</span>
                        </Col>
                        <Col md="4" sm="12" className="mb-4">
                            <div className="img-hover">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                className="img-fluid position-relative" />
                                <h3 className="position-absolute p-2 text-center"><a className="text-white align-middle text-decoration-none">Aung Aung</a></h3>
                            </div>
                            <span>Architecture</span>
                        </Col>
                        <Col md="4" sm="12" className="mb-4">
                            <div className="img-hover">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                className="img-fluid position-relative" />
                                <h3 className="position-absolute p-2 text-center"><a className="text-white align-middle text-decoration-none">Aung Aung</a></h3>
                            </div>
                            <span>Designer</span>
                        </Col>
                        <Col md="4" sm="12" className="mb-4">
                            <div className="img-hover">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                className="img-fluid position-relative" />
                                <h3 className="position-absolute p-2 text-center"><a className="text-white align-middle text-decoration-none">Aung Aung</a></h3>
                            </div>
                            <span>Project Manager</span>
                        </Col>
                        <Col md="4" sm="12" className="mb-4">
                            <div className="img-hover">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                className="img-fluid position-relative" />
                                <h3 className="position-absolute p-2 text-center"><a className="text-white align-middle text-decoration-none">Aung Aung</a></h3>
                            </div>
                            <span>Worder Lead</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Team