import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ControlFetch from './ControlFetch';

describe('<ControlFetch />', () => {
  test('it should mount', () => {
    render(<ControlFetch />);
    
    const controlFetch = screen.getByTestId('ControlFetch');

    expect(controlFetch).toBeInTheDocument();
  });
});