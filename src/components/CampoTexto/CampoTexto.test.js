import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CampoTexto from './CampoTexto';

describe('<CampoTexto />', () => {
  test('it should mount', () => {
    render(<CampoTexto />);
    
    const campoTexto = screen.getByTestId('CampoTexto');

    expect(campoTexto).toBeInTheDocument();
  });
});