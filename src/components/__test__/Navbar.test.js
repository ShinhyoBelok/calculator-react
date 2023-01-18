import React from "react";
import Navbar from "../Navbar";
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar component', () => {

  test('Test if Navbar render correctly', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});