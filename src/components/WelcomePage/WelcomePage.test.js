import React from 'react';
import renderer from 'react-test-renderer';
import WelcomePage from './WelcomePage';

test('renders correctly', () => {
  const tree = renderer
    .create(<WelcomePage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
