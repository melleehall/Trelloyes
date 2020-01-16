// The Card component accepts 2 props: title and content.
// title is a string of the card's title.
// content is a string of the card's content.
// These props will be passed in for each Card from the List component.

import React from 'react';
import './Card.css';

function Card(props) {
    const title = props.title;
    const content = props.content;

    return (
      <div className='Card'>
        <button type='button'> delete </button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    )
  }
  
  export default Card;