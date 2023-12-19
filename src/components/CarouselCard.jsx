import React from 'react';
import Books from '../data/books.json';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

class CarouselCard extends React.components {
    state = { selectBook: Books[0] }

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Card style={{ width: '18rem' }} onslid={(incomingSlideIndex) => {
                        console.log(incomingSlideIndex)
                        this.setState({
                            selectBook: Books[incomingSlideIndex],
                        });
                    }}>
                        {Books.map((BookNum) => {
                            return (
                                <Card.Item key={BookNum.asin}>
                                    <Card.Img variant="top" src={BookNum.img} alt="img Books" />
                                    <Card.Body>
                                        <Card.Title>{BookNum.title}</Card.Title>
                                        <Card.Text>{BookNum.category}</Card.Text>
                                        <Button variant="primary">{BookNum.price}</Button>
                                    </Card.Body>
                                </Card.Item>
                            )

                        })}
                    </Card>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default CarouselCard;

/* function CarouselCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  export default CarouselCard; */