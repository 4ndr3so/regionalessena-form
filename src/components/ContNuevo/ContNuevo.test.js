import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContNuevo from './ContNuevo';

describe('<ContNuevo />', () => {
  test('it should mount', () => {
    render(<ContNuevo />);
    
    const contNuevo = screen.getByTestId('ContNuevo');

    expect(contNuevo).toBeInTheDocument();
  });
});