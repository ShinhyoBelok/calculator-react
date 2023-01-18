import React from "react";
import Quote from "../Quote";
import renderer from 'react-test-renderer';

describe('Quote component', () => {
  test('Test Quote render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
