import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

test('Header renders without unexpected changes', () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
