import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import {Animated} from "react-animated-css"

class Welcome extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
            index: 0,
            direction: null,
            fade: false,
            indicators: false
        };
    }
    
    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
            fade: true
        });
     }
    
    render() {
        const { index, direction, fade, indicators } = this.state;
    
        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                fade={fade}
                indicators={indicators}
                className="welcome"
            >
                <Carousel.Item className="slide-img">
                    <div className="welcome-img-1 d-block w-100">
                        <div className="overlay w-100">
                            <Carousel.Caption>
                                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                                    <h1 className="font-weight-bolder text-left">
                                        Architecture is a <br />Visual Art.
                                    </h1>
                                </Animated>
                                <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                                    <p className="text-left">The building speaks for themselves</p>
                                </Animated>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="slide-img">
                    <div className="welcome-img-2 d-block w-100">
                        <div className="overlay w-100">
                            <Carousel.Caption>
                                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                                    <h1 className="font-weight-bolder text-left">
                                        Architecture is a <br />Visual Art.
                                    </h1>
                                </Animated>
                                <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                                    <p className="text-left">The building speaks for themselves</p>
                                </Animated>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="slide-img">
                    <div className="welcome-img-3 d-block w-100">
                        <div className="overlay w-100">
                            <Carousel.Caption>
                                <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                                    <h1 className="font-weight-bolder text-left">
                                        Architecture is a <br />Visual Art.
                                    </h1>
                                </Animated>
                                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                                    <p className="text-left">The building speaks for themselves</p>
                                </Animated>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        );
      }
}

export default Welcome