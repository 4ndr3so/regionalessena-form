import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VistaIntermedia from './VistaIntermedia';

describe('<VistaIntermedia />', () => {
  test('it should mount', () => {
    render(<VistaIntermedia />);
    
    const vistaIntermedia = screen.getByTestId('VistaIntermedia');

    expect(vistaIntermedia).toBeInTheDocument();
  });
});