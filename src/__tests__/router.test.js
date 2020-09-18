import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';


beforeEach(() => render(<App />));


describe('App Router', () => {

  it('should load the home page', () => {
    fireEvent.click(screen.getByTestId('homelink'));
    const headers = screen.getAllByRole('heading');
    expect(headers).toHaveLength(3);
    expect(headers[1]).toHaveTextContent('Search History');
  })

  it('should load the history page using /history router', () => {
    fireEvent.click(screen.getByTestId('historylink'));
    const headers = screen.getAllByRole('heading');
    expect(headers).toHaveLength(4);
    expect(headers[1]).toHaveTextContent('Search History');
    expect(headers[2]).toHaveTextContent('Results')
  })

  it('should load the help page using /help router', () => {
    fireEvent.click(screen.getByTestId('helplink'));
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('¯\\_(ツ)_/¯')
  })
})