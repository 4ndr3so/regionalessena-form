import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pqrs from './Pqrs';

describe('<Pqrs />', () => {
  test('it should mount', () => {
    render(<Pqrs />);
    
    const pqrs = screen.getByTestId('Pqrs');

    expect(pqrs).toBeInTheDocument();
  });
});