import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormPrinci from './FormPrinci';

describe('<FormPrinci />', () => {
  test('it should mount', () => {
    render(<FormPrinci />);
    
    const formPrinci = screen.getByTestId('FormPrinci');

    expect(formPrinci).toBeInTheDocument();
  });
});