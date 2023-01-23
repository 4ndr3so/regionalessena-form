import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CierreRedes from './CierreRedes';

describe('<CierreRedes />', () => {
  test('it should mount', () => {
    render(<CierreRedes />);
    
    const cierreRedes = screen.getByTestId('CierreRedes');

    expect(cierreRedes).toBeInTheDocument();
  });
});