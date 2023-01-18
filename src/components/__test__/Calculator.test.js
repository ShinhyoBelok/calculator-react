import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator component', () => {
  test('Test Calculator render correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Correctly calculate ÷ of 2 numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    const output = screen.getByTestId('displayOutput');
    expect(output.innerHTML).toBe('5');
  });

  test('Correctly calculate + of 2 numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    const output = screen.getByTestId('displayOutput');
    expect(output.innerHTML).toBe('30');
  });
});
