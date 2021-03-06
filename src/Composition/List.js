// The List should render a Card component for each of the cards in the cards array prop.
// Each instance of the Card component should be passed 2 props (and a key). The 2 props are title and content.

import React from 'react';
import Card from './Card';
import './List.css';

export default function List(props) {
  const header = `${props.header}`
  // map is the logic in this code that results in List.test.js requring a placeholder prop
  const cardComponents = props.cards.map(item => 
    <Card 
      key={item.id} 
      allCardsID={item.id}
      title={item.title} 
      content={item.content}
      onDeleteItem={props.onDeleteItem}
      >  
    </Card>);

  return (
    <section className='List'>
      <header className='List-header'>
          <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
          {cardComponents}
          <button 
            onClick={() => props.onAddItem(props.listID)}
            type='button'   
            className='List-add-button'> 
              + Add Random Card 
          </button>
      </div>
    </section>
  )
}
