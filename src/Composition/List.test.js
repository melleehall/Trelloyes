import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import Card from './Card';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        // this placeholder prop is necessary to complete the mapping logic
        // we may end up passing in the actual data in a later test, but here we are just confirming that the correct elements render
        const cardArray = [];
        ReactDOM.render(<List cards={cardArray}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // For the snapshow test, add a test case that will
    // 1. Render the component and create a human-readable JSON file
    // 2. Compare the rendered component to a saved version of the component
    it('renders the UI as expected', () => {
        const cardArray = [];
        const tree = renderer
            // create() takes the component to be rendered and performs a render on it
            .create(<List cards={cardArray}/>
            )
            // then the toJSON() method creates the JSON file inside __snapshots__ 
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});