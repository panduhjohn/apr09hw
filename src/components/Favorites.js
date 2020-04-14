import React from 'react';

const Favorites = (props) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div>
                <div>
                    <h2>Likes</h2>
                    {props.likes.map((item) => {
                        return (
                            <div>
                                <div>
                                    <img
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                        }}
                                        src={item.image}
                                        onClick={() => {
                                            return props.deleteLike(
                                                item.animalId
                                            );
                                        }}
                                        alt='...'
                                    />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <h2>Dislikes</h2>
                    {props.dislikes.map((item) => {
                        return (
                            <div>
                                <div>
                                    <img
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                        }}
                                        src={item.image}
                                        onClick={() => {
                                            return props.deleteDislike(
                                                item.animalId
                                            );
                                        }}
                                        alt='...'
                                    />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
