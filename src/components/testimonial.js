import React, { Component } from 'react'
import Slider from "react-slick"
import { Container, Row, Col } from 'react-bootstrap';

class Testimonial extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            fade: true,

            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 0
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return(
            <div className="testimonial" style={{ marginTop: '400px' }}>
                <Container>
                    <div className="section-header mb-5 mt-3 position-relative pb-2">
                        <h1 className="font-weight-bolder">TESTIMONIAL</h1>
                        <h2 className="position-absolute">WHAT OUR CLIENT SAY ?</h2>
                    </div>

                    <Slider {...settings} className="pb-5">
                        <Row className="d-flex">
                            <Col md="5" sm="12" className="text-center">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                    className="img-fluid rounded-circle"
                                />
                                <h4 className="mt-3">Aung Aung</h4>
                                <span>Actor</span>
                            </Col>
                            <Col md="6" sm="12" className="mt-3">
                                <h2 className="fal fa-quote-left"></h2>
                                <p className="pl-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est labor
                                </p>
                                <h2 className="fal fa-quote-right float-right"></h2>
                            </Col>
                        </Row>
                        <Row className="d-flex">
                            <Col md="5" sm="12" className="text-center">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                    className="img-fluid rounded-circle"
                                />
                                <h4 className="mt-3">Aung Aung</h4>
                                <span>Actor</span>
                            </Col>
                            <Col md="6" sm="12" className="mt-3">
                                <h2 className="fal fa-quote-left"></h2>
                                <p className="pl-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est labor
                                </p>
                                <h2 className="fal fa-quote-right float-right"></h2>
                            </Col>
                        </Row>
                        <Row className="d-flex">
                            <Col md="5" sm="12" className="text-center">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                    className="img-fluid rounded-circle"
                                />
                                <h4 className="mt-3">Aung Aung</h4>
                                <span>Actor</span>
                            </Col>
                            <Col md="6" sm="12" className="mt-3">
                                <h2 className="fal fa-quote-left"></h2>
                                <p className="pl-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est labor
                                </p>
                                <h2 className="fal fa-quote-right float-right"></h2>
                            </Col>
                        </Row>
                        <Row className="d-flex">
                            <Col md="5" sm="12" className="text-center">
                                <img src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F"
                                    className="img-fluid rounded-circle"
                                />
                                <h4 className="mt-3">Aung Aung</h4>
                                <span>Actor</span>
                            </Col>
                            <Col md="6" sm="12" className="mt-3 pl-0">
                                <h2 className="fal fa-quote-left"></h2>
                                <p className="pl-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est labor
                                </p>
                                <h2 className="fal fa-quote-right float-right"></h2>
                            </Col>
                        </Row>
                    </Slider>
                    
                </Container>
            </div>
        )
    }
}

export default Testimonial