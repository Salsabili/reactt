import React from 'react'

export default function Card(props) {
    return (
        <div>
             <h2>{props.movie.name}</h2>
             {console.log(props.movie.image)}
             <img   src={props.movie.image}  alt="" />
             <p>{props.movie.description}</p>
             <button> click me</button>
        </div>
    )
}
