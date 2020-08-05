import React from 'react'
import Card from "./cardMovie"
export default function MovieList(props) {
    return (
        <div>
           
             {props.movies.map(el=>  <div><Card movie={el} /> </div>)}
        </div>
    )
}
