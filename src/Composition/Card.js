// The Card component accepts 2 props: title and content.
// title is a string of the card's title.
// content is a string of the card's content.
// These props will be passed in for each Card from the List component.

import React from 'react';
import './Card.css';

function Card(props) {
    // these values are strings
    const title = props.title;
    const content = props.content;
    const allCardsID = props.allCardsID;

    return (
      <div className='Card'>
        <button 
          onClick={() => props.onDeleteItem(props.allCardsID)}
          type='button'> 
          delete 
        </button>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{allCardsID}</p>
      </div>
    )
  }
  
  export default Card;