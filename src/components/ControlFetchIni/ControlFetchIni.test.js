import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ControlFetchIni from './ControlFetchIni';

describe('<ControlFetchIni />', () => {
  test('it should mount', () => {
    render(<ControlFetchIni />);
    
    const controlFetchIni = screen.getByTestId('ControlFetchIni');

    expect(controlFetchIni).toBeInTheDocument();
  });
});