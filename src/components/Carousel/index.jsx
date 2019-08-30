import React, { Component } from 'react';
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";


class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      auxiliaryCounter: 0,
      currentImage: image1,
      carousel: [image1, image2, image3],
    }
    this.handleCarousel = this.handleCarousel.bind(this);
  }


  handleCarousel(images) {
    const currentImage = [...images]

    const carouselTimer = setTimeout(() => {
      this.setState({
        currentImage: currentImage.splice(0, 1),
        auxiliaryCounter: this.state.auxiliaryCounter + 1
      })
    }, 4000)

    if (this.state.auxiliaryCounter === 4) {
      clearTimeout(carouselTimer);
      this.setState({
        auxiliaryCounter: 0
      })
    }
  }

  render() {
    const { carousel, auxiliaryCounter } = this.state;

    return (
      <>
        {this.handleCarousel(carousel)}

        {
          auxiliaryCounter === 1
            ?
            <img src={image1} alt={image1} />
            :
            auxiliaryCounter === 2
              ? <img src={image2} alt={image2} />
              : <img src={image3} alt={image3} />
        }
      </>
    );
  }
}

export default Carousel;