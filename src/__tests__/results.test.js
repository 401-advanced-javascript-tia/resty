import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen, getByRole, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';


const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        {name: 'test'},
        {name: 'nextTest'}
      ]
    }))
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should load and display names', () => {

  render(<App />);

  screen.getByText('ReSTy');

  const urlInput = screen.getByPlaceholderText('URL');

  fireEvent.change(urlInput, {event: {target: 'https://swapi.dev/api/people/'}});

  fireEvent.click(screen.getByText('Go!'));

  // this is cool!
  // screen.debug();

})

