import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Quote component', () => {
  test('Test Quote render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
