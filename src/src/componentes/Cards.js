import React from 'react'
import Card from 'react-bootstrap/Card';


function Cards() {
    return (
        <section className='secaocards'>
            <h1>Seção de Cards</h1>
            <div className='grid-metodo'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="cardsreativos">
                        <Card.Body>
                            <Card.Title>Card Title {index + 1}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Cards
