import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import App from '../App.js';
import Results from '../components/results/results.js';


it('should render Star Wars list', () => {

  const person = {

    'name': 'Luke Skywalker',
    'height': '172',
    'mass': '77',
  }

  const header = 'application/json';

render (<Results count={82} headers={header} results={person} />);

const count = screen.getByTestId('count');
expect(count).toHaveTextContent('Count: 82');

})
