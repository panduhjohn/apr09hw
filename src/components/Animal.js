import React, { Component } from 'react';

let animals = [
    {
        image: '/images/dog1.jpg',
        type: 'dog',
        name: 'Battle',
        description: 'This is a picture of a DOG',
        animalId: 'doggo1',
    },
    {
        image: '/images/dog2.jpg',
        type: 'dog',
        name: 'Roamin',
        description: 'This is a picture of a DOG',
        animalId: 'doggo2',
    },
    {
        image: '/images/dog3.jpg',
        type: 'dog',
        name: 'Brando',
        description: 'This is a picture of a DOG',
        animalId: 'doggo3',
    },
    {
        image: '/images/dog4.jpg',
        type: 'dog',
        name: 'Max',
        description: 'This is a picture of a DOG',
        animalId: 'doggo4',
    },
    {
        image: '/images/cat1.jpg',
        type: 'cat',
        name: 'Michelle',
        description: 'This is a picture of a CAT',
        animalId: 'kitty1',
    },
    {
        image: '/images/cat2.jpg',
        type: 'cat',
        name: 'Dani',
        description: 'This is a picture of a CAT',
        animalId: 'kitty2',
    },
    {
        image: '/images/cat3.jpg',
        type: 'cat',
        name: 'Sarah',
        description: 'This is a picture of a CAT',
        animalId: 'kitty3',
    },
    {
        image: '/images/cat4.jpg',
        type: 'cat',
        name: 'Erin',
        description: 'This is a picture of a CAT',
        animalId: 'kitty4',
    },
    {
        image: '/images/lion1.jpg',
        type: 'lion',
        name: 'Mufasa',
        description: 'This is a picture of a LION',
        animalId: 'roar1',
    },
    {
        image: '/images/lion2.jpg',
        type: 'lion',
        name: 'Simba',
        description: 'This is a picture of a LION',
        animalId: 'roar2',
    },
    {
        image: '/images/lion3.jpg',
        type: 'lion',
        name: 'Scar',
        description: 'This is a picture of a LION',
        animalId: 'roar3',
    },
    {
        image: '/images/lion4.jpg',
        type: 'lion',
        name: 'Nala',
        description: 'This is a picture of a LION',
        animalId: 'roar4',
    }
]

class Animal extends Component {
    constructor() {
        super();
        this.state = {
            animals
        };
    }

    render() {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', paddingLeft: '10px', paddingTop: '20px', width: '1310px', height: '100%', backgroundColor: 'red'}}>
                {this.state.animals.map((animal, idx) => {
                    return (
                        <div key={animal.animalId} className='ui card'>
                            <div className='image'>
                                <img style={{height: '250px'}} src={animal.image} alt='...' />
                            </div>
                            <div className='content'>
                                <a className='header'>{animal.name}</a>
                                <div className='meta'>
                                    <span class='date'>{animal.type}</span>
                                </div>
                                <div className='description'>
                                    {animal.description}
                                </div>
                            </div>

                            <div>
                                <button className='ui primary button'>
                                    Like
                                </button>
                                <button className='ui red button'>
                                    Dislike
                                </button>
                                <button className='ui gray button'>
                                    Discard
                                </button>
                            </div>
                        </div>
                    ); 
                })}
            </div>
        );
    }
}

export default Animal;
