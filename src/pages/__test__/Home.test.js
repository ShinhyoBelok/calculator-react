import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home component', () => {
  test('Test Home render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
