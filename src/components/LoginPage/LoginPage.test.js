import React from 'react';
import renderer from 'react-test-renderer';
import LoginPage from './LoginPage';

test('renders correctly', () => {
  const tree = renderer
    .create(<LoginPage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
