import React from 'react';

const MovieComponent = (props) => {
    const {title, open, poster, posterAlt} = props;
    return (
        <div>
            <h1>제목: {title}</h1>
            <h2>개봉: {open}</h2>
            <img src={poster} alt={posterAlt} width="250px" />
            <hr />
        </div>
    );
};

export default MovieComponent;