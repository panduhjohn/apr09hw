import React, { Component } from 'react';
import Favorites from './Favorites';
import animals from './data/data'


class Animal extends Component {
    constructor() {
        super();
        this.state = {
            animals,
            animal: {
                image: '',
                name: '',
                type: '',
                description: '',
                animalId: '',
            },
            likes: [],
            dislikes: [],
        };
    }

    likeMe(id) {
        const likeAnimals = this.state.animals.filter(
            (item) => item.animalId === id
        );

        const newLikes = [...this.state.likes];

        if (!newLikes.includes(likeAnimals[0])) {
            newLikes.push(likeAnimals[0]);
        }
        this.setState({ likes: newLikes });
    }

    dislikeMe(id) {
        const dislikeAnimals = this.state.animals.filter(
            (item) => item.animalId === id
        );

        const unLikes = [...this.state.dislikes];

        if (!unLikes.includes(dislikeAnimals[0])) {
            unLikes.push(dislikeAnimals[0]);
        }
        this.setState({ dislikes: unLikes });
    }

    deleteAll(id) {
        const updateAnimals = this.state.animals.filter(
            (item) => item.animalId !== id
        );
        const updateLikes = this.state.likes.filter(
            (item) => item.animalId !== id
        );
        const updateDislikes = this.state.dislikes.filter(
            (item) => item.animalId !== id
        );

        this.setState({
            animals: updateAnimals,
            likes: updateLikes,
            dislikes: updateDislikes,
        });
    }

    deleteLike = (id) => {
        const updateLikes = this.state.likes.filter(
            (item) => item.animalId !== id
        );
        this.setState({ likes: updateLikes });
    };

    deleteDislike = (id) => {
        const updateDislikes = this.state.dislikes.filter(
            (item) => item.animalId !== id
        );
        this.setState({ dislikes: updateDislikes });
    };

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        paddingLeft: '10px',
                        paddingTop: '20px',
                        width: '1310px',
                        height: '100%',
                        backgroundColor: 'red',
                    }}
                >
                    {this.state.animals.map((animal, idx) => {
                        return (
                            <div key={animal.animalId} className='ui card'>
                                <div className='image'>
                                    <img
                                        style={{ height: '250px' }}
                                        src={animal.image}
                                        alt='...'
                                    />
                                </div>
                                <div className='content'>
                                    <a className='header' href='/'>
                                        {animal.name}
                                    </a>

                                    <div className='meta'>
                                        <span className='date'>
                                            {animal.type}
                                        </span>
                                    </div>
                                    <div className='description'>
                                        {animal.description}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        className='ui primary button'
                                        onClick={() => {
                                            return this.likeMe(animal.animalId);
                                        }}
                                    >
                                        Like
                                    </button>
                                    <button
                                        className='ui red button'
                                        onClick={() => {
                                            return this.dislikeMe(
                                                animal.animalId
                                            );
                                        }}
                                    >
                                        Dislike
                                    </button>
                                    <button
                                        className='ui gray button'
                                        onClick={() => {
                                            return this.deleteAll(
                                                animal.animalId
                                            );
                                        }}
                                    >
                                        Discard
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Favorites
                    likes={this.state.likes}
                    dislikes={this.state.dislikes}
                    deleteLike={this.deleteLike}
                    deleteDislike={this.deleteDislike}
                />
            </div>
        );
    }
}

export default Animal;
