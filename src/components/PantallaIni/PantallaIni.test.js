import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PantallaIni from './PantallaIni';

describe('<PantallaIni />', () => {
  test('it should mount', () => {
    render(<PantallaIni />);
    
    const pantallaIni = screen.getByTestId('PantallaIni');

    expect(pantallaIni).toBeInTheDocument();
  });
});