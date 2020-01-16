import React from 'react';
import List from './Composition/List';
import './App.css';
import STORE from './store.js';

function App(props) {
  const listsArray = STORE.lists;
  const listComponents = listsArray.map(item => 
    <List header={item.header} cards={item.cardIds.map(id => STORE.allCards[id])}
      key={item.id}>
    </List>
  )
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {listComponents}
      </div>
    </main>
  )
}

export default App;