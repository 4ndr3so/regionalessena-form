import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelecionRegional from './SelecionRegional';

describe('<SelecionRegional />', () => {
  test('it should mount', () => {
    render(<SelecionRegional />);
    
    const selecionRegional = screen.getByTestId('SelecionRegional');

    expect(selecionRegional).toBeInTheDocument();
  });
});