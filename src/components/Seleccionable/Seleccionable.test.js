import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Seleccionable from './Seleccionable';

describe('<Seleccionable />', () => {
  test('it should mount', () => {
    render(<Seleccionable />);
    
    const seleccionable = screen.getByTestId('Seleccionable');


  });
});