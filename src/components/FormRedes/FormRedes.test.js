import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormRedes from './FormRedes';

describe('<FormRedes />', () => {
  test('it should mount', () => {
    render(<FormRedes />);
    
    const formRedes = screen.getByTestId('FormRedes');

    expect(formRedes).toBeInTheDocument();
  });
});