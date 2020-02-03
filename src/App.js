import React from 'react';
import List from './Composition/List';
import './App.css';

export default class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    // allCards is an object where each key is a card's ID and 
    // the value is the card object with a title and content.
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    }
  }

  handleAddItem = (listIDNumber) => {
    console.log('adding item to list #', listIDNumber)

    // function for generating a random card
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      var newCard = {};
      newCard[id] = {
        id: `${id}`, 
        title: 'Thirteenth card' + `${id}`, 
        content: 'lorem ipsum' 
      }
      return newCard;
    }

    // add key value pair to allCards object
    const newRanCard = newRandomCard()
    console.log(newRanCard)

    const newKey = Object.keys(newRanCard)[0]
    const newCard = {};
    newCard[newKey]= {
      id: `${newKey}`, 
      title: newRanCard[`${newKey}`].title, 
      content: newRanCard[`${newKey}`].content 
    }

    var currentCards = this.state.allCards;
    // creating new key/value pair inside of allCards
    currentCards[newKey] = newCard[newKey];
  

    this.setState({
      allCards: currentCards
    })

    console.log(this.state.allCards)

    // insert card's id in the appropriate lists's cardIds
  //   console.log(this.state.lists[`${listIDNumber}`])
    // loop through state.lists until i find the id that matches the argument for this function is 
    
  }
  
 // function omit = (obj, keyToOmit) => {
  //   return Object.entries(obj).reduce(
  //     (newObj, [key, value]) =>
  //         key === keyToOmit ? newObj : {...newObj, [key]: value},
  //     {}
  //   );
  // }

  handleDeleteItem = (cardIDLetter) => {
    console.log('handle delete item called', {cardIDLetter})
    // remove all references to this card from state
    
    // function omit({this.state.allCards}, )

    // remove the references to deleted card in each list's cardIds 

    // use map and filter to generate a new lists array
  }

  listComponents = () => {
    const listsArray = this.state.lists
    const listComponents = listsArray.map(item => {
      return (
      <List 
        onDeleteItem={this.handleDeleteItem}
        onAddItem={this.handleAddItem}
        listID={item.id}
        header={item.header} 
        cards={item.cardIds.map(id => this.state.allCards[id])}
        key={item.id}>
      </List>
      )
    })
    return (
      listComponents
    )
  }

  render () {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.listComponents()}
        </div>
      </main>
    )
  }
}

