import React, { Component } from 'react'
import Slider from "react-slick";
import { Container, Card, Button } from 'react-bootstrap';

class Project extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,

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
            <div className="projects position-relative mb-5 d-block">
                <div className="overlay">
                    <Container>
                        <div className="section-header mb-5 mt-3 position-relative pb-2">
                            <h1 className="font-weight-bolder">PROJECTS</h1>
                            <h2 className="position-absolute">Our Projects</h2>
                        </div>
                    </Container>
                    <Slider {...settings} className="position-absolute w-100 pb-5">
                            <div>
                                <Card className="border-0 ml-2 mr-2 rounded-0">
                                    <div className="overflow-hidden"> 
                                        <Card.Img variant="top" className="rounded-0" src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text className="text-center text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="border-0 ml-2 mr-2 rounded-0">
                                    <div className="overflow-hidden">
                                        <Card.Img variant="top" className="rounded-0" src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text className="text-center text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="border-0 ml-2 mr-2 rounded-0">
                                    <div className="overflow-hidden">
                                        <Card.Img variant="top" className="rounded-0" src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text className="text-center text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="border-0 ml-2 mr-2 rounded-0">
                                    <div className="overflow-hidden">
                                        <Card.Img variant="top" className="rounded-0" src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text className="text-center text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="border-0 ml-2 mr-2 rounded-0">
                                    <div className="overflow-hidden">
                                        <Card.Img variant="top" className="rounded-0" src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text className="text-center text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="border-0 ml-2 mr-2 rounded-0">
                                    <div className="overflow-hidden">
                                        <Card.Img variant="top" className="rounded-0" src="https://scontent.frgn1-1.fna.fbcdn.net/v/t1.0-9/44536538_2168285073490288_6007610613658812416_o.jpg?_nc_cat=108&_nc_ht=scontent.frgn1-1.fna&oh=44349d41b3140b4918d5c68a688e245d&oe=5D479B7F" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-center">Card Title</Card.Title>
                                        <Card.Text className="text-center text-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Project