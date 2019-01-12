import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeSection from './WelcomeSection';

test('renders correctly', () => {
  const tree = renderer
    .create(<WelcomeSection
      header="test header"
      text="test text"
      image="testImageUrl"
      textPlacement="left"
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
